import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { chromium } from 'playwright';

// A local HTTP origin exercises workers and browser behavior as Pages will, without external APIs.
const html = await readFile(new URL('../index.html', import.meta.url));
const server = createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); res.end(html);
  } else { res.writeHead(404); res.end(); }
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const origin = `http://127.0.0.1:${server.address().port}`;
let browser;
try {
  browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.route('**/*', route => route.request().url().startsWith(origin) ? route.continue() : route.abort());
  await page.goto(origin, { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => document.querySelectorAll('#sgrid button').length > 0);
  const data = await page.locator('#explorer-data').textContent();
  const d = JSON.parse(data);
  assert.equal(d.sites.length, 120);
  assert.equal(d.scorers.length, 22);
  for (const scorer of d.scorers) for (const cell of Object.values(scorer.cells)) {
    assert.equal(cell.T.length, scorer.eligible.length * 3, `${scorer.name}: distance shape`);
    assert.ok(cell.T.every(x => Number.isFinite(x) && x >= 0), 'Finite nonnegative distances');
    assert.ok(cell.pub.p >= 0 && cell.pub.p <= cell.pub.q && cell.pub.q <= 1, 'Valid p/q range');
  }
  assert.equal(await page.locator('#s-sites').textContent(), '120');
  await page.locator('#p-missense').click();
  await page.locator('#f-perm').selectOption('999');
  await page.waitForFunction(() => document.querySelector('#s-sites').textContent === '86' && document.querySelector('#s-source').textContent.includes('Recomputed in your browser'), null, { timeout: 30000 });
  assert.match(await page.locator('#s-sig').textContent(), /of 66/);
  await page.locator('#null-weighted').click();
  await page.waitForFunction(() => document.querySelector('#s-source').textContent.includes('Recomputed in your browser'), null, { timeout: 30000 });
  assert.equal(await page.locator('#null-weighted').getAttribute('aria-pressed'), 'true');
  assert.equal(await page.locator('#titv-eq').textContent(), '= Ti:Tv 1');
  await page.locator('#p-paper').click();
  assert.equal(await page.locator('#s-sites').textContent(), '120');

  assert.deepEqual(errors, [], 'Uncaught browser errors');
  console.log('PASS: offline browser smoke, data integrity, and interactive recomputation');
} finally {
  await browser?.close();
  await new Promise(resolve => server.close(resolve));
}
