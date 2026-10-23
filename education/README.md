# Understanding the same-site AlphaGenome audit

[Download the companion PDF](COMPANION.pdf).

[Read the educational companion](COMPANION.md). It is written for someone with basic statistics and no assumed genetics background. Twelve teaching units explain the question, the null comparison, consequence-class effects, both replications and the limits of clinical labels. Each unit gives source locations, a plain-language explanation, evidence status, a misreading to avoid and a self-check. Answer notes, a glossary and a transfer exercise follow.

For a short route, read units **1–4** to understand the comparison, **6–8** to interpret the major results, and **10–12** for limits and responsible use of the browser explorer. The guide is not a clinical interpretation tool.

The explorer covers only the initial 120 coding sites in four genes. The guide also explains the paper's two replications; those additional cohorts are not embedded in the explorer. See the [repository entry](../README.md) for the live demo and its output terms.

## Exact source basis

Patrick Iben, *What do within-site comparisons of AlphaGenome Atlas predictions measure? An audit at ClinVar sites in 11 genes*, **preprint v3**, DOI **10.5281/zenodo.23546548**. The current record and latest-version endpoint were checked on **23 October 2026**.

- [Exact source PDF](https://zenodo.org/api/records/23546548/files/Iben_2026_AlphaGenome_within-site_audit_preprint_SUBMITTED-VERSION.pdf/content): `Iben_2026_AlphaGenome_within-site_audit_preprint_SUBMITTED-VERSION.pdf`, **40 pages**.
- Source PDF SHA-256: `9087089b334e7c5b1b6c4358150e3a181e80bb1aaf085ef8bc882f995563e8dd`.
- Frozen [study code and cached results](https://doi.org/10.5281/zenodo.23537469), version 1.0, and [seven-gene pre-specified plan](https://doi.org/10.5281/zenodo.23524782), version 1.0, retain their exact deposit identifiers.

The page references in the companion count the PDF title page as page 1. They point to the source version above, rather than to a changing web page. This guide does not silently update with later preprints.

The source's v3 notice corrects the PDF uploaded as v2. This companion was checked against the actual v3 PDF, not an older local manuscript or the mistaken v2 upload.

## Supplement checks

The full 40-page main paper was read. The five supplemental PDFs were retrieved from the same v3 record. Checks concentrated on tables needed for the guide: primary results and geometry definitions; consequence matching; per-gene counts; high-precision nulls; alternative labels and training exposure; and both replications. This is not a claim that every supplemental table cell was independently reanalyzed.

| Exact source file | Role in the check | SHA-256 |
|---|---|---|
| Additional_file_1.pdf | Coordinate-only baseline and gene-label recovery figures | `0b552344fbc770627ecb0d0bfbd722ac3476143c480b84376600de2bd7986858` |
| Additional_file_2.pdf | Sensitivities, geometry and scorer/background definitions | `0bbbcabb8085a220e59afa989ec75509bcae5d7912500ae997b934511ad2fd9f` |
| Additional_file_3.pdf | Consequence counts, matching and power | `6a57990997623e76b7c755f18c953673dd2dbc7cde7217e926fb5fb62981d1c1` |
| Additional_file_4.pdf | Per-gene and leave-one-gene-out checks | `22663f0631f2f048de39ae501901fefb684a490cb3883075c45ae40d90762923` |
| Additional_file_5.pdf | Exact nulls, labels, training exposure and replication tables | `d5590a61b7e73e3dd3cd4b158a294ff112de206690dce43db94f53f96dfa77bc` |

These files are available on the exact source record. Their names and hashes identify the checked artifacts without changing the scientific deposit.

## Educational status and terms

No suitable existing educational companion was found in the searched local AlphaGenome project material. This guide was newly prepared on **23 October 2026**, using the educational-fidelity principles of the manuscript validation harness. It includes source locators, evidence boundaries, explicit exercise answers and checks of its reported arithmetic.

This work is an educational fidelity check, not a new analysis or full scientific revalidation. No human learner-transfer study, audience-reader signoff or accessibility clearance is claimed. The exercises have not been administered to learners. A correct answer key is not evidence of successful teaching.

The guide changes no paper, data, model output, code license or legal terms. AlphaGenome-derived outputs in the explorer remain subject to the separate [output terms](https://deepmind.google.com/science/alphagenome/output-terms) and the repository's [binding terms notice](../LEGALLY_BINDING_TERMS_OF_USE.txt). The educational explanation does not grant rights beyond those terms.

## Download integrity

[ARTIFACTS.json](ARTIFACTS.json) records SHA-256 checksums for the teaching text and PDF. The Markdown version supports adjustable text size and browser reading.
