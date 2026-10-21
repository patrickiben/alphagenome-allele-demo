# Same-Site Allele Explorer

**Live:** https://patrickiben.github.io/alphagenome-allele-demo/

A single self-contained HTML page for the manuscript

> Iben P. *What does variant-profile similarity measure? An exploratory conditional same-site audit of AlphaGenome Atlas predictions at ClinVar-selected coding sites.* 2026.

At each of 120 ClinVar-selected coding sites in DNM1, PCCA, PCCB and MMUT, it asks whether the ClinVar substitution sits farther from a background profile than the other two possible substitutions, for each of 22 AlphaGenome Atlas scorers and three distance geometries. You can filter by gene, by the ClinVar allele's consequence and by flagged site, and choose the null model (uniform, or transition-weighted). The permutation test and the Benjamini–Hochberg correction then rerun in your browser.

- **Inputs.** The page is built only from the repository's cached outputs. All 66 comparisons were checked against the published `analysis.json` before embedding. Nothing is fetched from AlphaGenome, ClinVar or gnomAD while you use it.
- **Where the signal is.** In the paper, the within-site enrichment is concentrated at nonsense and start-loss sites. At the missense sites no comparison survives correction; the "Missense alleles only" preset reruns that slice.
- **Not clinical evidence.** This is not a pathogenicity predictor.

**Terms of use.** The per-site distances embedded in the page are Output Derivatives of AlphaGenome Atlas outputs. By using this information, you agree to the [AlphaGenome Output Terms of Use](http://deepmind.google.com/science/alphagenome/output-terms). A copy of the terms is included (`AlphaGenome-Output-Terms-of-Use.pdf`), and the modifications made to the outputs are listed in [`LEGALLY_BINDING_TERMS_OF_USE.txt`](LEGALLY_BINDING_TERMS_OF_USE.txt). The use restrictions include no commercial use and no training of machine-learning models outside the terms. No raw Atlas predictions are redistributed. The page's own code carries no additional license terms.

No build step, no tracking. Open `index.html` in any modern browser (it loads the IBM Plex fonts from Google Fonts).
