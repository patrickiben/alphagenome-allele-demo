# Same-Site Allele Explorer

**Live:** https://patrickiben.github.io/alphagenome-allele-demo/

A single self-contained HTML page for the manuscript

> Iben P. *What do within-site comparisons of AlphaGenome Atlas predictions measure? An audit at ClinVar sites in 11 genes.* Submitted to *Human Genomics*, 2026. Preprint: https://doi.org/10.5281/zenodo.23543155.

Corresponding [study code and data](https://doi.org/10.5281/zenodo.23537469) ·
[Manuscript → code → demo map](https://github.com/patrickiben/patrickiben/blob/main/RESEARCH_MAP.md).

Reproducibility package (code, cached predictions, results): https://doi.org/10.5281/zenodo.23537469. Pre-specified plan for the seven-gene replication: https://doi.org/10.5281/zenodo.23524782.

The page covers the paper's four-gene cohort. At each of 120 ClinVar-selected coding sites in DNM1, PCCA, PCCB and MMUT, it asks whether the ClinVar substitution sits farther from a background profile than the other two possible substitutions, for each of 22 AlphaGenome Atlas scorers and three distance geometries. You can filter by gene, by the ClinVar allele's consequence and by flagged site, and choose the null model (uniform, or transition-weighted). The permutation test and the Benjamini–Hochberg correction then rerun in your browser.

- **Inputs.** The page is built only from the repository's cached outputs. All 66 comparisons were checked against the published `analysis.json` before embedding. Nothing is fetched from AlphaGenome, ClinVar or gnomAD while you use it.
- **Where the signal is.** In this cohort, the within-site enrichment is concentrated at nonsense and start-loss sites. At the missense sites no comparison survives correction under the uniform null; the "Missense alleles only" preset reruns that slice.
- **What the replications found (not embedded in the page).** The paper adds two pre-specified replications: 384 held-out positions of the four genes' full ClinVar P/LP pool, and 1,713 positions in seven further genes. In the seven genes, consequence class explained much of the preference but not all of it: 10 of 66 comparisons stayed significant under a consequence-matched null. AVI singled out the ClinVar allele at 246 missense positions under a mutation-rate-aware null (38% against 33%), and 13 of 21 scorers did so at 63 other intronic positions.
- **Not clinical evidence.** This is not a pathogenicity predictor.

**Terms of use.** The per-site distances embedded in the page are Output Derivatives of AlphaGenome Atlas outputs. By using this information, you agree to the [AlphaGenome Output Terms of Use](http://deepmind.google.com/science/alphagenome/output-terms). A copy of the terms is included (`AlphaGenome-Output-Terms-of-Use.pdf`), and the modifications made to the outputs are listed in [`LEGALLY_BINDING_TERMS_OF_USE.txt`](LEGALLY_BINDING_TERMS_OF_USE.txt). The use restrictions include no commercial use and no training of machine-learning models outside the terms. No raw Atlas predictions are redistributed. The page's original code is licensed under MIT; this does not alter the separate output restrictions above.

No build step, no tracking. Open `index.html` in any modern browser (it loads the IBM Plex fonts from Google Fonts).

## Code license and third-party material

Original project code is licensed under [MIT](LICENSE), copyright 2026 Patrick Iben.
Third-party code, fonts, data, model assets and outputs retain their respective licenses and terms;
they are not relicensed by this file.
The embedded AlphaGenome-derived distances remain subject to the
[AlphaGenome Output Terms of Use](https://deepmind.google.com/science/alphagenome/output-terms)
and [`LEGALLY_BINDING_TERMS_OF_USE.txt`](LEGALLY_BINDING_TERMS_OF_USE.txt), including their
commercial-use and model-training restrictions. MIT applies to the original code, not those outputs.

## Browser smoke checks

Run `npm ci`, `npx playwright install --only-shell chromium`, then `npm test`.
The browser check runs from a local HTTP origin with external requests blocked. It exercises
interactive recomputation and checks packaged input/result integrity. It is a smoke check,
not independent validation of the deposited scientific analysis. GitHub Actions runs it on changes.
