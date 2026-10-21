# Same-Site Allele Explorer

**Live:** https://patrickiben.github.io/alphagenome-allele-demo/

A single self-contained HTML page for the manuscript

> Iben P. *What does variant-profile similarity measure? An exploratory conditional same-site audit of AlphaGenome Atlas predictions at ClinVar-selected coding sites.* 2026.

At each of 120 ClinVar-selected coding sites in DNM1, PCCA, PCCB and MMUT, it asks whether the ClinVar substitution sits farther from a background profile than the other two possible substitutions, for each of 22 AlphaGenome Atlas scorers and three distance geometries. You can filter by gene, by the ClinVar allele's consequence and by flagged site, and choose the null model (uniform, or transition-weighted). The permutation test and the Benjamini–Hochberg correction then rerun in your browser.

- **Inputs.** The page is built only from the repository's cached outputs. All 66 comparisons were checked against the published `analysis.json` before embedding. Nothing is fetched from AlphaGenome, ClinVar or gnomAD while you use it.
- **Where the signal is.** In the paper, the within-site enrichment is concentrated at nonsense and start-loss sites. At the missense sites no comparison survives correction; the "Missense alleles only" preset reruns that slice.
- **Not clinical evidence.** This is not a pathogenicity predictor.

The embedded per-site distances are derived from AlphaGenome Atlas outputs. They are shared for non-commercial research and remain subject to the [AlphaGenome terms of use](https://deepmind.google.com/science/alphagenome/terms): they may not be used commercially or to train models that predict variant effects. The page reduces the outputs to per-site distances and does not redistribute raw predictions.

No build step, no tracking. Open `index.html` in any modern browser (it loads the IBM Plex fonts from Google Fonts).
