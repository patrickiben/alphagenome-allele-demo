# Same-Site Allele Explorer

**Live:** https://patrickiben.github.io/alphagenome-allele-demo/

A single self-contained HTML page preserving the earlier audit:

> Iben P. *What do within-site comparisons of AlphaGenome Atlas predictions measure? An audit at ClinVar sites in 11 genes.* Earlier preprint, 2026. Preprint v3: https://doi.org/10.5281/zenodo.23546548.

[Earlier audit preprint](https://doi.org/10.5281/zenodo.23543154) ·
[Earlier audit code and data](https://doi.org/10.5281/zenodo.23537469) ·
[Manuscript → code → demo map](https://github.com/patrickiben/patrickiben/blob/main/RESEARCH_MAP.md).

**Project status, 28 October 2026.** The earlier manuscript received desk decisions for journal fit and is no longer under journal consideration. The current rework, *Auditing allele rankings in genomic predictions: consequence controls and contact-map anchoring*, has not been submitted. Its new toolkit audits contact-map anchoring and diagram rankings; this explorer retains the earlier background-profile comparison.

**Current rework:** [Code and toolkit](https://github.com/patrickiben/contact-map-anchor-audit) · [Live demo](https://patrickiben.github.io/contact-map-anchor-audit/) · [Study guide](https://github.com/patrickiben/contact-map-anchor-audit/blob/main/education/STUDY_GUIDE.pdf) · [Complete companion](https://github.com/patrickiben/contact-map-anchor-audit/blob/main/education/COMPANION.pdf).

Reproducibility package (code, cached predictions, results): https://doi.org/10.5281/zenodo.23537469. Pre-specified plan for the seven-gene replication: https://doi.org/10.5281/zenodo.23524782.

The page covers the paper's four-gene cohort. At each of 120 ClinVar-selected coding sites in DNM1, PCCA, PCCB and MMUT, it asks whether the ClinVar substitution sits farther from a background profile than the other two possible substitutions, for each of 22 AlphaGenome Atlas scorers and three distance geometries. You can filter by gene, by the ClinVar allele's consequence and by flagged site, and choose the null model (uniform, or transition-weighted). The permutation test and the Benjamini–Hochberg correction then rerun in your browser.

- **Inputs.** The page is built only from the repository's cached outputs. All 66 comparisons were checked against the published `analysis.json` before embedding. Nothing is fetched from AlphaGenome, ClinVar or gnomAD while you use it.
- **Where the signal is.** In this cohort, the within-site enrichment is concentrated at nonsense and start-loss sites. At the missense sites no comparison survives correction under the uniform null; the "Missense alleles only" preset reruns that slice.
- **What the replications found (not embedded in the page).** The paper adds two pre-specified replications: 384 held-out positions of the four genes' full ClinVar P/LP pool, and 1,713 positions in seven further genes. In the seven genes, 10 of 66 comparisons stayed significant under a consequence-matched null. Ranking AVI Euclidean distances from the background centroid placed the ClinVar allele first at 94 of 246 missense positions (38.2%). Separately, the consequence-matched, mutation-aware mean-statistic test was significant (q = 0.0013): the observed mean selected-minus-largest-other distance was -0.0128, compared with a simulated matched-null mean of -0.0829. That is enrichment relative to the specified null despite a negative average margin; the descriptive first-rank fraction is not the statistic tested by that q-value. At 63 other intronic positions, 13 of 21 scorers had significant mean-statistic comparisons. See the [earlier companion's replication account](education/COMPANION.md#p24-a-replicated-missense-mean-signal-is-small-and-heterogeneous) and the [rework's interpretation guide](https://github.com/patrickiben/contact-map-anchor-audit/blob/main/education/GUIDE.md#interpret-the-earlier-avi-result-precisely).
- **Not clinical evidence.** This is not a pathogenicity predictor.

**Terms of use.** The per-site distances embedded in the page are Output Derivatives of AlphaGenome Atlas outputs. By using this information, you agree to the [AlphaGenome Output Terms of Use](http://deepmind.google.com/science/alphagenome/output-terms). A copy of the terms is included (`AlphaGenome-Output-Terms-of-Use.pdf`), and the modifications made to the outputs are listed in [`LEGALLY_BINDING_TERMS_OF_USE.txt`](LEGALLY_BINDING_TERMS_OF_USE.txt). The use restrictions include no commercial use and no training of machine-learning models outside the terms. No raw Atlas predictions are redistributed. The page's original code is licensed under MIT; this does not alter the separate output restrictions above.

No build step, no tracking. Open `index.html` in any modern browser (it loads the IBM Plex fonts from Google Fonts).

## Educational companion for the earlier audit

[Concise study guide and complete companion](education/README.md), with separate PDFs, worked explanations, glossaries, answered self-checks and exact manuscript provenance. The complete companion covers the main paper and all five supplements; its [coverage map](education/COMPLETE_COVERAGE.md) makes the source-to-lesson correspondence explicit.

These documents remain tied to the earlier preprint v3. Use the current-rework links above for the new contact-map study and teaching materials.

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
