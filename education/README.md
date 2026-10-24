# Understanding the same-site AlphaGenome audit

Choose the depth you need:

- **Concise study guide:** [Markdown](STUDY_GUIDE.md) or [PDF](STUDY_GUIDE.pdf). Twelve teaching units, glossary, worked explanations and answered self-checks provide a first route through the question and main results.
- **Complete companion:** [Markdown](COMPANION.md) or [PDF](COMPANION.pdf). Eighty-one developed units walk through the exact main paper and all five supplements. Each includes a plain-language first pass, exact source details, reasoning, a boundary and an answered check. A glossary and twelve-item answered transfer test follow.
- **Coverage:** [Source-to-unit map](COMPLETE_COVERAGE.md) lists every substantive section, method, figure, table, formula and limitation, with reference and administrative coverage distinguished explicitly.

Both are for readers with basic statistics and no assumed genetics expertise. Neither is a clinical interpretation tool. References in the concise guide to Discussion subparts such as §3.1 or §3.3 mean the corresponding unnumbered synthesis or Limitations within Section 3; the complete companion uses the source's exact heading structure.

The explorer covers only the initial 120 coding sites in four genes. Both documents also explain the two replications; those additional cohorts are not embedded in the explorer. See the [repository entry](../README.md) for the live demo and output terms.

## Exact source basis

Patrick Iben, *What do within-site comparisons of AlphaGenome Atlas predictions measure? An audit at ClinVar sites in 11 genes*, **preprint v3**, DOI **10.5281/zenodo.23546548**.

- [Exact source PDF](https://zenodo.org/api/records/23546548/files/Iben_2026_AlphaGenome_within-site_audit_preprint_SUBMITTED-VERSION.pdf/content): `Iben_2026_AlphaGenome_within-site_audit_preprint_SUBMITTED-VERSION.pdf`, **40 pages**.
- Source PDF SHA-256: `9087089b334e7c5b1b6c4358150e3a181e80bb1aaf085ef8bc882f995563e8dd`.
- Frozen [study code and cached results](https://doi.org/10.5281/zenodo.23537469), version 1.0, and [seven-gene pre-specified plan](https://doi.org/10.5281/zenodo.23524782), version 1.0, retain their exact deposit identifiers.

The page references in the companion count the PDF title page as page 1. They point to the source version above, rather than to a changing web page. This guide does not silently update with later preprints.

The source's v3 notice identifies the PDF uploaded as v2 as a mistaken upload. The exact v3 file linked above is the scientific basis for both reading routes.

## Supplemental sources

The five supplemental PDFs on the v3 record cover coordinate-only baselines, geometry definitions, consequence matching, per-gene counts, exact nulls, alternative labels, training exposure and both replications.

| Exact source file | Contents | SHA-256 |
|---|---|---|
| Additional_file_1.pdf | Coordinate-only baseline and gene-label recovery figures | `0b552344fbc770627ecb0d0bfbd722ac3476143c480b84376600de2bd7986858` |
| Additional_file_2.pdf | Sensitivities, geometry and scorer/background definitions | `0bbbcabb8085a220e59afa989ec75509bcae5d7912500ae997b934511ad2fd9f` |
| Additional_file_3.pdf | Consequence counts, matching and power | `6a57990997623e76b7c755f18c953673dd2dbc7cde7217e926fb5fb62981d1c1` |
| Additional_file_4.pdf | Per-gene and leave-one-gene-out checks | `22663f0631f2f048de39ae501901fefb684a490cb3883075c45ae40d90762923` |
| Additional_file_5.pdf | Exact nulls, labels, training exposure and replication tables | `d5590a61b7e73e3dd3cd4b158a294ff112de206690dce43db94f53f96dfa77bc` |

These files are available on the exact source record. Their names and hashes identify the exact source artifacts.

## Scope and terms

The complete companion maps all substantive source items, including how to read the table families and their exceptions. The source tables provide the full numerical arrays. The teaching explanations are not independent biological experiments or clinical validation.

AlphaGenome-derived outputs in the explorer remain subject to the separate [output terms](https://deepmind.google.com/science/alphagenome/output-terms) and the repository's [binding terms notice](../LEGALLY_BINDING_TERMS_OF_USE.txt). The educational explanation does not grant rights beyond those terms.

## Download integrity

[ARTIFACTS.json](ARTIFACTS.json) records SHA-256 checksums for the teaching text and PDF. The Markdown version supports adjustable text size and browser reading.
