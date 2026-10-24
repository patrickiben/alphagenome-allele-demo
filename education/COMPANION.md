# Complete companion to the same-site AlphaGenome audit

## Reader, purpose and exact basis

This is a complete educational walkthrough of Patrick Iben's *What do within-site comparisons of AlphaGenome Atlas predictions measure? An audit at ClinVar sites in 11 genes*, preprint **v3**, DOI **10.5281/zenodo.23546548**. It covers the substantive main text, both main tables and figures, all eight numbered limitations, all Methods subsections, declarations, both supplementary figures and every table in all five additional files. It is longer and more detailed than the separate [concise study guide](STUDY_GUIDE.md).

The intended reader has one course in statistics and no assumed genetics expertise. Start with P01–P08 if the vocabulary is new. Follow P09–P39 for results and interpretation, P40–P55 for methods and source roles, and P56–P81 for the supplementary reading laboratory. The glossary and twelve-item transfer test are at the end. You can work through the document without installing software.

The exact main source has 40 PDF pages. The five supplements have 2, 5, 4, 2 and 8 pages. All page references count the title page of the named PDF as page 1. The source PDF SHA-256 is `9087089b334e7c5b1b6c4358150e3a181e80bb1aaf085ef8bc882f995563e8dd`. The [reader entry](README.md) identifies all six source files, hashes and deposits. [COMPLETE_COVERAGE.md](COMPLETE_COVERAGE.md) maps every source section, figure, table, formula and limitation to teaching units and distinguishes administrative/reference coverage.

Completeness means an explicit teaching treatment of each substantive source item, including how to read all table families and their exceptions. It does not mean copying every table cell, reproducing every reference citation, independently recomputing the biological model, or certifying the entire manuscript. The scientific source remains authoritative. Exact source tables should be open when comparing individual rows.

## The evidence contract

Each unit gives the source location, what the passage is doing, evidence class, a plain-language first pass, exact source details, reasoning or a worked illustration, a boundary, and a self-check with an answer. The first pass gives the idea before the more technical names and numbers. Read the question before its answer.

The labels distinguish **definitions**, **public-record summaries**, **cached model outputs**, **statistical analyses**, **exploratory checks**, **pre-specified replications**, **interpretation**, **limitations**, and **author declarations**. A reported result is attributed to the paper, not re-established experimentally by this guide. A pre-specified test may fail. An unavailable comparison stays unavailable. A prediction does not become a measurement because it appears in a table.

Only P07, P08, P42 and P44 use invented numerical examples; they are expressly hypothetical and illustrate arithmetic. Other numerical examples quote the paper or recompute transparent arithmetic from its reported values. The arithmetic does not add new empirical findings. Rounded displayed numbers may not reproduce a source calculation's final decimal.

These boundaries apply throughout:

- The comparison is selected versus other possible substitutions, not a general pathogenic-versus-benign clinical test.
- Holding position fixed removes the coordinate shortcut, not consequence confounding, label circularity or every training-exposure route.
- The initial missense reading is inconclusive; the further-gene planned result is positive but small and heterogeneous.
- The planned “mainly consequence class” criterion fails. Favorable post hoc explanations do not overwrite it.
- The demo contains the initial four-gene cohort, not all replication data, and its exploratory reruns are not independent confirmation.
- These explanations do not support patient recommendations or establish clinical validity.

## P01. Read the title as a question about a comparison

**Where we are:** Main PDF pp 1–2, title and Abstract.

**What the passage is doing:** Defines the target question before presenting an appealing count of significant tests.

**Evidence class:** SCOPE / REPORTED ANALYSIS

**In ordinary language:** The paper tests a narrow question. At one DNA position, does the change named by ClinVar stand out from its two rivals? The answer depends on the sample and the rule used for comparison. A result from the first four genes is not the same result as one from seven further genes. Neither result is a patient diagnosis.

**Source details, definitions and reported values:** The paper asks what a comparison of model predictions measures. It does not start by asking whether a patient's variant causes disease. Those are different tasks. A model can separate two samples because of where the samples were collected, or because they contain different kinds of DNA change. Neither route needs fine discrimination among changes at one position.

The title's phrase within-site means holding a DNA coordinate fixed. At each chosen coordinate, the audit compares the change recorded by ClinVar with the other two possible changes. It then asks whether a preference remains when the changes have the same predicted molecular consequence.

The abstract compresses three study stages. The first has 120 coding positions in four genes. A replication adds 384 held-out positions in those genes. Another adds 1,713 primary positions in seven further genes. The initial 17 of 66 result and the seven-gene 10 of 66 matched result belong to different samples and nulls. They cannot be exchanged in a sentence.

**Reasoning or worked illustration:** Build a claim with four slots: sample, comparison, statistic and reference rule. For the initial result these are the 120 selected sites, three alternatives per site, distance-based preference and uniform label reassignment. The later result changes both sample and reference rule. Keeping the slots explicit prevents an abstract's short phrases from becoming a broad clinical claim.

**Do not accidentally conclude:** The abstract reports an audit of predictions and labels. It does not report a field experiment, patient-outcome prediction, or a genome-wide diagnostic test.

**Self-check:** Why is “17 tests succeeded” not enough to describe the main finding?

**Answer:** It omits the sample, test family, measured contrast and null. Seventeen refers to scorer–geometry comparisons in the initial cohort; it is not a count of correctly diagnosed patients.

## P02. From DNA letters to predicted molecular tracks

**Where we are:** Main §1, PDF pp 2–3; Table S6, Additional file 2 pp 4–5.

**What the passage is doing:** Introduces AlphaGenome, Atlas and AVI as related but distinct layers.

**Evidence class:** DEFINITION / SOURCE DESCRIPTION

**In ordinary language:** The model turns DNA sequence into predicted signals. A scorer turns those signals into values for a DNA change. This paper then turns the values into distances and tests. Each step adds a choice. AVI also uses other inputs, including labels for the kind of change. A rich output is not itself proof of a specific biological meaning.

**Source details, definitions and reported values:** DNA has four standard bases, commonly written A, C, G and T. A single-nucleotide variant, or SNV, changes one letter. A reference allele is the letter in the chosen reference genome. An alternate allele is a different letter at that coordinate.

AlphaGenome predicts molecular signals from DNA sequence. A track is one kind of predicted signal, tied to an assay, tissue or feature. Atlas supplies precomputed predictions for possible substitutions. Its scorer turns the reference and alternate predictions into a value or profile.

AVI is a further trained ensemble. It combines AlphaGenome-derived features with AlphaMissense, conservation and consequence annotations. The audit examines the scalar AVI score, its input features and the feature contributions separately. These are not three unrelated models. The paper uses the uncalibrated AVI score returned by its pinned client.

A rich profile can represent many properties at once. The audit's question is which properties explain the observed contrast, not whether having more tracks automatically makes a benchmark better.

**Reasoning or worked illustration:** Follow the path sequence → predicted tracks → variant scorer → profile → distance → test. Each arrow adds a choice. The distance test is several steps removed from a direct biological measurement. AVI adds another layer because some of its inputs already encode the kind of DNA change being compared.

**Do not accidentally conclude:** A model output is a prediction. The word activity in a track description does not mean the study measured that activity in these patients or experimentally tested these substitutions.

**Self-check:** Which is more direct: a predicted track or the audit’s distance from a centroid?

**Answer:** The track is the model output. The centroid distance is a later summary of outputs. Neither is a new biological measurement made by this study.

## P03. Why benchmarks with different controls answer different questions

**Where we are:** Main §1, PDF pp 2–3, prior-work and question paragraphs.

**What the passage is doing:** Positions the audit beside other evaluations without treating them as replications of one task.

**Evidence class:** INTERPRETIVE / CITED CONTEXT

**In ordinary language:** Tests with different controls can answer different questions. One can compare chosen variants with distant background variants. Another can compare changes at the same position. A third can compare predictions with measured cell effects. Success on one task does not settle the others. The cited studies help define this paper's question; their results are not new results from this audit.

**Source details, definitions and reported values:** A benchmark is a test with chosen examples, labels and scoring rules. Changing the controls changes what success can mean. A pathogenic-versus-benign benchmark, a functional-assay benchmark and a same-position comparison need not agree. They may measure different properties.

The paper cites earlier work on consequence matching, gene-level shortcuts and information shared between training and evaluation. It also cites an external RNU4-2 evaluation against saturation-editing fitness. Its reported pairwise concordance is 49.2%, with a 95% interval of 44.1–54.3. That is a cited result from another study. It is not an estimate produced by this audit, and its statistic differs from the audit's selected-allele extremity.

The four initial genes were chosen to contrast DNM1 with three recessive propionate-pathway genes. The deep intronic DNM1 example discussed by Atlas developers is absent from this coding-only cohort. A reader must not assume that a familiar gene name makes the tested variants the same.

**Reasoning or worked illustration:** Imagine two exams using the same calculator. One tests arithmetic and another tests whether the right formula was chosen. Agreement on one exam does not settle the other. Here the labels, variant classes and comparison units are part of the exam. The paper's contribution is the explicit same-position question across scorers, followed by consequence checks and replications.

**Do not accidentally conclude:** The companion explains the cited comparison as context. It does not independently validate the cited external studies or claim that their metrics are interchangeable.

**Self-check:** Can the RNU4-2 concordance be subtracted from this paper’s most-extreme fraction to measure improvement?

**Answer:** No. The samples, labels and metrics differ. A difference between those numbers would not estimate a shared performance quantity.

## P04. The initial cohort is selected, recent and coding-only

**Where we are:** Main §2.1, PDF p 4 and p 5 opening; §5.1 pp 24–25; Table S14.

**What the passage is doing:** Describes what entered the first analysis and what the selection process excluded.

**Evidence class:** PUBLIC-RECORD SUMMARY / SCOPE

**In ordinary language:** The first sample was chosen through a capped query and a filter. It contains coding changes in four genes. Some classes and older records were less likely to enter. The count is therefore not a census of all variants in those genes. The details below show who was included, who was excluded, and why that matters for the reported result.

**Source details, definitions and reported values:** The initial 520 variants comprise 120 ClinVar-selected variants and 400 background SNVs. The selected variants are 20 DNM1, 15 PCCA, 27 PCCB and 58 MMUT. Their recorded classes are 86 missense, 32 nonsense and 2 start loss. A missense change alters a protein building block. Nonsense creates a stop signal; start loss disrupts an initiation signal.

The query capped returned records at 120 per gene before filtering. Default descending identifiers favored recently registered records. Of the selected 120, 104 were first submitted in 2024–2026, 101 have one submitter and 75 are classified likely pathogenic. This is not a balanced survey of all variants in these genes.

The curation rule rejected 60 records with intronic notation. Thus the first cohort contains no intronic variants, though five selected coding alleles lie close to exon boundaries. An exonic change near a junction is not the same as a canonical intronic splice-site record. The distinction matters when reading the later splice results.

**Reasoning or worked illustration:** Add 20+15+27+58 to recover 120; add 86+32+2 to recover the same denominator. These are two descriptions of one sample, not separate datasets. Query caps and filtering determine who remains, so conclusions apply to that constructed cohort before they apply to a wider variant universe.

**Do not accidentally conclude:** The large percentage of recent submissions is not evidence that all selected variants were absent from every training source. Submission dates and training-source membership are different facts.

**Self-check:** Why should a result from these 120 sites not be described as a test of all ClinVar variation?

**Answer:** The cohort is limited to selected genes, recent capped records, coding P/LP SNVs and the stated curation rules. Intronic and other noncoding classes are not represented initially.

## P05. Integrity checks stop a wrong-row result

**Where we are:** Main §2.1, PDF pp 4–5; §5.2 p 25; §5.9 p 30.

**What the passage is doing:** Separates correct data handling from the scientific interpretation of correctly handled data.

**Evidence class:** REPORTED ENGINEERING AUDIT

**In ordinary language:** Correct numbers can still belong to the wrong DNA change if rows are joined by order. This audit checks identities and source metadata. It also checks that stored and merged data agree. Those checks reduce the chance of a data-handling error. They do not prove the predictions are biologically right or the clinical labels are free of error.

**Source details, definitions and reported values:** All 520 reference alleles were checked against the indexed GRCh38 reference sequence. The audit checks variant order, observation metadata, merged arrays and track counts. The 360-variant same-site cache passes equivalent checks. For the 120 selected variants, rows agree across the original and same-site caches for all 22 scorers.

A crucial detail is that raw response rows do not follow submission order. The analysis joins rows using explicit variant identifiers. An identifier must include the position and alleles needed to distinguish one substitution from another. Assuming that row one belongs to submitted variant one could assign convincing numbers to the wrong change.

These checks support internal coherence. A correct reference allele and stable cache do not establish that ClinVar classifications are error-free. Nor do they establish the biological validity of a scorer. They remove a class of preventable engineering explanations for a result.

**Reasoning or worked illustration:** A spreadsheet can have correct formulas in every row but still be wrong if names and measurements were sorted separately. Joining by identity, then checking metadata, addresses that problem. The paper also checks repeated outputs and independently implements its summary. These are complementary checks: correct joining, stable inputs and correctly computed summaries.

**Do not accidentally conclude:** Bit-identical caches show repeatability in the checked setup. They do not establish independence from training data, independent human review, or predictive value in a new population.

**Self-check:** What would a checksum verify, and what would it leave unresolved?

**Answer:** It verifies exact file identity. It does not verify that rows are joined correctly or that an interpretation is warranted. The paper reports additional semantic data checks for those reasons.

## P06. Coordinate recognition succeeds because of the sampling design

**Where we are:** Main §2.2, PDF p 5; Figure S1.

**What the passage is doing:** Exposes an easy route to apparently perfect selected-versus-background performance.

**Evidence class:** REPORTED NEGATIVE CONTROL

**In ordinary language:** The background sample was kept away from the chosen sites. A rule using location alone can then separate the groups. That is a clue about the test design, not proof of model skill. Comparing three changes at one position removes this shortcut. It leaves other differences, including the type of change, to be checked separately.

**Source details, definitions and reported values:** The background sample excludes a band of 50 kilobases on either side of every selected coordinate. A kilobase is a thousand DNA bases. The selected variants occupy four gene regions. That construction leaves a strong geographic clue along the genome.

Among 400 background SNVs, 76 lie on a chromosome carrying one of the disease genes. Their nearest selected-site distance is at least 259,073 bases. None lies within 100 kilobases, and only one lies within a megabase. A coordinate-only rule can therefore distinguish the chosen samples perfectly. It need not know whether a substitution changes a molecular function.

This is a deliberately revealing negative control. It challenges an interpretation of cross-locus separation, not the fact that genomic location can be biologically important. The same-position comparison fixes the coordinate so that this shortcut cannot choose among the three alternate bases.

**Reasoning or worked illustration:** Ask what information is allowed to vary between groups. When selected sites are near chosen genes and backgrounds are kept away, a classifier can learn proximity to those genes. If all alternatives share one coordinate, proximity becomes constant and drops out of their comparison. Consequence still varies, which motivates the next set of controls.

**Do not accidentally conclude:** Perfect separability here is an attribute of the constructed benchmark. It is not a new performance result for AlphaGenome or a claim that location-based tools diagnose disease perfectly.

**Self-check:** What control removes the coordinate shortcut without claiming all other confounding is gone?

**Answer:** Compare substitutions at the same coordinate. This holds locus fixed, while leaving consequence differences, label construction and other shared evidence to be examined separately.

## P07. Constructing the three-way comparison

**Where we are:** Main §2.3, PDF p 5; §5.3 pp 25–26; §5.4 p 26.

**What the passage is doing:** Defines the basic distance contrast that every primary row summarizes.

**Evidence class:** ANALYSIS DEFINITION

**In ordinary language:** Each change receives a distance from an average background profile. At a site, the chosen change is compared with its strongest rival. The paper averages that gap across sites. This is a specific summary of model outputs. It loses much of the profile's detail and does not turn distance into a probability of disease.

**Source details, definitions and reported values:** For each scorer, the study forms a background centroid: the mean profile of background SNVs with usable output. It measures each of the three substitutions' distances from that centroid. The symbol T stands for one such distance.

At a site, the contrast is T for the selected substitution minus the larger T of the other two. The analysis averages that contrast over eligible sites. Eligibility can differ by scorer because not every output is available. The comparison requires complete profiles for the alternatives needed by that scorer.

This construction asks whether the selected change stands out more than its strongest rival. It reduces a multi-track prediction to a single unsigned distance. It therefore loses information about which track changes, whether the change is an increase or decrease and whether a tissue is relevant to a particular disease.

**Reasoning or worked illustration:** Hypothetical illustration: suppose distances are 1, 2 and 4. Selecting the variant at 4 gives 4−2=2. Selecting the one at 2 gives 2−4=−2; selecting the one at 1 gives 1−4=−3. The examples are teaching arithmetic, not model outputs or risk scores. They show why comparing against the maximum alternative is demanding.

**Do not accidentally conclude:** The contrast is not the raw AVI score, a disease probability, a treatment effect or an experimentally measured functional effect. Larger unsigned distance need not mean greater pathogenicity.

**Self-check:** What information is discarded when a full profile becomes one unsigned distance?

**Answer:** Track identity, effect direction and much of the pattern across tissues are not retained in the scalar contrast. Those losses limit biological interpretation even if the statistic is computed correctly.

## P08. A negative null is expected, not a sign error

**Where we are:** Main §2.3, PDF pp 5–7; §5.4 p 26.

**What the passage is doing:** Explains why inference must use the null distribution rather than zero.

**Evidence class:** DEFINITION / NULL ASSUMPTION

**In ordinary language:** A random choice often loses to the strongest of two rivals. The reference mean for this test is therefore usually negative. A result can improve on that mean while still being below zero. The right comparison is with the stated null distribution. Judging the result only by its sign would ask a different question.

**Source details, definitions and reported values:** The primary null randomly labels one of the three substitutions selected at each site. The profiles and distances do not move. Under that rule a random selection often loses to the largest rival, so the mean contrast is generally negative.

For three ordered distances a≤b≤c, the possible contrasts are a−c, b−c, andc−b. Their sum is a−c. Their mean is therefore(a−c)/3. It equals zero only when the smallest and largest distances coincide. The paper states this as the average of(min T−max T)/3 across sites.

A positive excess means the observed mean exceeds this negative reference. It does not require the observed mean itself to be positive. Conversely, judging an observation against zero would answer a different question and could misclassify the reported evidence.

**Reasoning or worked illustration:** Using the hypothetical distances 1, 2, 4 from P07, the null contrasts are−3,−2 and 2. Their mean is−1, matching(1−4)/3. A contrast above−1 can improve on the null while remaining below zero. This small example derives the reference exactly; it is not a simulated scientific result.

**Do not accidentally conclude:** The uniform null is a chosen label-exchangeability assumption. It does not assert that real mutations occur equally often, that all alternatives are benign, or that clinical classifications were assigned at random.

**Self-check:** In the illustration, does contrast−0.5 prove that the selected variant beats its strongest rival?

**Answer:** No. A negative contrast loses to the strongest rival. It is nevertheless above the illustration’s null mean−1. Statistical comparison and outright first place are distinct.

## P09. Read Table 1 in columns, not just by its highlighted rows

**Where we are:** Main Table 1, PDF p 6; §2.3 pp 5–7.

**What the passage is doing:** Teaches the primary table’s sample sizes, statistic, reference, standardized excess and ranks.

**Evidence class:** REPORTED ANALYSIS

**In ordinary language:** Each table column answers a different question. One counts sites, one describes the gap, and one gives the null mean. Other columns report statistical evidence or first-place frequency. Read them together. A small adjusted value does not tell you how often the chosen allele ranks first, and a first-place fraction is not clinical accuracy.

**Source details, definitions and reported values:** Table 1 shows the 17 comparisons that pass the initial BH correction. The columns have different jobs. The n column counts eligible positions. Statistic is the mean selected-minus-largest-rival contrast. Null mean is its reference expectation. The z column divides the excess by the null standard deviation. The q column adjusts the test across the 66-comparison family. Most extreme counts how often the selected allele is farthest.

AVI_SCORE in Euclidean geometry has statistic+0.091 and null mean−0.104. The excess is about+0.195. Its first-place fraction is 0.517. RNA_SEQ in that geometry has−0.036 against−0.126, an excess of+0.090, and fraction 0.458. Both pass correction, but one has a positive observed contrast and the other does not.

POLYADENYLATION has 106 eligible positions rather than 120. Fourteen incomplete profiles are concentrated in PCCA. Comparing table rows without their denominators would hide that unequal support.

**Reasoning or worked illustration:** Read a row aloud in order: “For this scorer and geometry, at this many sites, the mean contrast is this far above its own null; its adjusted evidence is q, while its first-place fraction is f.” This sentence keeps statistical strength, effect size and ranking separate. A large z can reflect a small null variability; it is not itself a clinical effect size.

**Do not accidentally conclude:** Table 1 is a selected significant subset. Non-significant comparisons are in S1. A result absent from this table is not automatically missing data, and a listed result is not automatically robust to every analysis choice.

**Self-check:** Why can RNA_SEQ be in the significant table despite its negative statistic?

**Answer:** Its statistic−0.036 is above its more negative null mean−0.126. The test uses their difference and the full null distribution, not the sign of the observed contrast.

## P10. Seventeen comparisons are neither 17 independent models nor 17 patients

**Where we are:** Main §2.3, PDF pp 5–7; Figure 1 p 39; Tables S1, S12.

**What the passage is doing:** Explains the family-level result and what numerical precision adds.

**Evidence class:** REPORTED MULTIPLICITY / PRECISION CHECK

**In ordinary language:** Many tests share the same sites, profiles and model inputs. The significant rows are not independent discoveries. The paper checks both multiple testing and the precision of its random calculations. These checks support the reported count under the stated rules. They do not add new genes or new biological measurements to the sample.

**Source details, definitions and reported values:** Twenty-two scorers and three geometries produce 66 nominal comparisons. BH correction controls a stated multiple-testing target within that family under its conditions. Seventeen comparisons, spanning eight scorers, pass q < 0.05. The geometries reuse profiles, AVI-derived scorers share inputs and active-allele scorers derive from base tracks. These tests are strongly dependent.

The BY check retains all 17 primary findings, with maximum adjusted value 0.026. This supports the count under a dependence-robust correction. A 99,999-permutation rerun and exact null calculation retain the same 17. Their purpose is to check simulation precision and a threshold boundary, not to introduce new samples.

The 18th primary comparison, CONTACT_MAPS Poincaré, lies near but above the uniform-null threshold. Its exact tail is about 0.0150. Its significance under another null does not mean the original uniform result was a rounding error.

**Reasoning or worked illustration:** Count levels carefully: a site supplies three alternatives; a scorer supplies profiles; a geometry measures distance; a test summarizes across eligible sites. Recomputing a test with another seed changes numerical resolution. It does not add independent biological observations. Correcting multiple tests also does not correct label circularity or sample selection.

**Do not accidentally conclude:** No p-value or q-value here is the probability that a particular variant is pathogenic. The primary correction does not automatically cover all later exploratory analysis families.

**Self-check:** What remains unchanged when 9,999 permutations become 99,999?

**Answer:** The sites, profiles, statistic and scientific question remain unchanged. The Monte Carlo estimate of the null tail becomes more precise; it is not a new biological replication.

## P11. Figure 1 separates magnitude evidence from first-place frequency

**Where we are:** Main Figure 1, PDF p 39 and §2.3 pp 6–7.

**What the passage is doing:** Translates the two panels and their axes into two distinct questions.

**Evidence class:** REPORTED FIGURE / READING METHOD

**In ordinary language:** The figure shows two views of preference. One uses the size of gaps from a null mean. The other counts first places. These views need not agree. A chosen allele can move closer to a rival without overtaking it. Read each axis and reference line before turning the figure into a claim about model performance.

**Source details, definitions and reported values:** Panel A plots standardized excess: observed mean minus null mean, divided by the null standard deviation. Labels identify comparisons passing BH correction. A point's horizontal or vertical visual position must be read with the actual axis, not with a clinical interpretation attached to the scorer's name.

Panel B shows the proportion of sites where the selected substitution is the most extreme. Marker shape identifies geometry. The reference line is one third under uniform selection. AVI_SCORE cosine is omitted because the scalar cosine comparison is undefined.

The panels need not tell identical stories. A scorer may systematically reduce a selected allele's deficit to its rival without changing which allele ranks first. It may then show magnitude enrichment with weak ranking enrichment. Conversely, a rank statistic discards the size of gaps once the order is known.

**Reasoning or worked illustration:** Use the RNA_SEQ row of Table 1 as a reading exercise. Its selected variant is farthest at less than half the sites, yet its mean is far above the negative null. Those statements are compatible. In P07's hypothetical triple, moving the selected distance toward the leader improves the contrast before it changes rank. Figure 1 places those two summaries next to each other deliberately.

**Do not accidentally conclude:** The chance line is tied to the uniform three-choice null and the reported tie rules. It is not a universal prevalence, false-positive rate or clinical action threshold.

**Self-check:** Would a point above the chance line prove high clinical sensitivity?

**Answer:** No. It describes a chosen-label ranking task among alternatives at selected positions. Clinical sensitivity requires defined positive cases and a diagnostic decision rule, which this figure does not provide.

## P12. Non-significant, undefined and weakly allele-varying are different cases

**Where we are:** Main §2.3, PDF p 7; Tables S1, S6, S17.

**What the passage is doing:** Prevents all unhighlighted scorer rows from being treated as equally informative negatives.

**Evidence class:** REPORTED ANALYSIS / SCOPE

**In ordinary language:** A weak result can have several causes. A test may be well defined but find little evidence. Another may lack useful variation among the three changes. A third may rest on very few background profiles. An undefined calculation is different again. These cases should not all be called evidence that a model contains no useful information.

**Source details, definitions and reported values:** Several base scorers do not show significant primary enrichment. Their outputs are not all equally supported. AVI_SCORE_MODEL_FEATURES uses only two background SNVs for its centroid because the required AlphaMissense input is unavailable elsewhere. Its null result has a very weak reference basis.

Seven_ACTIVE scorers return the activity of the more active reference or alternate allele. Their profiles vary little among the three substitutions at one site. A nearly shared positional activity is a poor instrument for choosing among alternatives. None is significant in the primary analysis. Removing their 21 tests and reapplying BH changes the family:18 of 45 then pass, including CONTACT_MAPS Poincaré.

AVI_SCORE is a scalar. Its cosine comparison is not interpreted. A software table may retain a placeholder row, but displaying a value does not make an undefined mathematical comparison useful. Missingness, limited variation and a non-significant well-defined test require different explanations.

**Reasoning or worked illustration:** Before interpreting a null, ask three questions: was the statistic defined, was there useful variation among alternatives, and was the reference profile supported? These checks precede the p-value. Removing tests changes the multiplicity penalty, which explains why a borderline comparison can pass in a smaller family without any output changing.

**Do not accidentally conclude:** An active-allele scorer is not useless for every task. Its limitation here concerns within-position allele selection. A weak centroid does not imply the underlying biological model contains no information.

**Self-check:** Why should “not significant” for the two-background feature scorer receive a caveat?

**Answer:** The comparison rests on an unusually small and unrepresentative background reference. Its failure to reject is not a strong negative test of the scorer’s biological information.

## P13. Alternative processing choices test the robustness of an interpretation

**Where we are:** Main §2.3, PDF pp 7–8; Tables S2–S3.

**What the passage is doing:** Shows which conclusions survive changes to summary, scale, pooling and null.

**Evidence class:** EXPLORATORY SENSITIVITY ANALYSIS

**In ordinary language:** Changing the summary or the processing rule can change which tests pass. A total alone hides which findings were lost or gained. Follow individual scorer rows as well as the count. These checks show dependence on analysis choices. They reuse the same data, so they are not a series of independent replications.

**Source details, definitions and reported values:** The paper checks several plausible analysis routes. Mean within-site rank yields seven significant comparisons; a top-one binomial test yields 13. Quantile score space yields 16; mean target pooling yields 15; native global scale yields 14. Own-gene pooling preserves 17. These counts are not new independent validations. They reuse the data while changing an analysis choice.

The five AVI comparisons survive every alternative analysis in S2–S3. Other scorers are more sensitive. RNA_SEQ loses significance under mean pooling. SPLICE_JUNCTIONS loses the mean-statistic result in quantile space, even though its first-place fraction stays high. Native scaling can create an_ACTIVE finding through magnitude without ordering.

The mutation-spectrum settings also alter the reference selection probabilities. Their effect is conceptually different from changing the distance calculation, but both can change which comparisons pass a threshold. Robustness means stating what remains stable and what depends on the route.

**Reasoning or worked illustration:** Compare one row across S3b efore comparing totals across S2. A total can stay similar while the identities of significant tests change. A result that persists across processing choices has stronger conditional robustness than one found on a single route, but all routes still share labels, loci and model release.

**Do not accidentally conclude:** These alternatives were mostly added after the primary result was known. Do not count favorable routes as independent votes or select one route solely because it increases the significant count.

**Self-check:** Why is “16 rather than 17” an incomplete summary of the quantile sensitivity?

**Answer:** It hides which tests were lost and gained. SPLICE_JUNCTIONS loses its mean result while RNA_SEQ cosine gains one. The scientific interpretation depends on those identities, not just the total.

## P14. AVI already contains information about consequence

**Where we are:** Main §2.4, PDF p 8; Table S6.

**What the passage is doing:** Explains why loss-of-function preference may partly reflect explicit model inputs.

**Evidence class:** MODEL DESCRIPTION / INTERPRETATION

**In ordinary language:** AVI receives inputs about the type of DNA change. If the chosen change alone creates a stop signal, those inputs can help it stand out. The clinical label may use related evidence. This does not make the signal false. It means the test must ask what is added beyond that already-known class difference.

**Source details, definitions and reported values:** AVI combines 18 input features:10 AlphaGenome aggregates, AlphaMissense, two conservation scores, three loss-of-function flags and two indel indicators. Conservation describes the position and is constant among its substitutions. Loss-of-function flags can vary when one change creates a stop signal and its rivals do not. AlphaMissense is available for relevant missense changes.

The initial sample has 26 positions where the selected allele is the only loss-of-function alternative. A model receiving that flag has a direct route to favoring it. ClinVar classification of null variants in genes with a loss-of-function disease mechanism can use related biological evidence. Thus agreement need not be an independent discovery of hidden disease information.

This does not make consequence irrelevant. It makes consequence an explicit part of what is measured. The scientific question becomes whether additional preference remains when consequence is held fixed, and whether labels supply evidence independent of the inputs.

**Reasoning or worked illustration:** Imagine a test asking a model to identify a stop-gain variant while one input is a stop-gain flag. Success may be useful operationally, but it cannot by itself validate information beyond that flag. The consequence-only baseline and matched null make this potential shortcut visible rather than assuming every signal is novel.

**Do not accidentally conclude:** The paper does not establish that the other scorers secretly use the same consequence flags. Their concentration at these sites is observed in predictions but does not isolate a biological mechanism.

**Self-check:** Which AVI inputs cannot by themselves distinguish substitutions at a fixed site?

**Answer:** The position-level conservation scores are constant within a site. Allele-varying loss-of-function flags, AlphaMissense and AlphaGenome aggregates can contribute to within-site contrasts.

## P15. Table 2 and Figure 2 show the mixture behind a headline fraction

**Where we are:** Main §2.4, Table 2 pp 8–11; Figure 2 p 40; Table S7.

**What the passage is doing:** Decomposes the initial result into consequence groups and site types.

**Evidence class:** EXPLORATORY STRATIFIED ANALYSIS

**In ordinary language:** The pooled first-place fraction mixes groups with very different results. The model often favors a chosen stop or start-loss change. It favors a chosen missense change much less often. A sample with more of the easier group can have a higher overall fraction without any change in within-group behavior. The figure makes this mixture visible.

**Source details, definitions and reported values:** AVI_SCORE ranks the selected allele first at 30 of 34 nonsense or start-loss positions, but at 32 of 86 missense positions. Those fractions are 0.882 and 0.372. Combining them produces the overall 0.517. The headline fraction therefore depends on the mixture of classes, not just a fixed underlying skill.

Figure 2 uses four site types:26 unique selected loss-of-function sites; 8 sites with two or three loss-of-function alternatives; 75 all-missense sites; and 11 missense-selected sites with another consequence among alternatives. The black bars show the expected performance of a simple consequence-severity rule, with random ties. Red distinguishes AVI-derived scorers, blue other scorers. Error bars are Wilson intervals.

The POLYADENYLATION denominators differ across those groups:20, 5, 71 and 10. These add to 106 rather than 120. The figure does not license treating every bar as if it had the same sample support.

**Reasoning or worked illustration:** Compute(30+32)/120=62/120≈0.517. A pooled fraction lies between its group fractions and changes if their weights change. That is why later population composition and held-out replication matter. A rule that recognizes a large between-class difference may have much weaker performance among same-class alternatives.

**Do not accidentally conclude:** The contrast is not a sensitivity/specificity table. All sites were selected through P/LP records, and most alternatives lack benign labels. Confidence intervals also condition on the chosen sites and do not establish transport across genes.

**Self-check:** If a new sample contains more nonsense sites, must its higher pooled fraction show a better model?

**Answer:** No. The model can retain identical within-group behavior and achieve a higher pooled fraction because the sample mixture shifted toward the easier group.

## P16. A simple consequence rule is a necessary comparator

**Where we are:** Main §2.4, PDF p 9; Figure 2 p 40; Table S21 for later comparison.

**What the passage is doing:** Asks how much preference can be achieved without a molecular prediction model.

**Evidence class:** EXPLORATORY BASELINE

**In ordinary language:** A simple rule can rank changes by broad consequence class without using model outputs. It provides a useful baseline for this benchmark. Ties contribute expected fractions rather than observed wins. A close result between this rule and AVI helps explain the sample. It does not prove the rule is a safe clinical substitute or that the methods are equivalent.

**Source details, definitions and reported values:** The model-free rule orders stop gain or start loss above missense, and missense above synonymous. If alternatives tie, the rule chooses randomly. It uses broad consequence labels rather than AlphaGenome predictions. Its expected initial-cohort first-place fraction is 0.489, close to AVI_SCORE at 0.517.

An expected fraction can be fractional because ties contribute probabilities. At a site where all three changes are missense, this rule expects one third of a correct selection. Where only the selected change is a stop gain, it selects that change with certainty under its rule. The overall expectation averages those site-level chances.

This is a baseline for interpreting the benchmark. It is not a validated clinical classifier. Some missense changes can be severe and some predicted loss-of-function changes require transcript- and gene-specific interpretation. The rule deliberately ignores such details to ask how far simple class information goes in this chosen sample.

**Reasoning or worked illustration:** A complex model should be compared with a simple rule using information already present in the labels. Otherwise one may attribute a class distinction to finer molecular insight. The baseline's closeness is explanatory evidence, not a claim that the two methods are statistically equivalent or equally useful in every setting.

**Do not accidentally conclude:** The baseline was added after seeing the initial results. It is exploratory. A point estimate close to another does not prove equivalence, and neither estimate represents patient-level diagnostic accuracy.

**Self-check:** Why can a random-tie rule have a non-integer expected number of first places?

**Answer:** Each tied site contributes a probability rather than an observed win. Adding those probabilities yields an expectation, such as 58.7 of 120, not a claim that a fraction of a patient was classified.

## P17. Matching consequence changes the task and the available positions

**Where we are:** Main §2.4, PDF p 9; Methods §5.5 p 27; Table S9 pp 2–3.

**What the passage is doing:** Checks preference among alternatives of the selected allele’s consequence class.

**Evidence class:** EXPLORATORY MATCHED-NULL ANALYSIS

**In ordinary language:** Matching allows rivals from the same consequence class. Sites with no same-class rival cannot answer that question and drop out. Both the reference rule and the sample change. The remaining signal is much weaker in the initial cohort. A small boundary finding remains, with important limits from multiple testing and shared data.

**Source details, definitions and reported values:** The matched null reassigns selection only among alternatives that share the selected allele's consequence. A selected nonsense change is compared with eligible nonsense alternatives, rather than with a missense rival. Positions with a unique selected class cannot contribute that comparison and are dropped.

Removing the 26 unique-class sites leaves 94 initial positions. Two of 66 comparisons remain BH-significant, both SPLICE_JUNCTIONS. Their q is 0.046. BY adjustment gives about 0.22, so they do not pass that dependence-robust check. AVI_SCORE does not remain significant.

A conditional-logit check models the selected label within each site using loss-of-function status and distance. Its direction is similar, but it is not independent evidence: it reuses the same positions and outputs. Matching narrows the interpretation, but the retained 94 positions are not identical to the initial 120.

A descriptive proximity check finds SPLICE_JUNCTIONS first place at 9 of 12 sites within 3 bases of a recorded junction, versus 52 of 108 other sites. That is a post hoc description, not an independent experiment isolating splicing. Its coordinate definition must stay with the counts.

**Reasoning or worked illustration:** Two things change together: which comparisons are allowed within a position and which positions remain. To estimate how much a signal declines on a fixed set, one should compare the uniform and matched analyses at the same eligible positions. The expanded-panel post hoc analysis later makes precisely that comparison. The initial drop in significant count alone is not a percentage of biological information removed.

**Do not accidentally conclude:** Borderline significance should retain its family and correction context. A matched-null result is not automatically robust to the many analysis families explored in the study.

**Self-check:** Can the drop from 17 to 2 be called “15 independent effects explained by consequence”?

**Answer:** No. The tests are dependent, the null changes and positions drop out. It shows a substantial change in this family’s evidence, not 15 separate biological mechanisms.

## P18. Why the initial missense result remains inconclusive

**Where we are:** Main §2.5, PDF pp 9–11; Table 2; Tables S10, S15, S16.

**What the passage is doing:** Avoids converting non-rejection into proof of no allele-level information.

**Evidence class:** EXPLORATORY STRATUM / UNCERTAINTY

**In ordinary language:** The initial missense result is uncertain. It does not show a large ranking advantage, but it does not prove there is no useful signal. The genes contribute unevenly and the null matters. A comparison with the stronger mixed-cohort effect also has limits. The source keeps these questions separate rather than calling every nonsignificant test a true zero.

**Source details, definitions and reported values:** No initial missense comparison survives correction under the uniform three-way null. AVI_SCORE places the selected allele first at 32 of 86 sites, or 0.372, with a Wilson 95% interval of 0.277–0.478. This does not demonstrate a large ranking advantage. It also does not prove that the predictions contain no useful information.

The reference full-cohort effect mixes high-scoring nonsense sites with lower-scoring missense sites. Showing that missense excludes that mixed effect partly restates the class contrast. Some other scorers have low power against their own full-cohort effects. A non-significant result can therefore coexist with broad uncertainty.

Gene representation matters too. MMUT provides 49 of 86 missense sites. AVI_SCORE is first at 12 of 49 MMUT sites but 10 of 17 PCCB sites. Pooling them into one fraction hides this heterogeneity. Removing one gene after seeing the result is informative exploration, not a new confirmatory sample.

**Reasoning or worked illustration:** Separate three questions: is the mean above a chosen null, is the first-place fraction above its reference, and is a clinically important effect ruled out? They use different statistics and thresholds. The power checks help with the third question only relative to the assumed effect and sample structure; they cannot manufacture an independent population of genes.

**Do not accidentally conclude:** The source calls the initial missense finding inconclusive. A guide must preserve that verdict rather than choose either “no information” or “validated signal” from one favorable sensitivity.

**Self-check:** Why does excluding the mixed full-cohort fraction not prove that missense effects are zero?

**Answer:** The reference contains an easier consequence class. A smaller but nonzero missense effect can be incompatible with that pooled reference while remaining uncertain relative to its own null.

## P19. Mutation weights alter the reference, not the observed ranks

**Where we are:** Main §2.5, PDF pp 10–11; Methods §5.4 p 26 and §5.6 pp 28–29; Tables S16, S19.

**What the passage is doing:** Distinguishes the probability of selecting alternatives from the model’s ranking of them.

**Evidence class:** NULL ASSUMPTION / SENSITIVITY

**In ordinary language:** Mutation weights change how often each rival is chosen under the null. They do not change the model's observed ranks. A smaller p-value can therefore arise with the same first-place count. The weight rule must be named with the result. The assumed weights are not measurements of the true mutation rate at every tested site.

**Source details, definitions and reported values:** Each position offers one transition and two transversions. A transition swaps within the purine or pyrimidine family; a transversion crosses families. Equal probabilities imply one transition for two transversions overall, not a transition-to-transversion ratio of two.

The paper uses per-transition weights 2, 4 and 6 against weights 1 for each transversion. These imply total Ti:Tv ratios 1, 2 and 3. The original configuration mislabeled weight 2 as Ti:Tv 2; the manuscript corrects that label. A separate context-aware null adds a multiplier for CpG transitions.

The observed distances and first-place count stay fixed when weights change. What changes is the reference probability that the selected-label assignment would be favored. In the initial missense sample, the inference depends on these choices. That dependence is part of the finding and motivates a planned weighted analysis in further genes.

**Reasoning or worked illustration:** For ratio 2, use weights 4, 1, 1. The transition probability is 4/6=2/3, while the combined transversion probability is 2/6=1/3. For weights 2, 1, 1 these probabilities are both 1/2. A change in expected selection can strengthen or weaken significance without improving a single prediction.

**Do not accidentally conclude:** These are specified relative mutation weights, not measured rates at each tested position. The selected missense transition share 0.488 does not validate arbitrarily stronger weights.

**Self-check:** Can a smaller p-value under a weighted null mean that the model’s observed first-place fraction increased?

**Answer:** No. The same ranks are compared with a different reference distribution. Report the null and observed fraction separately.

## P20. The full-pool replication tests the original sampling boundary

**Where we are:** Main §2.6, PDF pp 12–13; Methods §5.6 p 28; Table S18.

**What the passage is doing:** Expands the first four genes while distinguishing records, positions and held-out positions.

**Evidence class:** PRE-SPECIFIED REPLICATION / LOCALLY DATED PLAN

**In ordinary language:** The first replication uses new positions in the same four genes. It separates records from positions and defines a primary set with one P/LP allele. That makes the held-out count smaller than the full record count. It repeats the class contrast, but it still concerns the same few loci. Its plan was locally dated, not publicly registered.

**Source details, definitions and reported values:** The star-filtered pool contains 635 P/LP SNVs at 556 positions. Records and positions differ because several P/LP alternatives can share a coordinate. The primary comparison uses 482 positions with exactly one P/LP allele. Of those, 384 lie outside the original 120 positions and form the primary held-out set.

The first plan was written before scores were retrieved. Its timing is supported by local files, not an external registration. The replication reuses the same analysis pipeline, background centroids, scorers and geometries. Re-fetching 7,812 cohort variant–scorer pairs gives identical outputs, and shared code reproduces the original analysis.

The held-out result strongly repeats the nonsense-versus-missense contrast: AVI_SCORE is first at 99 of 107 nonsense/start-loss positions and 60 of 169 missense positions. These are 0.925 and 0.355. Held-out positions improve the sampling check within those four genes; they do not remove the four-locus scope limit.

**Reasoning or worked illustration:** Follow the filtering chain rather than subtracting 635−120. The scientific unit is a position with one primary P/LP choice. Records sharing a position and the one original no-star record affect the counts. A held-out coordinate is new to the initial cohort, but it can remain biologically similar and share model/label mechanisms with earlier positions.

**Do not accidentally conclude:** Identical stability-control outputs establish cache consistency, not an independent biological validation or proof of no training exposure. Locally dated planning is not equivalent to repository-timestamped preregistration.

**Self-check:** Why is 384 the held-out denominator rather than all 635 pool records?

**Answer:** The primary unit is a position with exactly one P/LP allele, and original positions are excluded. The 635 figure counts variant records before those position-level restrictions.

## P21. A threshold miss is still a miss under the planned reading

**Where we are:** Main §2.6, PDF pp 12–13; Table S18.

**What the passage is doing:** Preserves the first replication’s missense stopping rule and its separate exploratory findings.

**Evidence class:** PRE-SPECIFIED RESULT / POST-HOC DISTINCTION

**In ordinary language:** A planned threshold should be applied as written. A value just above it is not a passed confirmation, even if it is close. Later weighting can reveal useful patterns, but it does not replace the named planned test. The paper keeps the first replication's missense reading inconclusive and labels the favorable follow-ups separately.

**Source details, definitions and reported values:** The held-out missense-matched AVI_SCORE result has q = 0.0506, displayed as 0.051 in a rounded table. The planned rule requires q < 0.05. It does not pass. AVI_SCORE_FEATURE_IMPORTANCE has q = 0.046, but that is not a substitute for a criterion naming AVI_SCORE.

The initial 86-site context-aware result points the other way under its planned weighted null. The first replication plan keeps the missense question inconclusive when these readings disagree. Later weighting of the held-out null gives q = 0.002; it is explicitly outside that plan. Adding the original cohort back to the pool also produces favorable results, but reuses the original observations.

At 93 held-out canonical splice positions no comparison passes. At 13 other intronic positions, 21 of 60 comparisons pass the uniform null. The small intronic sample motivates a planned test in further genes rather than a broad biological conclusion from 13 positions.

**Reasoning or worked illustration:** A threshold is a decision rule, not a cliff in biological reality. Values just above and below it can contain similar information. Yet a pre-specified confirmation claim must honor its rule. Reporting 0.0506 as “about 0.05” and declaring success would alter the rule after observing the result.

**Do not accidentally conclude:** The null result does not prove zero missense information. The favorable post hoc weighting does not retrospectively turn the planned reading into a successful confirmation.

**Self-check:** What should a transparent report say about q = 0.0506 when the criterion is q < 0.05?

**Answer:** It narrowly misses the planned threshold. Keep the exact value and uncertainty, then label later weighted analyses as exploratory rather than changing the decision.

## P22. Seven further genes enlarge the scope but do not make a random genome sample

**Where we are:** Main §2.7, PDF pp 13–15; Methods §5.6 pp 28–29; Tables S20, S20c.

**What the passage is doing:** Explains the expanded panel, controls and class contrast.

**Evidence class:** PUBLICLY PRE-SPECIFIED REPLICATION

**In ordinary language:** The next replication adds seven genes under a public plan. It gives the study wider scope and repeats a large class contrast. Yet the genes are selected and contribute unequal numbers of sites. Many variants in one gene do not equal many independent genes. The larger sample is useful without becoming a random test of the whole genome.

**Source details, definitions and reported values:** The seven further genes are SCN5A, BAP1, HFE, ASS1, TSC1, BRCA2 and RB1. They come from a 12-gene panel curated earlier. HLA-A has no eligible P/LP SNVs, leaving 11 studied loci overall. Same-chromosome gene pairs were chosen at least a megabase apart to separate gene from chromosome more than the original four-locus design could.

There are 2,144 positions, including 1,713 primary positions with one P/LP allele. All 6,432 substitutions were scored. A public Zenodo plan predates score retrieval. It fixes six readings and stopping rules. Re-scoring 7,878 original variant–scorer pairs produces identical values.

AVI_SCORE is first at 1,095 of 1,238 nonsense/start-loss positions and 94 of 246 missense positions. The reported difference is 0.50, with 95% interval 0.44–0.56. Four of six selected scorers without consequence inputs also show a positive class contrast. This repeats an important pattern beyond the original genes, with explicit exceptions.

**Reasoning or worked illustration:** The relevant comparison is not “many variants therefore many independent genes.” BRCA2 alone supplies 708 of 1,238 nonsense/start-loss positions. New genes reduce one scope restriction but preserve selection, disease-mechanism and label dependencies. Per-gene counts show who contributes to the pooled result.

**Do not accidentally conclude:** The expanded panel is not a random sample of all genes or mechanisms. The public timestamp supports pre-specification of its stated analyses, not every later post hoc comparison.

**Self-check:** Why does adding 1,713 positions not justify a genome-wide performance claim?

**Answer:** They come from seven selected additional genes with uneven class counts and shared labels. Coverage improves from four to 11 loci, but the sampling design remains restricted.

## P23. The “mainly consequence” confirmatory criterion was not met

**Where we are:** Main §2.7, PDF pp 13–14; Table S20, Table S21.

**What the passage is doing:** Keeps the strongest explanatory temptation separate from the actual decision rule.

**Evidence class:** PRE-SPECIFIED FAILED CRITERION / EXPLORATORY EXPLANATION

**In ordinary language:** The planned conclusion requires two conditions. One passes and one fails. The matched discovery count is too large for the stated bound. A later analysis helps explain how much the signal shrinks on fixed sites, but it cannot rewrite the plan. A faithful report keeps the strong pattern and the failed criterion together.

**Source details, definitions and reported values:** The panel plan asks whether matching consequence removes enough evidence to support the phrase mainly consequence class. Its count criterion permits matched significant comparisons M at most one quarter of uniform significant comparisons U. Here U=37 and M=10. The bound 37/4 is 9.25. Ten is above it, so that criterion fails.

A second criterion compares AVI_SCORE excess 0.037 at 452 matchable positions with 0.651 at all 1,490 coding positions. It passes its stated bound. But it compares different sets. A later fixed-position check compares 0.146 uniform excess with 0.037 matched excess at the same 452 positions. The reported reduction is 74.8%, leaving about 25.2%, just above a quarter.

Both analyses suggest a large consequence contribution. Neither licenses changing the failed planned conclusion. The manuscript explicitly stops short of claiming that its comparisons mainly measure consequence class under that confirmatory rule.

**Reasoning or worked illustration:** A composite rule requiring two conditions is not satisfied because one holds. Compute the count bound before interpreting the pattern. Then ask whether a reported reduction compares the same sites. Matching can remove sites and change the estimand, so a fixed-position check answers a useful additional question without overwriting the plan.

**Do not accidentally conclude:** Do not round 74.8% to 75% and convert it into a passed threshold. The reported decimals are rounded summaries; the source’s planned verdict remains the scientific record.

**Self-check:** How would you report a strong class contrast and a failed criterion together?

**Answer:** The class contrast replicates and matching removes much of the signal, but the pre-specified “mainly consequence class” criterion is not met. Both statements belong in the conclusion.

## P24. A replicated missense mean signal is small and heterogeneous

**Where we are:** Main §2.7, PDF pp 14–15; Discussion pp 17–18; Tables S20c, S21.

**What the passage is doing:** Explains the positive panel result without turning it into strong general ranking performance.

**Evidence class:** PRE-SPECIFIED RESULT / EXPLORATORY FOLLOW-UP

**In ordinary language:** The further-gene missense result is positive under its planned test. Its first-place advantage is small and differs by gene. Outside chromosome 13, the rank fraction is near chance while the mean test remains positive. Gap size and ordering are different summaries. Shared clinical evidence also limits the claim of independent biological prediction.

**Source details, definitions and reported values:** At 246 missense positions AVI_SCORE selects the ClinVar allele first at 94, or 0.382. Under the planned consequence-matched, mutation-aware null, its q is 0.0013. Seventeen of 66 comparisons pass that family. A uniform matched sensitivity also gives positive mean evidence. These support a within-class preference in the tested panel.

The fraction differs by gene. The reported values range from 0.25 in BAP1 and 0.29 in SCN5A to 0.49 in BRCA2 and 0.64 in TSC1; HFE supplies only two missense positions. Outside chromosome 13, the selected allele is first at 58 of 170 positions, or 0.341, near one third. The mean test remains significant there: the retained signal is about magnitude, not compelling first-place ranking.

Post hoc direct-score analyses find AlphaMissense and AVI raw scores perform similarly and choose the same allele at 172 of 245 positions. Shared inputs and clinical evidence limit an independent biological reading.

**Reasoning or worked illustration:** Use the same sentence structure as Table 1: cohort, null, mean evidence, rank fraction, heterogeneity and scope. It prevents a small but statistically supported mean effect from becoming “the model reliably identifies the pathogenic allele.” A mean can improve even where first-place counts barely depart from a simple reference.

**Do not accidentally conclude:** P/LP labels may use computational evidence. A positive missense result therefore does not by itself establish independent functional prediction or clinical utility, even in held-out positions.

**Self-check:** Why can significance persist outside chromosome 13 while the first-place fraction is near 1/3?

**Answer:** The tested mean uses gap sizes as well as ordering. It can improve relative to the null without producing a large change in the number of first places.

## P25. Canonical splice and other intronic positions ask different questions

**Where we are:** Main §§2.6–2.7, PDF pp 12–15; Discussion p 18; Tables S18, S20.

**What the passage is doing:** Distinguishes a no-preference result among similarly disruptive alternatives from other intronic enrichment.

**Evidence class:** PRE-SPECIFIED STRATUM RESULTS

**In ordinary language:** At canonical splice positions, all three changes may disrupt the same signal. Failing to prefer one does not show that none has an effect. Other intronic sites show preference, but several kinds of scorer share it. The audit does not isolate splicing as the cause. Keep the relative-choice question separate from measured RNA function.

**Source details, definitions and reported values:** At canonical splice positions all three alternatives can disrupt the same conserved boundary signal. The test does not compare each alternative with an intact reference sequence. It asks which of the three is singled out. No comparison passes at 93 held-out pool positions or 157 panel positions.

Other intronic positions share an intronic annotation but can differ in local effects. In the panel, splice scorers place the selected allele first at 46 or 47 of 63 positions. The signal persists in the 50 positions within 20 bases of an exon and 13 deeper positions. These subsets remain selected and small, especially the deeper group.

Twenty-one of the 29 significant other-intronic comparisons involve scorers without a splicing mechanism. Splicing is a plausible candidate explanation, but this design cannot isolate it. Clinical intronic labels can also use splice-prediction or RNA evidence, preserving a circularity route.

**Reasoning or worked illustration:** Keep three contrasts apart: alternate versus reference, one alternate versus the others, and measured RNA function. This study primarily addresses the second using predictions and clinical labels. A null in the second contrast does not refute an effect in the first, and a positive second contrast does not establish the third.

**Do not accidentally conclude:** The result is not “AlphaGenome cannot detect canonical splice disruption,” nor is it proof that every other-intronic signal measures splicing. Both exceed what was tested.

**Self-check:** How could all three canonical alternatives be damaging and still give no selected-allele preference?

**Answer:** If they disrupt the same signal similarly, the model need not rank the clinically selected one above the other damaging alternatives. The audit tests relative selection, not damage versus intact reference.

## P26. Gene-label recovery is a descriptive contrast, not the main test

**Where we are:** Main §2.8, PDF p 15; Methods §5.7 p 29; Figure S2.

**What the passage is doing:** Explains what clustering adds and why one small adjusted Rand result is not gene recovery.

**Evidence class:** EXPLORATORY DESCRIPTIVE ANALYSIS

**In ordinary language:** The clustering exercise averages the three changes at each site. It then asks whether groups resemble gene labels. The small positive result comes from a few outliers, not recovery of four gene groups. Changing the correction family also matters. This is a separate descriptive task, not a validation of the main allele-selection test.

**Source details, definitions and reported values:** For this analysis the three substitution profiles at a site are averaged. Sites are then clustered, and cluster labels are compared with four gene names using adjusted Rand index, or ARI. ARI corrects pair agreement for a chance reference; values near zero indicate little agreement under that comparison.

AVI_SCORE_MODEL_FEATURES shows no gene structure at the tested settings. Its 75 eligible sites have all three substitutions missense so that AlphaMissense is defined for each. RNA_SEQ at five clusters gives ARI 0.037 and q 0.03 within its scorer family, but q 0.063 when both scorers form one family. The apparent pattern is four singleton outliers separated from one 116-site cluster, not recovery of four gene groups.

The analysis changes the unit representation from allele-specific profiles to site averages. It therefore cannot directly adjudicate the primary allele-selection question. Both can be weak or strong for different reasons.

**Reasoning or worked illustration:** A clustering score must be interpreted alongside cluster sizes and the tested family. A few unusual sites can improve a pair-agreement index without producing one cluster per biological label. Looking at membership avoids treating a small corrected number as a discovered taxonomy.

**Do not accidentally conclude:** The four-gene design confounds gene, chromosome and local sequence context. Even perfect label recovery would not identify which of those properties drove clustering.

**Self-check:** Why is “q = 0.03 therefore the model recovers genes” unsupported?

**Answer:** The effect is tiny, changes under a joint family correction and is driven by four outliers, not four coherent gene clusters. The source explicitly rejects that stronger interpretation.

## P27. Known-pathogenic alternatives make the labels harder to interpret

**Where we are:** Main §2.9, PDF pp 15–16; Tables S5, S13.

**What the passage is doing:** Checks flagged alternatives while retaining the absence of a true benign control set.

**Evidence class:** EXPLORATORY LABEL AUDIT

**In ordinary language:** Most rivals are not known to be benign. Some are P/LP themselves; many have no record. Removing known rivals checks one problem but does not label the rest harmless. The few likely-benign pairs also differ in class. This is not enough to show a broad ability to sort harmful from harmless variants.

**Source details, definitions and reported values:** Among 240 unselected substitutions, the snapshot has 196 without a ClinVar record, 11 uncertain, 4 conflicting, 23 P/LP and 6 likely benign. Twenty-two P/LP alternatives at 21 positions have assertion criteria. Excluding those 21 positions leaves 99 and increases AVI_SCORE first place from 0.517 to 0.566.

The flagged alternative at chr9:128219079 is itself pathogenic. Removing that site leaves 119 and changes the AVI_SCORE mean only slightly, from about 0.0908 to 0.0916. These checks show that this known label complication does not create the initial primary findings.

The six likely-benign alternatives are all synonymous. Comparisons with them repeat a consequence distinction. Even six successes in six independent sign-test pairs yield a smallest one-sided p of 1/64≈0.0156 before multiple-test correction. They are too few and too compositionally restricted to establish pathogenic-versus-benign discrimination.

**Reasoning or worked illustration:** A test can be conservative with respect to its chosen selected-label contrast when some rivals are themselves pathogenic. That does not solve the problem of unknown rivals. Removing known P/LP alternatives is useful sensitivity analysis, but it does not transform the remaining no-record alternatives into known benign controls.

**Do not accidentally conclude:** No ClinVar record is not a benign classification. The word control refers to a comparison role, not a guarantee of harmlessness.

**Self-check:** What is wrong with calling the remaining alternatives “healthy controls”?

**Answer:** Most have no clinical classification, and the study does not observe healthy people carrying them. They are possible substitutions used for a within-position comparison.

## P28. The training audit bounds one declared route

**Where we are:** Main §2.10, PDF p 16; Methods §5.8 pp 29–30.

**What the passage is doing:** Identifies which selected variants could enter AVI’s declared frequency-label training pool.

**Evidence class:** TARGETED TRAINING-EXPOSURE AUDIT

**In ordinary language:** The training audit checks one declared source of AVI labels. It combines chromosome, exact allele and frequency information. Most selected variants are outside that defined pool; two remain uncertain. This does not clear every input or the clinical labels. The details explain why absence from one data source differs from absence from all model exposure.

**Source details, definitions and reported values:** The declared AVI training labels use gnomAD v4.1 genome variants on chromosomes 1, 4, 7, 8, 10, 13 and 15. Proxy-neutral and proxy-impactful labels depend on a filtering allele-frequency rule. All 15 PCCA selected sites lie on chromosome 13. The other 105 are outside the declared training and validation chromosomes.

The allele-level gnomAD check finds 67 absent from its index, 38 absent from genomes, 14 genome singletons without the needed FAF label and one labeled variant off the training chromosomes. Twelve unlabeled singletons are outside the training chromosomes. Two PCCA singletons remain indeterminate. Thus 118 selected variants are outside the declared pool; none is confirmed inside it.

This conclusion concerns the declared AVI label route. The nonselected substitutions were not queried. AlphaMissense exposure and other feature sources are not cleared. The base model's reference-sequence exposure is a separate issue.

Of the 38 variants absent from genomes, 32 are present in exomes. Absence from the genome source used for these labels is therefore not absence from every sequencing dataset. The audit follows the declared source rather than treating all gnomAD observations as interchangeable.

**Reasoning or worked illustration:** Membership requires several conditions together: the correct allele, genome observation, a usable label and a declared training chromosome. A missing condition can establish nonmembership under that declaration; an unknown label on a training chromosome leaves uncertainty. The audit avoids replacing unknown with absent.

**Do not accidentally conclude:** “No confirmed member” is weaker than proof of no leakage. The panel has many chromosome 13 positions that were not individually queried. Clinical labels can share model evidence even without direct training overlap.

**Self-check:** Why are the two PCCA singletons called indeterminate rather than definitely unseen?

**Answer:** They lie on a declared training chromosome but lack the frequency label needed to classify membership. The model report does not resolve how those variants were labeled.

## P29. Chromosome exclusion changes consequence composition too

**Where we are:** Main §2.10, PDF p 16; Table S4.

**What the passage is doing:** Explains why a smaller signal after removing a gene cannot be attributed wholly to training exposure.

**Evidence class:** SENSITIVITY / INTERPRETATION

**In ordinary language:** Removing a gene changes more than possible training exposure. It also changes the mix of consequence classes. A lower statistic after removal can partly follow from losing easier sites. The paper checks that explanation with a projection. The projection is not a causal measure of training bias removed, and it cannot separate all reasons for the change.

**Source details, definitions and reported values:** Removing the 15 PCCA sites leaves 105 positions and retains all 17 primary findings after BH. AVI_SCORE Euclidean excess drops from about 0.195 to 0.144. It would be tempting to call that loss training contamination. The source instead examines class composition.

PCCA has 10 loss-of-function selected alleles among 15 sites. The remaining 105 sites have 24. Removing PCCA therefore removes a disproportionately easy class. Applying the full-cohort class-specific statistics to the new composition predicts about 70% of the AVI decrease, with 0.65–0.76 across its five comparisons.

Some observed statistics change sign after exclusion while remaining significant. This is another reminder that the null mean, not zero, determines the test. The subset analysis tests robustness to one exclusion, while its interpretation must account for what else was excluded.

**Reasoning or worked illustration:** A subgroup can differ in two ways at once: possible training exposure and consequence distribution. Deleting it changes both. Composition calculations ask how much change would be expected even if class-specific behavior stayed fixed. They do not prove the remainder is caused by exposure or identify a causal decomposition.

**Do not accidentally conclude:** The composition share is an explanatory projection, not a measured percentage of bias removed. A value above one in some rows also shows why it is not a bounded causal attribution.

**Self-check:** What extra fact is needed before interpreting a lower post-exclusion statistic?

**Answer:** The retained sample’s composition and null must be examined. Here removing PCCA also removes many nonsense sites, which predicts much of the decrease without invoking training exposure.

## P30. Read the Discussion as a bounded synthesis

**Where we are:** Main §3, PDF pp 17–19, before Limitations.

**What the passage is doing:** Combines the positive, negative and inconclusive findings without erasing their boundaries.

**Evidence class:** AUTHOR INTERPRETATION / PROPOSED NEXT TEST

**In ordinary language:** The Discussion joins the results without making them universal. Consequence class explains much of the pattern, but some signal remains. A planned criterion fails, and independent labels are still needed. Proposed new tests would address named gaps. They were not performed here, and a date split alone would not prove a variant was unseen by every training source.

**Source details, definitions and reported values:** The Discussion answers the title in two parts. Within-site extremity tracks consequence class to a large extent. It also contains a small missense signal and a larger other-intronic signal in the expanded panel. The failed planned consequence criterion prevents a stronger confirmation claim.

The paper compares its task with external functional benchmarks but keeps metrics distinct. It notes that non-AVI scorers also concentrate preference at loss-of-function positions, without claiming a mechanism for that pattern. It preserves the canonical-splice null and the initial borderline matched SPLICE_JUNCTIONS result.

Two next steps are proposed. First, use labels independent of computational evidence, such as measurements of all substitutions at a position. Second, check benign controls against position-level training exposure. A date split after the Atlas ClinVar release could define a descriptive subset, but submission date cannot bound gnomAD membership.

In the initial cohort, nonsense/start-loss sites contribute 89–93% of the AVI comparisons’ excess and 54–81% for the other significant comparisons. These shares depend on the selected cohort and statistic. They should not be read as causal percentages of biological function.

**Reasoning or worked illustration:** A synthesis should preserve the strongest counterweight to each headline. Consequence concentration sits beside residual within-class signals; positive replication sits beside small effects and circularity; training audits sit beside unchecked routes. This is how several true statements can support a modest conclusion without producing a single all-purpose model verdict.

**Do not accidentally conclude:** The suggested follow-up assays were not performed here. A descriptive post-benchmark date split is not proof that a variant is unseen in every training source.

**Self-check:** Which proposed next test directly addresses clinical-label circularity?

**Answer:** Use independent functional labels for all substitutions at the same positions, while checking model training/validation exposure. The proposal is a research direction, not an additional result of this paper.

## P31. Limitation 1: labels can encode the same evidence as the model

**Where we are:** Main Limitations item 1, PDF pp 19–20.

**What the passage is doing:** Names a circularity route that same-position matching and training exclusion do not remove.

**Evidence class:** EXPLICIT LIMITATION

**In ordinary language:** The same clue can enter both the model and the label used to test it. Their agreement may then partly reflect that shared clue. This differs from training on the exact test variant. A chromosome exclusion does not clear every route. A new assay could help, but its role in model development must also be checked.

**Source details, definitions and reported values:** ClinVar P/LP status is an evidence-based clinical classification. In a loss-of-function disease gene, a null variant may receive PVS1 evidence. AVI includes loss-of-function flags that mirror this information. Missense classifications may use computational PP3 evidence, including calibrated AlphaMissense predictions.

Seventy-nine of 86 selected missense variants were first submitted after AlphaMissense publication. That timing makes shared evidence plausible but does not prove that every classification used that model. In other intronic regions, classifications can likewise use splice-prediction or RNA evidence. The positive within-class signals can therefore reflect some common information rather than independent rediscovery.

The limitation differs from direct training overlap. Even a variant absent from training labels can have an evaluation label informed by an input predictor. Removing a training chromosome does not sever that evaluation route.

**Reasoning or worked illustration:** Draw two arrows from one evidence source: one enters the model, another enters the clinical label. Correlation between model and label can then arise without a wholly independent biological prediction. Functional assays can help only if their labels and model-development use are also checked. Assays on declared validation chromosomes may already have influenced model assessment.

**Do not accidentally conclude:** The paper identifies a possible inflation route; it does not quantify how much of each positive result it causes. Do not label every agreement circular or claim the audit has removed circularity.

**Self-check:** Can “not in the declared AVI training pool” and “not independent clinical evidence” both be true?

**Answer:** Yes. Training membership and shared evidence in evaluation labels are different routes. A model input can inform a clinical label even when that exact variant was not a training example.

## P32. Limitation 2: alternatives are not established benign controls

**Where we are:** Main Limitations item 2, PDF p 20; Table S13.

**What the passage is doing:** Bounds the discrimination claim and the small benign-pair exercise.

**Evidence class:** EXPLICIT LIMITATION

**In ordinary language:** The comparison groups are defined by selection, not by known harm and safety. An unselected change can lack a record or be pathogenic itself. A few benign pairs are not enough to repair that design. Future controls need a clear measured meaning. Until then, the result should be described as preference over other possible substitutions.

**Source details, definitions and reported values:** The alternatives are defined by biology's possible base changes, not by clinical benign status. Most have no ClinVar record. Some are P/LP. The task is therefore selected versus unselected substitution, conditional on a chosen site.

The six likely-benign alternatives cannot establish a general pathogenic-versus-benign benchmark. All are synonymous, so a model may distinguish their consequence from a selected coding change. The sample is tiny and the one-sided sign test has coarse resolution. Multiple comparisons weaken an already limited inference.

Measured effects of all substitutions at a position would create a different control design. Such data could still have assay-specific scope, but would avoid simply assuming that an unselected alternate is harmless. The paper recommends this direction while retaining the limits of the current labels.

**Reasoning or worked illustration:** A negative control requires a justified property, not merely membership in the comparison group. Here unselected means absent from the chosen role, not absent from disease biology. A future study must define what benign means, how it was measured and whether evidence is independent of the predictor.

**Do not accidentally conclude:** Known-pathogenic alternatives can make one selected-label contrast conservative; that observation does not establish performance against truly benign variants.

**Self-check:** What label should you use for the two alternatives in a report?

**Answer:** Use “other possible substitutions” or “unselected alternatives,” with their recorded clinical statuses if known. Avoid automatically calling them benign, healthy or negative.

## P33. Limitation 3: analysis timing and multiplicity remain part of the evidence

**Where we are:** Main Limitations item 3, PDF pp 20–21.

**What the passage is doing:** Separates exploratory explanation from prospective confirmation.

**Evidence class:** EXPLICIT LIMITATION / ANALYSIS PROVENANCE

**In ordinary language:** When a test was chosen matters. Many checks followed the first result. Later plans cover named rules, not every follow-up. A correction within one group of tests does not cover all groups explored. Several methods using the same sites are useful checks. They are not the same as several new experiments.

**Source details, definitions and reported values:** The initial within-site pipeline included three sensitivity checks: flagged-site exclusion, training-chromosome exclusion and mutation-spectrum weighting. Most consequence analyses and other supplemental checks were added after the primary result was known, following AI-assisted simulated review. Their p-values are exploratory.

The context-aware null and full-pool replication were specified in a locally dated plan before they ran. The expanded panel uses a public timestamped plan before score retrieval. Neither plan covers the later post hoc analyses labeled in S18 and S21.

Correction occurs within analysis families, not across every family explored. Three consequence checks can agree while sharing the same sites and therefore failing to provide three independent replications. The matched SPLICE_JUNCTIONS result at q 0.046 illustrates a boundary finding whose broader context must stay visible.

**Reasoning or worked illustration:** Write a timeline: primary design, observed result, exploratory analysis, locally planned replication, publicly planned new-panel analysis, later follow-ups. A check's place on that timeline affects whether it can confirm a rule selected before results. Reporting every test helps transparency, but it does not make post hoc choices prospective.

**Do not accidentally conclude:** Do not treat AI-simulated review as actual independent peer review, or the publication of a retrospective analysis as evidence that it was pre-specified.

**Self-check:** Why can three matching consequence analyses still be weaker than three independent experiments?

**Answer:** They reuse the same selected sites, profiles and label mechanisms. Agreement across methods is useful robustness evidence but does not create independent observations.

## P34. Limitation 4: a small missense signal does not transport unchanged

**Where we are:** Main Limitations item 4, PDF p 21.

**What the passage is doing:** Unifies power, null sensitivity, gene heterogeneity and the panel’s positive answer.

**Evidence class:** EXPLICIT LIMITATION

**In ordinary language:** A weak first result and a positive later result can both be true. The sites, nulls and effects differ. Power depends on a chosen effect size. That choice can be too hopeful if the effect was first selected for significance. Report the size and uncertainty as well as the threshold verdict.

**Source details, definitions and reported values:** The initial missense analysis excludes a large mixed-cohort effect for AVI, yet its own preference remains uncertain. The held-out pool narrowly misses its named AVI criterion. Stronger mutation weightings can produce positive results, some outside the plan. The panel's planned test gives a positive result in its genes, but the first-place advantage is small and varies by gene.

The source also checks normalized excess: excess divided by the largest possible excess on those sites. This distinguishes a change in units from a change in attainable signal. Many non-AVI comparisons remain compatible with both no effect and their full-cohort effect, reflecting weak information rather than proof of equivalence.

Power calculated against effects selected for significance can be optimistic. The reported effect reference was already a winner among tested comparisons. A study designed around that value may promise more sensitivity than it achieves in new data.

**Reasoning or worked illustration:** An inconclusive original result and a positive expanded-panel result need not conflict. The samples, class mixtures, nulls and effect heterogeneity differ. A faithful conclusion preserves each reading rather than retroactively declaring the first sample positive or the later one irrelevant.

**Do not accidentally conclude:** The guide does not estimate individual clinical benefit from the small mean or rank effect. Its magnitude and circularity limitations remain even when a corrected p-value is small.

**Self-check:** What should be reported beside the panel q-value?

**Answer:** The observed fraction, sample size, mutation-aware null, gene heterogeneity, label-circularity route and distinction between mean and rank; especially the near-chance fraction outside chromosome 13.

## P35. Limitation 5: positions do not replace independent loci

**Where we are:** Main Limitations item 5, PDF pp 21–22.

**What the passage is doing:** Explains the difference between precision within selected genes and generalization to other genes.

**Evidence class:** EXPLICIT LIMITATION

**In ordinary language:** The study tests many sites in relatively few genes. Gene, chromosome and local context are hard to separate. The expanded panel helps but remains uneven. A pooled result can be precise for its selected sample while uncertain for a new gene. The intended target must be clear before claiming that more sites solve this problem.

**Source details, definitions and reported values:** In the initial cohort, gene, chromosome and local sequence context coincide. Four different gene names do not isolate four independent biological mechanisms from four chromosomes. The expanded panel adds same-chromosome pairs, which helps separate gene from chromosome, but local context remains attached to each locus.

The genes are unevenly represented and have different disease mechanisms. PCCA, PCCB and MMUT are recessive loss-of-function disease genes. DNM1 disease is mainly associated with de novo dominant missense variants. The panel includes SCN5A, where dominant and gain-of-function mechanisms matter, and its class contrast persists. Yet other mechanisms remain untested.

BRCA2 contributes 708 of 1,238 panel nonsense/start-loss positions. A large pooled sample can therefore be statistically dominated by one gene's class representation. Per-gene estimates are essential for understanding what the pooled fraction represents.

**Reasoning or worked illustration:** Sampling more positions within one gene can make a conditional estimate more precise without creating many independent draws from the population of genes. A hierarchy-aware future benchmark should state whether the target is new variants in these genes or new genes altogether. Those require different uncertainty and validation designs.

**Do not accidentally conclude:** The panel does not establish equal behavior across genes or all inheritance mechanisms. A nonsignificant homogeneity test is not proof that every gene has the same effect.

**Self-check:** Why might an interval based on independent sites understate uncertainty for new genes?

**Answer:** It omits between-gene variation and the restricted locus selection. Many sites within a few genes do not reveal how an unseen gene’s behavior will differ.

## P36. Limitation 6: ascertainment controls the mixture and the scope

**Where we are:** Main Limitations item 6, PDF p 22; Table S14.

**What the passage is doing:** Explains why a cohort’s composition is part of its reported performance.

**Evidence class:** EXPLICIT LIMITATION / MODEL-BASED PROJECTION

**In ordinary language:** The selection rules shape the mix of easy and hard sites. Changing that mix can change the pooled fraction. The paper projects what a different mix might produce, then compares it with later observed results. A projection is not a new observation. Agreement in this pool does not make the original sample representative of all variants.

**Source details, definitions and reported values:** The initial cohort uses coding P/LP SNVs among recently registered records. The wider four-gene pool contains 159 canonical-splice records and 15 other-intronic records absent from that cohort. None of the three study stages broadly covers UTR or other noncoding variation. Deep-intronic positions remain few.

The initial group also has fewer multiple-submitter records and a different consequence mix than the remaining pool. Its overall first-place fraction is a weighted average of very different class fractions. Reweighting the initial class-specific results to the pool's coding composition projects AVI_SCORE fraction 0.543, with 95% interval 0.466–0.620. This is a projection, not a measured pool result.

Actual scoring later gives 0.572 at 376 single-P/LP coding positions, inside that interval. This is a useful check of composition-based reasoning. It does not establish that the initial sample is representative of all ClinVar variants or all disease mechanisms.

**Reasoning or worked illustration:** Keep projected and observed columns separate. A projection answers what the pooled summary would look like if class-specific behavior transferred under new weights. The new measured summary tests that assumption partly. Agreement within a broad interval does not prove that each gene or variant class transfers unchanged.

**Do not accidentally conclude:** Do not call the projected 0.543 an observed model accuracy or apply it to general human variation. It is conditional on source fractions, weights and the selected coding pool.

**Self-check:** What does observing 0.572 inside the projection interval show?

**Answer:** It is compatible with the composition projection in the checked pool. It does not prove equivalence, validate the projection for other genes, or remove clinical-label circularity.

## P37. Limitation 7: the statistic and processing choices define the result

**Where we are:** Main Limitations item 7, PDF pp 22–23.

**What the passage is doing:** Collects dependence, scaling, pooling and conditional-inference restrictions.

**Evidence class:** EXPLICIT LIMITATION

**In ordinary language:** The test result belongs to its processing choices. Pooling, scale, distance and the null each shape what counts as unusual. A result can be stable under some choices and weak under others. The tests also condition on selected sites. Their intervals do not automatically describe new genes or remove shared evidence in labels.

**Source details, definitions and reported values:** The statistic compresses multi-track profiles into unsigned distance from a genome-wide background reference. Dominant target pooling, per-site scaling and a fixed Poincaré transform precede that distance. Those choices decide which non-AVI findings pass correction.

Only the five primary AVI comparisons survive every alternative analysis in S2–S3. The initial matched SPLICE_JUNCTIONS finding disappears in quantile space. CONTACT_MAPS Poincaré is above the exact uniform-null threshold but passes some transition-weighted nulls. These are not contradictions once the analysis rule is included in the claim.

The p-values condition on the 120 chosen sites. Wilson intervals treat sites as independent. They do not quantify performance at new sites or new genes, and gene heterogeneity makes that distinction consequential. The two-background feature centroid further weakens interpretation of that scorer's null result.

**Reasoning or worked illustration:** A statistic is a lens, not a property of the model alone. Looking through another lens can change what counts as unusual. Robust interpretation states the lens, retains sensitivity findings and avoids ranking all scorers on one supposedly universal biological scale.

**Do not accidentally conclude:** Neither a fixed geometric transform nor a corrected conditional p-value establishes an intrinsic biological hierarchy, causal mechanism or genome-wide clinical performance.

**Self-check:** Which uncertainty is absent from a Wilson interval treating all sites independently?

**Answer:** It does not account for the restriction to selected loci or fully represent between-gene transport uncertainty and shared label mechanisms.

## P38. Limitation 8: a frozen release makes reproduction possible and stability unknown

**Where we are:** Main Limitations item 8, PDF pp 23–24.

**What the passage is doing:** Explains the trade-off between exact caches and claims about a changing service.

**Evidence class:** EXPLICIT LIMITATION / PROVENANCE

**In ordinary language:** Frozen inputs make exact repetition possible. They cannot tell us what a later model or label release would do. Updating and reproducing are both useful but answer different questions. The source records one release and bounded exposure checks. A new retrieval date must not be used to make an old observation look newly measured.

**Source details, definitions and reported values:** The predictions come from one Atlas release accessed through a pinned client commit. The cohort labels came from a live ClinVar query on 12 September 2026; pool and panel labels came from a hashed snapshot. All 120 remain P/LP in that snapshot, but 101 rest on one submitter, including one without assertion criteria.

A frozen cache allows the same computations to be repeated. It cannot show how later Atlas or ClinVar releases would change scores or labels. Re-querying later sources would be a new stability analysis, not exact reproduction of the original inputs.

Training exposure is bounded only for the checked AVI labels. In the expanded panel,1,025 of 1,713 primary positions are on chromosome 13 and were not individually queried against gnomAD. The base model's reference-sequence exposure is shared by all alternatives at a position; it cannot alone favor one alternate, but other exposure routes remain.

**Reasoning or worked illustration:** Separate reproduction from updating. Reproduction fixes source versions, data and settings. Updating deliberately changes them and asks whether conclusions remain stable. Both are useful, but a current website or newly fetched label should not be substituted silently into a claim tied to a frozen paper.

**Do not accidentally conclude:** The guide is pinned to v3 and does not certify later service behavior. Current-looking retrieval dates do not imply unchanged observations or independent labels.

**Self-check:** Why is a newer cache not automatically a better reproduction of this paper?

**Answer:** It may contain different predictions or labels. Exact reproduction needs the paper’s frozen inputs; a newer cache supports a separate release-stability check.

## P39. The Conclusions recommend benchmark design, not clinical deployment

**Where we are:** Main §4, PDF p 24.

**What the passage is doing:** Restates what follows after the limitations rather than repeating only the strongest positive phrase.

**Evidence class:** AUTHOR CONCLUSION / BOUNDED RECOMMENDATION

**In ordinary language:** The conclusion is about how to evaluate predictions. It keeps positive signals, weak signals and failed criteria in view. It asks future tests to control consequence and inspect shared evidence. These are benchmark-design steps. They do not turn the audit into a patient test or show that a particular variant should receive a new clinical label.

**Source details, definitions and reported values:** The conclusion retains a substantial consequence contribution, a small missense signal and a larger other-intronic signal. It also retains the failed planned “mainly consequence class”criterion and the canonical-splice no-preference result. This combination is more specific than either “the model works” or “the model only knows consequence.”

The recommendations concern evaluation design: hold consequence fixed, use a mutation-rate-aware null, show a consequence-only baseline and inspect whether labels encode model inputs. These steps improve the interpretability of a benchmark. They are not patient-management recommendations.

Independent labels remain necessary to distinguish allele-level prediction from clinical circularity. Positive comparisons at selected clinical sites identify a research signal with bounded interpretation, not a calibrated clinical decision instrument.

**Reasoning or worked illustration:** A fair summary should survive reading the negative passages. If a proposed headline requires omitting the failed stopping rule, label circularity or the small rank effect, it is too strong. Conversely, dismissing all residual signal would omit the expanded-panel planned findings. The conclusion is a set of conditional statements, not a single universal score.

**Do not accidentally conclude:** The source does not validate a new clinical test, change ClinVar guidance, or prove that a particular patient’s variant should be reclassified.

**Self-check:** Name one evaluation improvement and one claim it still would not establish.

**Answer:** Consequence matching improves control of class differences. By itself it still would not establish independent clinical validity, freedom from label circularity or generalization to all genes.

## P40. Methods 5.1: curation is an ordered algorithm

**Where we are:** Main §5.1, PDF pp 24–25.

**What the passage is doing:** Translates queries, caps, filtering and strand-aware reference checks into a reproducible sequence.

**Evidence class:** METHOD DEFINITION / SOURCE PROVENANCE

**In ordinary language:** Curation is a sequence of decisions. A cap applied before a filter can give different records from a filter applied first. Strand and transcript rules also matter. The paper records the source files and checks identities, not just final counts. A later query with the same count would not necessarily reproduce the same sample.

**Source details, definitions and reported values:** The initial ClinVar records were retrieved through NCBI E-utilities on 12 September 2026. The query was live, not a pinned release. Returned records were capped and ordered before P/LP SNV filtering. HGVS notation describes variants relative to a transcript; a regular expression rejected intronic notation. That implementation choice explains an important sampling restriction.

Reference checks are strand-aware against GRCh38. A coding description may use the transcript's opposite strand, so simply reading letters without orientation can produce an apparent mismatch. Curation files preserve decisions, rejected records and hashes.

The later panel uses official tab-delimited and VCV XML sources. The VCV XML has a reported release date; the variant_summary file is identified by its hash because no internal release date is recorded. These are different provenance routes, not interchangeable labels for one snapshot.

**Reasoning or worked illustration:** Reproduce the order of operations, not just final counts. Filtering before a cap can produce a different sample from capping before filtering. A complete curation record records both rules and input identity so that a later reader can explain why one variant entered and another did not.

**Do not accidentally conclude:** An available source today may differ from the original live query. A correct count alone does not prove the same variants were recovered; identities and source hashes are needed.

**Self-check:** Why is a hash especially important for an undated snapshot file?

**Answer:** It identifies the exact bytes used even when the file lacks a reliable release date. It supports reproduction without inventing an observation date.

## P41. Methods 5.2: official client, immutable batches and explicit joins

**Where we are:** Main §5.2, PDF p 25.

**What the passage is doing:** Explains the source of predictions and the boundary between fetching and analyzing.

**Evidence class:** METHOD / ENGINEERING PROVENANCE

**In ordinary language:** The official client fetches outputs, while later code analyzes them. The study freezes batches and joins rows by identity. This helps readers trace a result back to a requested change. It does not make the author's later analysis an official provider validation. Frozen caches remain useful even if a future service changes.

**Source details, definitions and reported values:** The analysis uses the official AlphaGenome client vendored at commit aa6fc8f6. Fetch scripts request all 22 scorers and preserve responses in immutable batches. Immutable here means the deposited analysis does not silently replace a retrieved batch with newer service output.

Responses are associated with variants through explicit identifiers. This handles the fact that service rows can arrive in a different order from submitted variants. The cache becomes a fixed input for offline analysis. No API key is stored in the outputs.

This setup separates two activities. Fetching gathers model predictions under a particular release and client. Analysis transforms those predictions into profiles, distances and tests. A failure or change in one stage should not be hidden by describing the whole workflow as a single model result.

**Reasoning or worked illustration:** A reproducible pipeline should let a reader inspect identities at each boundary: requested variant, returned metadata, cached row and analyzed profile. The paper reports these checks, not just file integrity. Still, official-client use is a provenance statement rather than a guarantee of biological correctness.

**Do not accidentally conclude:** Using an official client does not make the later statistical comparison an official validation by the model provider. The paper and this guide remain the author’s analysis.

**Self-check:** What remains usable if a future public service changes?

**Answer:** The frozen caches and analysis code can still reproduce the checked release’s results, subject to the stated external reference files and environment. They cannot predict the new service’s outputs.

## P42. Methods 5.3: pooling and missingness define the profile

**Where we are:** Main §5.3, PDF p 25; Table S6.

**What the passage is doing:** Shows how many rows become one profile without replacing missing outputs with zero.

**Evidence class:** METHOD DEFINITION

**In ordinary language:** Several target rows may need to become one profile. The primary rule keeps the largest absolute value for each track. A mean rule asks a different question. Missing output stays missing rather than becoming zero. The background average uses only available profiles, so its support differs across scorers. That difference matters before a p-value is interpreted.

**Source details, definitions and reported values:** A scorer can return multiple target rows per track. The primary rule keeps the value with the largest absolute magnitude. This is dominant pooling. The sign of the chosen value remains part of the profile, but the later distance is unsigned. A mean-pooling sensitivity averages target rows instead.

Absent rows are marked unavailable. They are not zero effects. The background centroid is averaged only over available background profiles. Most scorers use 400 backgrounds; RNA_SEQ uses 392, splice-site and usage scorers 179, junctions 176, polyadenylation 132 and AVI input features only 2.

Eligibility and reference quality therefore vary by scorer. The 75 eligible AVI feature sites and 106 polyadenylation sites should not be mentally replaced with 120. A reported test may be internally valid for its chosen support while poorly representing a wider group.

**Reasoning or worked illustration:** Hypothetical pooling example: target values−3 and+1 yield dominant value−3 but mean−1. The choices emphasize a strong target effect versus an average effect. These are illustrative values, not empirical model outputs. A profile can change direction or magnitude under pooling before any distance or test is calculated.

**Do not accidentally conclude:** Missing prediction is not evidence of no biological effect. A centroid estimated from two backgrounds does not have the same support as one from 400, even if both feed the same distance formula.

**Self-check:** Why should missing rows not be filled with zero before computing a centroid?

**Answer:** That would assert a measured or predicted zero where no output was available. It would change the reference profile and the scientific comparison without evidence.

## P43. Methods 5.3: scale, cosine and the Poincaré ball

**Where we are:** Main §5.3, PDF pp 25–26; Tables S2–S3.

**What the passage is doing:** Explains what changes when the same profile is viewed through three geometries.

**Evidence class:** METHOD DEFINITION / SENSITIVITY

**In ordinary language:** Each distance rule keeps different parts of a profile. Scale also changes how much a site can weigh in the mean. A common positive scale preserves ordinary distance ranks within a site. It need not preserve the pooled result. The curved-space rule is fixed math, not proof that the model learned a biological tree.

**Source details, definitions and reported values:** Euclidean distance measures straight-line separation. Cosine distance measures disagreement in direction, ignoring a common positive scale. Poincaré ball distance uses a curved-space formula. In this study curvature−1 and radius fraction 0.8 are fixed settings, not learned biological structure.

For Euclidean and Poincaré distances, the three profiles and centroid are jointly divided by the largest of their four norms at each site. A norm is a vector's length. This gives each site's contrast a common local scale. Dividing all vectors by the same positive factor leaves Euclidean within-site ordering unchanged. A nonlinear Poincaré distance can change the farthest alternative; the source reports changes at up to 19% of sites under the scaling comparison.

The same-space zero-origin anchor sensitivity retains the 16 significant Euclidean/Poincaré comparisons. It checks a reference choice, not the cosine comparisons where a zero vector is unsuitable.

**Reasoning or worked illustration:** Hypothetical scale illustration: multiplying every Euclidean distance at a site by a positive constant preserves their rank but changes that site's contribution to a pooled mean. Scaling can therefore matter even when first places stay fixed. A nonlinear transform can affect rank too, so a curved-distance agreement is not automatic.

**Do not accidentally conclude:** The Poincaré choice does not infer an evolutionary tree or validate a hierarchical representation. The scalar AVI_SCORE cosine comparison remains undefined and is excluded from interpretation.

**Self-check:** How can per-site scaling leave ordering intact yet change the overall mean test?

**Answer:** It changes relative contributions across sites. The same within-site order can produce a different weighted pattern of gap sizes when site-specific scales differ.

## P44. Methods 5.4: the permutation test holds outputs fixed

**Where we are:** Main §5.4, PDF p 26; Table S12.

**What the passage is doing:** Connects the conditional statistic to its reference distribution and finite simulation.

**Evidence class:** METHOD / NULL DEFINITION

**In ordinary language:** The test shuffles labels while keeping outputs fixed. It counts how often a shuffle is at least as extreme as the result. The plus-one rule keeps a finite run from reporting zero. More draws improve that number. They do not add genes or measured effects, and they cannot repair a poor null.

**Source details, definitions and reported values:** The observed statistic averages the selected-minus-maximum contrast. A null draw relabels selection within each site and recomputes that average. The primary analysis uses 9,999 draws. It does not regenerate model predictions, outcomes or clinical classifications.

The p-value uses a plus-one correction: count null draws at least as extreme as observed, add one, then divide by the number of draws plus one. Thus no exceedance gives 1/10,000=0.0001 rather than zero. The exact convention and one-sided direction belong to the implemented test.

A plug-in Monte Carlo standard error describes variability from using finitely many draws. It does not describe biological sampling uncertainty across genes. The 99,999 draws and exact-tail check address numerical precision of this conditional test.

**Reasoning or worked illustration:** Hypothetical teaching arithmetic: if 99 out of 9,999 null draws meet the tail condition, the plus-one estimate is 100/10,000=0.01. These are invented counts solely to illustrate the formula. They must not be reported as a source p-value or a false-positive rate for a patient.

**Do not accidentally conclude:** Permutation validity depends on the stated exchangeability/reference rule. A precisely computed tail probability under an unsuitable null does not repair the scientific mismatch.

**Self-check:** Why is “p = 0 because no shuffle beat it” wrong in this implementation?

**Answer:** The plus-one rule yields a positive finite-resolution estimate. Absence of observed exceedances does not establish a zero probability.

## P45. Methods 5.4: correction families, ranks and alternative scales

**Where we are:** Main §5.4, PDF pp 26–27.

**What the passage is doing:** Makes the analysis family explicit and explains what each extension changes.

**Evidence class:** METHOD / EXPLORATORY EXTENSIONS

**In ordinary language:** An adjusted value has meaning only with its testing family. Changing the family or statistic can change the verdict. Some summaries count first places, while others use gap sizes. The paper also changes scale and pooling in defined checks. These methods reuse the same sites, so their agreement is not the same as fresh evidence.

**Source details, definitions and reported values:** BH q-values span 66 scorer–geometry comparisons. BY is used as a dependence-robust check in specified families. A Wilson interval summarizes a first-place fraction with a binomial-style site reference. None of these tools supplies a new disease label or solves between-gene transport.

Alternative statistics include mean within-site rank and a top-one binomial test against one third. Alternative profile routes include quantile values where available, mean target pooling and own-gene selected-site rows. The own-gene comparison retains the published centroid pooling. Alternative scale uses one global scorer scale instead of separate site scales.

Per-gene and leave-one-gene-out tests repeat the primary procedure for the 17 selected comparisons, with correction across 68 tests in each family. That restricted follow-up family is not the same as a new 66-comparison discovery analysis.

**Reasoning or worked illustration:** Before reading any adjusted value, write down the family it adjusts. A smaller family can change a threshold without changing raw evidence. Before comparing statistics, ask whether the new one uses gap magnitudes, only ranks, or only first places. This prevents different estimands from being treated as alternate estimates of one quantity.

**Do not accidentally conclude:** The supplement does not certify that the most favorable analysis route should be chosen prospectively. Most extensions followed the primary result and retain exploratory status.

**Self-check:** What remains common when mean rank and mean distance agree?

**Answer:** They reuse the same sites, outputs and labels. Agreement supports robustness to a summary choice, not independent biological replication.

## P46. Methods 5.5: consequences are derived, checked and grouped

**Where we are:** Main §5.5, PDF p 27; Table S7.

**What the passage is doing:** Explains how class labels are established for selected and unselected substitutions.

**Evidence class:** METHOD / ANNOTATION VALIDATION

**In ordinary language:** The code assigns change classes from sequence and transcript data. Checks against other records can catch mistakes in those labels. One method splits sites into groups. Another limits choices within a site. These are different steps. Neither step is a new experiment proving that a DNA change causes disease.

**Source details, definitions and reported values:** The selected allele's HGVS protein change supplies its class:stop, nonsense; start position loss, start loss; otherwise missense in the initial coding set. Consequences of all 360 substitutions are derived from GRCh38 codons at their transcript coding positions. Split codons crossing exon junctions are reconstructed across both exons.

Derived consequences agree with the 120 selected ClinVar names, with 44 other substitutions having their own ClinVar records, and with 360 Atlas loss-of-function inputs. These checks support consistent annotation. They do not validate every clinical classification or prove a predicted class causes a patient's disease.

The stratified test separates sites by the selected allele's class. The matched test changes which alternatives may receive a pseudo-selected label. These operations answer different questions even though both use consequence.

**Reasoning or worked illustration:** A correct annotation pipeline must follow transcript and strand orientation, not simply inspect a genomic triplet nearby. The concordance checks catch coding mistakes. Yet agreement between two consequence annotations can be expected if both use related sequence rules, so it is not independent experimental corroboration.

**Do not accidentally conclude:** A predicted molecular consequence is not the same as a clinical pathogenicity judgment. The guide uses the source’s classes as analysis strata, not universal clinical rules.

**Self-check:** How do stratification and matching differ?

**Answer:** Stratification splits sites according to the selected allele’s class. Matching restricts relabeling among alternatives at a retained site. One changes groups across sites; the other changes the within-site null.

## P47. Methods 5.5: conditional logit and power do not create independent data

**Where we are:** Main §5.5, PDF p 27; Tables S9, S10, S15.

**What the passage is doing:** Explains the model-based companion to matching and the distinct power questions.

**Evidence class:** METHOD / EXPLORATORY CHECK

**In ordinary language:** A model can account for some class differences while asking whether distance adds information. Its coefficients still describe the constructed choice task. Very large estimates may be unstable. Power checks also require a chosen effect and test rule. A new formula using old data is useful, but it does not add independent observations.

**Source details, definitions and reported values:** The conditional-logit model compares alternatives within a site. Its selection score combines a loss-of-function indicator and standardized distance. In shorthand, selection weight is exp(βLo F×Lo F+βT×T/SD). The distance coefficient's exponential is an odds ratio per standard deviation, conditional on the model and site grouping.

Large odds ratios with huge uncertainty can arise from separation, where predictors almost perfectly sort selected labels. Such rows are not stable biological effect sizes. The source explicitly warns about them.

Power is checked with equal-size subsets, exact binomial first-place calculations and the exact null mean/variance. A normalized-excess summary divides the observed excess by the largest attainable excess at those sites. It helps compare signal relative to the task's available range, but does not become a clinical calibration.

**Reasoning or worked illustration:** A different model fitted to the same records supplies methodological triangulation. It does not add subjects, genes or independent labels. A power calculation needs a target effect and testing rule; using a full-cohort effect selected for significance can be optimistic. Table S15 therefore distinguishes excluded, underpowered and not-excluded rather than calling every null equivalent.

**Do not accidentally conclude:** An odds ratio here describes pseudo-selection in the constructed three-alternative task. It is not an odds ratio for disease or a patient’s prognosis.

**Self-check:** Why should an enormous conditional-logit odds ratio not be celebrated automatically?

**Answer:** It may be driven by separation and unstable estimation. Check standard errors and the source warning before interpreting magnitude; the model also remains conditional on the same selected sample.

## P48. Methods 5.6: two planning records have different strength

**Where we are:** Main §5.6, PDF pp 28–29; plan DOI23524782.

**What the passage is doing:** Distinguishes locally recorded planning from a public repository timestamp.

**Evidence class:** METHOD / PRE-SPECIFICATION PROVENANCE

**In ordinary language:** A plan states what will be tested and what will count as success. Its timestamp helps show when it existed. The first plan relies on local records; the second has a public deposit. Both have a limited scope. A later analysis outside that scope remains exploratory, even when it uses the same data and code.

**Source details, definitions and reported values:** The first replication and context-aware null use a plan dated before running them, with a recorded hash of an earlier commitment file. The manuscript explicitly identifies its dates as local file times, not external registration. This is useful documentation with a stated evidential limit.

The expanded-panel plan was deposited publicly before any panel score was retrieved. It fixes its six readings, stopping rules and code hashes. The timing makes a stronger externally visible commitment about which results would be treated as confirmatory.

The pool uses exactly-one-P/LP positions as primary and adds multi-P/LP positions in a defined sensitivity. The panel likewise distinguishes its primary 1,713 positions from all 2,144 positions. A plan's scope matters as much as its date: later direct-ranker and fixed-position analyses remain post hoc.

**Reasoning or worked illustration:** A plan is a contract about what will be compared and how success is decided. A timestamp helps establish when it existed; it does not establish that the method is optimal. Reading the actual stopping rule matters, as the P2 count failure demonstrates.

**Do not accidentally conclude:** No public plan guarantees independent labels, correct modeling assumptions or biological truth. Neither plan covers every later table row.

**Self-check:** What must be checked before calling a supplemental result pre-specified?

**Answer:** The relevant plan must predate the allowed information and must explicitly cover that analysis, its target, comparisons and decision rule. A nearby planned analysis is insufficient.

## P49. Methods 5.6: context-aware nulls and panel filtering

**Where we are:** Main §5.6, PDF pp 28–29; Tables S19–S20.

**What the passage is doing:** Explains context weights, primary-position rules and the panel’s consequence checks.

**Evidence class:** METHOD / DEFINED SENSITIVITY

**In ordinary language:** The context-aware null gives some possible changes more weight. It must recover the earlier rule when the new factor is set to one. That is a useful code check. The panel then applies stated filters and planned weights. These assumptions are part of the test, not measurements of each site's true mutation process.

**Source details, definitions and reported values:** The context-aware null weights a transition according to Ti:Tv and adds a multiplier for CpG transitions. On the GRCh38 positive strand, these include C>T before G, or G>A after C. At multiplier 1, the full-cohort rows reproduce the earlier transition-weighted analysis. That replay is an implementation control.

For the panel, the primary mutation-aware null gives transitions weight 4 and CpG transitions a further factor 10. Consequence matching allows pseudo-selection only within the selected class. A uniquely missense selected allele can contribute the same constant to observation and every null draw; this does not move its tail probability.

Panel curation removes specified transcript/notation exceptions. The derived consequences agree for 2,659 retained P/LP alleles. All 6,432 possible substitutions are scored with the same client/scorers. Sensitivities add multi-P/LP positions and remove chromosome 13 genes without redefining the primary set.

**Reasoning or worked illustration:** An implementation control should reproduce a known special case when a parameter returns to its baseline value. Here CpG multiplier 1 does that. Agreement within stated Monte Carlo error for new seeds checks the stochastic implementation; it does not make the assumed mutation weights measured facts.

**Do not accidentally conclude:** The weights are stipulated relative probabilities, not personalized mutation rates. Panel filtering and sensitivities are documented analysis rules, not evidence that excluded positions are biologically unimportant.

**Self-check:** Why should setting the CpG multiplier to 1 recover the transition-only null?

**Answer:** A factor of 1 adds no context effect, leaving only the transition weights. Failure to recover that special case would reveal an implementation or configuration inconsistency.

## P50. Methods 5.7: clustering is checked over a small multiverse

**Where we are:** Main §5.7, PDF p 29; Figure S2.

**What the passage is doing:** Defines site averaging, cluster counts and family corrections for the gene-label contrast.

**Evidence class:** METHOD / DESCRIPTIVE MULTIVERSE

**In ordinary language:** Clustering tests whether profiles group like gene labels after averaging across alleles. Several distances and cluster counts are tried. A small positive score must be checked against cluster sizes and the correction family. A few outliers can move the score without finding the desired groups. This remains separate from choosing among substitutions.

**Source details, definitions and reported values:** The gene-label exercise averages each site's three substitution profiles, then performs average-linkage clustering. It tries three geometries and cluster counts 3, 4 and 5. ARI compares the resulting grouping with known gene labels. A label-permutation reference uses 999 draws.

Two representative scorers are considered. Correction is applied within each scorer's geometry-by-cluster-count family and jointly across both. The joint family answers a broader search question and weakens the small RNA_SEQ finding. Looking at memberships reveals why the nominal signal is not recovery of gene groups.

This multiverse is small and explicit. It illustrates how analysis choices and correction families affect interpretation. It is not a search over all possible algorithms, and its weak result cannot establish that no representation ever separates these loci.

**Reasoning or worked illustration:** Suppose a clusterer isolates a few outliers and leaves almost everyone together. A pair-based index can move above chance without recovering the intended categories. The cluster-size diagnostic is therefore essential beside the scalar score. Pooled allele averages also deliberately remove some allele-specific variation.

**Do not accidentally conclude:** The descriptive clustering exercise is not a validation of the primary selected-allele statistic. Both reuse predictions but summarize different objects.

**Self-check:** Why is cluster count 4 not automatically a fair ground truth because there are four genes?

**Answer:** The method does not know that gene identity is the only structure in profiles. Choosing 4 does not prove that four coherent gene groups exist; memberships and uncertainty must be inspected.

## P51. Methods 5.8: training-membership categories are logical, not intuitive

**Where we are:** Main §5.8, PDF pp 29–30; §2.10 p 16.

**What the passage is doing:** Explains the decision tree behind outside, inside and indeterminate.

**Evidence class:** METHOD / TARGETED AUDIT

**In ordinary language:** Training membership follows a decision tree, not a guess based on a gene name. The exact allele, source, label and chromosome must fit the declared rule. Some missing information can leave membership uncertain. Cached queries support repeating the audit. They do not establish that every possible source of shared information has been cleared.

**Source details, definitions and reported values:** The audit first records the AVI report's declared training and validation chromosomes. It then queries each selected allele in gnomAD v4.1 genomes and checks the required FAF 95 label. A control query verifies that the API returns genome data rather than silently limiting results to another source.

An observed genome variant with an appropriate label on a training chromosome could be inside the declared pool. Absence from genomes or the index, or a label off training chromosomes, places the selected allele outside that pool as defined. An unlabeled genome singleton on a training chromosome is indeterminate.

Queries and categories are cached. The offline audit can reproduce the classification without depending on today's changing API. A later query may be useful for updating but should retain the source date and exact allele identity.

The declared proxy-neutral rule is FAF95_GRPMAX at least 0.001 and below 0.999; proxy-impactful uses a value below 0.001. FAF is a filtering allele-frequency quantity, not a clinical label. A missing group-maximum FAF can arise when its computed values are zero in every relevant group or the variant is absent there. The report does not resolve how every unlabeled singleton was handled.

**Reasoning or worked illustration:** This is a conjunction of required conditions. Knowing that a gene lies on chromosome 13 is not enough to prove allele-level membership. Conversely, absent data must be interpreted under the specific definition, not as general proof the model never saw related information. The study states the bounded route explicitly.

**Do not accidentally conclude:** The audit is allele-level while a provider benchmark exclusion may be position-level. The unselected alternatives were not queried, and other model inputs retain separate exposure questions.

**Self-check:** Why does querying only gene names fail to reproduce this audit?

**Answer:** Membership depends on the exact substitution, genome observation, frequency label and chromosome rules. A gene-level location cannot resolve those allele-specific conditions.

## P52. Methods 5.9: exact repetition and independent code check different failures

**Where we are:** Main §5.9, PDF p 30.

**What the passage is doing:** Describes the pinned environment and a separate implementation without overstating independence.

**Evidence class:** REPORTED REPRODUCIBILITY CHECK

**In ordinary language:** Repeated runs check whether the same setup returns the same result. A separate implementation checks whether another route computes the same summaries. Both help locate software errors. They use the same inputs, however, and cannot validate those inputs biologically. The browser exercise is a teaching tool rather than a new experiment.

**Source details, definitions and reported values:** The source reports bit-identical reruns in a pinned software environment. It lists the Python, numpy, scipy, scikit-learn and matplotlib versions used. Pinning makes the computational claim inspectable; it does not imply those are the only versions on which the method can work.

A separate implementation without atlas_ext reproduces eligible-site counts, mean statistics and first-place fractions for all 66 comparisons. Its largest mean difference is 4×10^−16, consistent with floating-point arithmetic. This check reduces the chance that a particular package implementation alone creates the primary summary.

The browser demo reruns the conditional test on subsets using cached outputs. It is an educational port, not an independent empirical replication. Its random stream and interface choices can differ from the exact archived scientific run.

**Reasoning or worked illustration:** Two implementations consuming the same outputs test arithmetic and software dependence. They cannot reveal a shared error in clinical labels or model predictions. Repetition and independent computation are valuable precisely when their target failure mode is stated.

**Do not accidentally conclude:** Do not describe this as independent wet-lab validation or full third-party scientific replication. The source reports an implementation check under the same data and analysis definitions.

**Self-check:** What does agreement to 4×10^−16 support?

**Answer:** Agreement of the checked numerical summaries under the shared inputs and definitions. It does not establish clinical accuracy or generalization beyond those inputs.

## P53. Methods 5.10: AI assistance and responsibility are declared

**Where we are:** Main §5.10, PDF p 30; Authors’ contributions p 33.

**What the passage is doing:** Explains the role of assistance without converting simulated review into a human endorsement.

**Evidence class:** AUTHOR DECLARATION

**In ordinary language:** The paper discloses AI help and assigns responsibility to the author. It also explains how figures were made. These statements help readers assess provenance. They are not statistical findings or independent human review. A disclosure identifies assistance and responsibility; it is not evidence of scientific validity.

**Source details, definitions and reported values:** The manuscript declares generative AI assistance for coding, drafting, editing, reference checks and simulated pre-submission review. It names tools and the period of use. It reports separate AI-assisted verification of generated findings, followed by author review and responsibility.

Figures were rendered programmatically from deposited data; no image-generation tool was used. AI tools are not listed as authors. The v3 authorship wording records that the author directed and verified AI-assisted implementation and takes responsibility for the content.

This disclosure helps a reader assess provenance. It is not a certificate that every generated statement is correct. Nor does a review by a second model become an independent human peer review.

**Reasoning or worked illustration:** Responsibility, reproducibility and independent validation are different roles. A named author can be responsible for assisted work; exact code can support reproducibility; additional evidence is still needed for biological or educational validity. Transparent disclosure allows those questions to be asked rather than merging them into one endorsement.

**Do not accidentally conclude:** The source’s AI declaration is a disclosure, not a statistical result or independent scientific validation.

**Self-check:** Why should “AI-assisted simulated review” not be shortened to “peer reviewed”?

**Answer:** That would change who performed the review and imply an external human editorial process not established by the declaration.

## P54. Data availability, ethics, funding and terms have different jobs

**Where we are:** Main Declarations, PDF pp 32–33; Supplementary Information pp 30–31.

**What the passage is doing:** Explains how to obtain and use the materials while keeping non-scientific declarations distinct.

**Evidence class:** ADMINISTRATIVE / DATA-PROVENANCE DECLARATION

**In ordinary language:** The source must tell us which files were used and where to find them. Some needed files remain outside the archive. Exact file identity helps us repeat the analysis. Ethics, funding and author statements have other roles. They do not prove the science is right or grant new rights to model outputs.

**Source details, definitions and reported values:** The study uses public ClinVar records and precomputed predictions, with no new participants or patient-level study data. The source marks ethics participation consent and publication consent not applicable. It declares no competing interests and no funding for preparing the manuscript. These are author declarations, not estimates validated by the statistical test.

The code/data deposit includes caches, curation, plans, audits, scripts, tests and figures in code-only and full archives with SHA256 manifests. Regeneration also requires two public files not re-deposited:GRCh38 FASTA and the ClinVar variant_summary snapshot. Their URLs and hashes identify the needed inputs. The gnomAD categories can be regenerated offline from cached queries.

AlphaGenome outputs and derived quantities retain the provider's output terms, including commercial-use and model-training restrictions. The presence of a code license does not relicense those outputs. The companion does not alter any rights.

**Reasoning or worked illustration:** A data-availability statement should answer both “where are the files?” and “which files reproduce this result?” A download link alone is insufficient if an external reference file changes. A manifest identifies bytes, while terms define permitted use. Neither establishes scientific validity.

**Do not accidentally conclude:** The educational materials do not grant new rights to model outputs, remove restrictions or imply an ethics approval that the paper says was not applicable.

**Self-check:** Why might downloading only the full archive still be insufficient for exact regeneration?

**Answer:** The source also requires two identified external reference files and the stated environment. Their exact versions or hashes matter.

## P55. How to use the references and abbreviations without promoting them

**Where we are:** Main List of abbreviations p 31; References pp 33–38.

**What the passage is doing:** Gives a reading method for source citations rather than treating every citation as a new finding.

**Evidence class:** REFERENCE / ADMINISTRATIVE COVERAGE

**In ordinary language:** A citation can do several jobs. It may define a method, describe a model, or report another study. Read the claim before following the link. The guide explains these roles and key terms. It does not check every cited study afresh or treat one citation as proof of all nearby claims.

**Source details, definitions and reported values:** The reference list documents model descriptions, annotation tools, prior evaluations, statistics and software. Citations support different kinds of statement. A model report defines an input; a functional benchmark reports another experiment; a statistical paper defines a test. These roles should not be collapsed into one endorsement.

Abbreviations such as PVS1, PP3, FAF, ARI, BH and BY name evidence criteria or methods. They do not carry a clinical conclusion on their own. The glossary in this companion defines them where useful and keeps their role in this audit explicit.

A complete educational companion covers the function of reference and administrative material without inventing a new lesson about every bibliographic field. The source's full reference list remains authoritative for exact author names, titles, DOIs and access dates. This guide does not independently recertify every cited work.

**Reasoning or worked illustration:** When following a citation, first state the claim it is supposed to support. Then ask whether it is a definition, contextual comparison or empirical result. For example, a cited Wilson method explains an interval; it does not establish that this selected set of genes is representative.

**Do not accidentally conclude:** Bibliographic presence is not independent verification. This companion’s completeness means source coverage and explicit treatment of roles, not full revalidation of every cited paper.

**Self-check:** What should you check when a sentence cites both a model report and an external benchmark?

**Answer:** Identify which part each source supports. The model report may describe inputs while the benchmark supports a bounded empirical comparison; neither automatically supports the other’s scope.

## P56. Figure S1: read a genomic-distance plot as a design audit

**Where we are:** Additional file 1, Figure S1, PDF p 1.

**What the passage is doing:** Explains every plotted group, scale and exclusion reference.

**Evidence class:** REPORTED NEGATIVE-CONTROL FIGURE

**In ordinary language:** The plot counts background variants, not the selected variants. It shows distance to the nearest selected site on a log scale. The empty region reflects the sampling rule. This makes the location shortcut visible. A long genomic gap is not itself proof of functional independence or a statement about clinical similarity.

**Source details, definitions and reported values:** The plot shows distances from background SNVs on the four disease-gene chromosomes to their nearest selected site. Its horizontal axis is genomic distance on a log scale. Equal visual steps therefore represent multiplicative changes, not equal numbers of bases. The dashed line marks the 50 kilobase exclusion boundary.

The rows identify the nearest selected gene. They contain 16 backgrounds nearest DNM1, 12 nearest PCCA, 30 nearest PCCB and 18 nearest MMUT. These add to 76. They are background counts, not the 20, 15, 27 and 58 selected-variant counts. Confusing those two sets would change what the plot describes.

All 76 points lie beyond 259,073 bases. The picture illustrates why coordinate-only selected-versus-background separation is trivial here. The other 324 backgrounds are on chromosomes outside this four-chromosome subset and do not appear in the distance panel.

**Reasoning or worked illustration:** Read a plotted point with three attributes: its background role, nearest-gene group and distance. Then connect the dashed sampling boundary to the claim of perfect separability. The sample design, rather than an impressive predictive algorithm, supplies that contrast. The same-site test is introduced to remove this particular route.

**Do not accidentally conclude:** A long genomic distance is not a statement about clinical similarity, functional independence or lack of long-range regulation. The figure audits selection geometry only.

**Self-check:** Why is the DNM1 row count 16 rather than 20?

**Answer:** Sixteen counts background variants assigned to that nearest-gene row. Twenty is the number of ClinVar-selected DNM1 variants in the initial cohort. They describe different samples.

## P57. Figure S2: inspect the scale before celebrating a red marker

**Where we are:** Additional file 1, Figure S2, PDF p 2; caption p 1.

**What the passage is doing:** Explains the plotted multiverse and its small, outlier-driven positive cells.

**Evidence class:** DESCRIPTIVE FIGURE

**In ordinary language:** The red markers show a corrected result in a stated family. Their numerical size is still small. The underlying groups are mostly one large cluster and a few outliers. That structure does not recover four genes. Read the scale, the family and the memberships together before interpreting a threshold color as a strong finding.

**Source details, definitions and reported values:** The horizontal axis is ARI agreement with gene labels. The dashed line at zero is a chance reference. Each row combines a scorer, geometry and cluster count. Red marks the within-family BH-significant cells; gray marks others. The positive RNA_SEQ cells at five clusters sit near 0.037, not near perfect agreement.

The figure covers two scorers, three geometries and three cluster counts. AVI feature rows are near or below zero. RNA_SEQ has some small positive values, but membership inspection shows four singleton outliers and a single 116-site cluster. The drawing alone should be read with that structural description.

The caption's significance coloring is not the joint two-scorer correction. Under the broader joint family the small RNA_SEQ signal has q 0.063. This is why the precise family matters when translating a visual marker into a sentence.

**Reasoning or worked illustration:** A good figure reading uses the numerical scale, the null reference, the marker legend and the underlying memberships. A red marker can identify a small conditional signal, not a qualitatively useful grouping. The figure's own magnitudes help prevent a dramatic interpretation of a threshold color.

**Do not accidentally conclude:** Neither positive nor negative ARI here measures allele-specific clinical performance. Profiles were averaged across substitutions for this separate descriptive exercise.

**Self-check:** What additional check explains why the positive cells are not four-gene recovery?

**Answer:** The cluster memberships and sizes show a large shared cluster plus four singleton outliers, rather than four coherent gene clusters.

## P58. Table S1: the full family includes negatives and an uninterpreted scalar row

**Where we are:** Additional file 2, Table S1, PDF pp 1–2.

**What the passage is doing:** Teaches how to read all 66 rows without treating absent significance as absence of output.

**Evidence class:** FULL REPORTED PRIMARY FAMILY

**In ordinary language:** The full table shows the tests that did not pass as well as those that did. It also shows different site counts and a comparison that should not be interpreted. This makes the tested family visible. Read each row with its support and null. A table of model names is not a clinical leaderboard.

**Source details, definitions and reported values:** Table S1 contains the full primary family, not only the 17 highlighted rows. For each row, read scorer, geometry, n, observed mean, null mean, z, p, BH q, BY q and first-place fraction. The ranking of rows is a display choice; it does not make every consecutive difference meaningful.

The table includes negative excesses and values well above the correction threshold. It also prints the scalar AVI_SCORE cosine placeholder, which the caption says is undefined and excluded from interpretation. The three AVI input-feature rows use 75 sites and only two background profiles. POLYADENYLATION uses 106 sites. Those support differences must travel with any comparison.

CONTACT_MAPS Poincaré is the borderline 18th row, with primary BH q about 0.0535 and BY q about 0.2556. Later exact and weighted analyses explain its status under different rules. A near-threshold row is not silently upgraded in the original family.

**Reasoning or worked illustration:** To compare two rows, first check whether they use the same sites and whether their statistics have comparable units. Their q-values adjust within one shared family, but their distances need not share a biological scale. A large negative observed statistic can still exceed a more negative null; a large first-place fraction can coexist with weak mean evidence.

**Do not accidentally conclude:** The full table is a transparency device, not a clinical leaderboard. A numerical placeholder must not be treated as a meaningful negative result simply because it appears in a table.

**Self-check:** What makes S1 more informative than reproducing Table 1 alone?

**Answer:** It shows the denominator of tested comparisons, the nonsignificant and negative results, and row-specific support. It reveals the search family behind the selected significant subset.

## P59. Table S2: totals are a map of analysis dependence

**Where we are:** Additional file 2, Table S2, PDF p 2.

**What the passage is doing:** Explains every alternative route and why lost/gained identities accompany counts.

**Evidence class:** EXPLORATORY SENSITIVITY SUMMARY

**In ordinary language:** Each route changes part of the test. Similar totals can hide different lost and gained findings. Some rows use a smaller test group by design. Follow their labels and names as well as the count. These checks mostly reuse the same inputs. They are not many new studies confirming the first one.

**Source details, definitions and reported values:** The rows change one part of the analysis: mean rank, top-one count, quantile values, mean pooling, own-gene pooling, global scale, chromosome exclusion, transition weights, zero anchor or flagged site. These are alternative questions or processing choices applied to largely the same predictions.

Counts range from 7 significant comparisons under mean rank to 20 under Ti:Tv 2. Quantiles lose both SPLICE_JUNCTIONS geometries but gain RNA_SEQ cosine. Mean pooling loses RNA_SEQ. Global scale loses five published rows and gains ATAC_ACTIVE in Euclidean and Poincaré geometries. A similar total can therefore hide a changed scientific story.

The zero-anchor row tests 44 Euclidean/Poincaré comparisons, not 66, because cosine distance to a zero anchor is undefined. The flagged-site check tests 17 published comparisons rather than performing a new all-family discovery analysis. These denominators matter while reading the counts.

**Reasoning or worked illustration:** Use the lost and gained columns as a transition map. A count alone cannot tell whether a mechanism-specific interpretation is stable. Also distinguish a statistic change from a null change: mean rank throws away gap magnitudes, while transition weighting changes selection probabilities with the outputs held fixed.

**Do not accidentally conclude:** These routes are not independent replications. Choosing the route with the most discoveries after inspection would add selection bias. The paper reports the alternatives and keeps their exploratory status.

**Self-check:** Why is “16 of 44” not directly comparable with “17 of 66” as a model-performance percentage?

**Answer:** The test families and eligible geometries differ. They are counts of statistical comparisons under different analyses, not numbers of correctly predicted variants.

## P60. Table S3: follow a scorer across choices

**Where we are:** Additional file 2, Table S3, PDF pp 2–3.

**What the passage is doing:** Provides a practical reading method for the wide sensitivity table.

**Evidence class:** EXPLORATORY ROW-LEVEL SENSITIVITY

**In ordinary language:** This table follows the original significant rows through different analysis choices. Some stay strong, while others depend on scale or pooling. A dash means the requested calculation is not defined. That differs from a high adjusted value. Robustness must be described with the choices that were checked and the limits they share.

**Source details, definitions and reported values:** Each row is one of the 17 published significant comparisons. The columns report its BH q under alternative analyses. This table does not show every possible gained comparison; S2 provides that summary. It asks which original findings survive each change.

The five AVI rows remain below 0.05 in every defined alternative column. CHIP_HISTONE and RNA_SEQ lose significance under native global scaling. RNA_SEQ also loses under mean pooling. SPLICE_JUNCTIONS loses in quantile space, with q about 0.7306 despite its high first-place fraction. These changes locate dependence on processing rather than showing random contradictions.

A dash in the zero-anchor column for cosine means not defined, not a p of one. Columns use their own analysis families. Comparing values numerically across columns does not make them independent strength scores.

**Reasoning or worked illustration:** Choose one row and explain what information each route keeps. Rank changes remove gap magnitudes; pooling changes which target contributes; global scaling changes relative site weights; quantiles change value space; weighted nulls change expected selection. When a row changes status, that description is more useful than “the result disappeared.”

**Do not accidentally conclude:** Survival across many routes supports conditional robustness, not immunity to label circularity, locus selection or a new model release. The same underlying data feed every column.

**Self-check:** What does a dash mean in this table, and why must it stay distinct from a high q?

**Answer:** The requested comparison is undefined or not applicable. A high q is a defined test that does not pass its correction rule. They are different evidence states.

## P61. Table S4: a composition share is not a causal percentage

**Where we are:** Additional file 2, Table S4, PDF p 3.

**What the passage is doing:** Explains restricted means, reference values and the composition-share column.

**Evidence class:** EXPLORATORY EXCLUSION / PROJECTION

**In ordinary language:** Removing a chromosome also removes a gene with a particular class mix. The table projects how much of the change that mix could explain. The share is not a causal fraction of leakage removed. Some shares can exceed one. The calculation is useful bookkeeping, but it does not isolate every reason the statistic changed.

**Source details, definitions and reported values:** The restriction removes 15 PCCA sites on chromosome 13, leaving 105. The table gives all-site and restricted statistics, restricted null and adjusted test results, first-place fractions and a composition projection. All 17 primary findings remain significant under the restricted 66-test family.

For AVI_SCORE Euclidean, the observed mean falls from 0.0908 to 0.0537, while the restricted null is−0.0907. The relevant restricted excess is therefore about 0.1444, not 0.0537 alone. Its first-place fraction is 0.476. The composition-share column attributes 0.68 of the observed statistic change to a projection based on class mix.

Some shares exceed one, such as SPLICE_JUNCTIONS. That possibility shows the column is not a bounded causal partition of training bias. It compares a predicted composition change with an observed change and can reflect opposing effects.

**Reasoning or worked illustration:** Compute the statistic and null difference before comparing evidence. Then read the projection as a counterfactual bookkeeping exercise: what would change if class-specific statistics stayed fixed but class weights changed? That does not identify which remaining change is caused by training exposure.

**Do not accidentally conclude:** Excluding a chromosome excludes a gene with a particular consequence mix. The table cannot separate those changes causally or clear all other training routes.

**Self-check:** Why should 0.68 not be called “68% of leakage removed”?

**Answer:** It is a composition projection share of a statistic change, not a measured training-leakage effect. The restriction changes gene and consequence composition together.

## P62. Table S5: one flagged site and all known-pathogenic alternatives are different exclusions

**Where we are:** Additional file 2, Table S5, PDF pp 3–4.

**What the passage is doing:** Prevents a 119-site check from being confused with the 99-site alternative-label check.

**Evidence class:** EXPLORATORY DATA-QUALITY SENSITIVITY

**In ordinary language:** One check removes a single flagged site. Another removes all sites with a defined kind of known-pathogenic rival. They produce different samples and answer different questions. Each scorer can also have its own missing outputs. Keep these rules beside the counts. No exclusion turns every remaining unknown rival into a benign control.

**Source details, definitions and reported values:** The wide table lists 17 published comparisons after removing the flagged chr9 site. Most rows use n 119; polyadenylation uses 105 because its original support was 106. Every listed raw p is at most 0.0011. This supports robustness of those published findings to that one flagged position.

The caption also reports a broader exclusion: removing sites with assertion-criteria P/LP alternatives leaves 99 and raises AVI_SCORE first place to 0.566. A broader local-release categorization gives 23 alternatives at 22 sites and fraction 0.571. These are not identical count definitions; the main text distinguishes assertion-criteria records from all P/LP records.

The one-site check was among the original pipeline sensitivities. Broader alternative-label reading offers useful context but does not turn all remaining alternatives into known benign variants.

**Reasoning or worked illustration:** Write two exclusion rules on paper: remove one specified problematic position; remove every position with a qualified known-pathogenic rival. They address different potential failures and produce different denominators. Never attach the 99-site fraction to the 119-site test rows.

**Do not accidentally conclude:** The sensitivity does not prove every unflagged record is correct. It shows that this particular flagged site is not driving the listed primary signals.

**Self-check:** Why does polyadenylation have 105 rather than 119 after the flagged site is removed?

**Answer:** Its initial eligible group was 106 rather than 120. Row-specific missingness remains in addition to the explicit one-site exclusion.

## P63. Table S6: what the 22 scorers return

**Where we are:** Additional file 2, Table S6, PDF pp 4–5.

**What the passage is doing:** Explains assay families, base versus active outputs and unequal reference coverage.

**Evidence class:** MODEL-OUTPUT DICTIONARY

**In ordinary language:** The table is a dictionary of what each scorer returns. Some values measure predicted change; others describe the more active allele. Profiles also have different numbers of tracks and background support. A large profile is not a large sample of independent people. The biological names describe predictions, not assays performed in this study.

**Source details, definitions and reported values:** ATAC and DNASE summarize predicted chromatin accessibility. CAGE and PROCAP concern transcription-start activity. CHIP_HISTONE and CHIP_TF concern histone marks and transcription-factor binding. Their base variant outputs are log ratios of reference/alternate-derived signals over defined windows. Their ACTIVE versions return activity of the more active allele, rather than a difference.

RNA_SEQ summarizes predicted expression change over exons. CONTACT_MAPS summarizes changes in long-range contact predictions. Splice scorers measure changes in splice probability, usage or junction counts; polyadenylation concerns RNA end-processing isoforms. These are predictions for tracks, not assays performed by this study.

AVI_SCORE is a scalar ensemble. Its 18 feature contributions sum to that score up to an offset. Its 18 input features include AlphaMissense and consequence flags. The tracks/background/sites columns show why profile dimensionality and available information are not uniform: from one scalar track to many tracks, and from two to 400 background profiles.

**Reasoning or worked illustration:** Read one row as a data dictionary: biological prediction target, scoring formula, consequence-input flag, background support, track count and eligible sites. A large number of tracks is not a large number of independent test subjects. Multiple assays can share biological information and model architecture.

**Do not accidentally conclude:** The table’s brief descriptions cannot be used as clinical assay validation. “No consequence inputs” describes the listed scorer design; it does not prove every observed signal has an independent mechanism.

**Self-check:** What distinguishes an ACTIVE score from its base-track score?

**Answer:** The ACTIVE score uses activity of the more active allele. The base score typically measures a change. Near-shared activity at one site can make the active version less informative for choosing among alternates.

## P64. Table S7: the consequences of all three alternatives matter

**Where we are:** Additional file 3, opening and Table S7, PDF p 1.

**What the passage is doing:** Explains the five mutually exclusive initial site types and their annotation checks.

**Evidence class:** ANNOTATION COUNTS / EXPLORATORY SITE TYPES

**In ordinary language:** The chosen allele's class does not tell us the classes of its rivals. A missense site can offer a nonsense rival. The table counts these patterns across all three changes. Its five groups become four in the figure because two are merged. These are checked analysis labels, not new experiments proving clinical harm.

**Source details, definitions and reported values:** Across 360 substitutions, the derived classes are 300 missense, 41 nonsense, 6 start loss and 13 synonymous. The 120 selected alleles have 86, 32 and 2 in the first three classes and no synonymous selected allele. Total-alternative class counts are not the same as selected-class counts.

The five site-type rows are 26 unique selected loss-of-function, 8 with multiple loss-of-function alternatives, 75 all-missense, 8 missense-selected with a synonymous rival and 3 missense-selected with a loss-of-function rival. They add to 120. Figure 2 combines the last two into an 11-site panel.

The annotation checks agree for 120 selected ClinVar names, 164 alleles with their own ClinVar records and 360 Atlas loss-of-function inputs. This establishes consistency of the used consequence coding, not new experimental verification of clinical harm.

**Reasoning or worked illustration:** A position can belong to a missense-selected stratum while offering a nonsense alternative. That matters for both a consequence-severity baseline and a missense-matched null. Counting only the selected allele’s class loses the information about its competitors.

**Do not accidentally conclude:** Consequence agreement with annotations sharing sequence information is not independent biological replication. The table defines and checks analysis classes.

**Self-check:** Why do Figure 2’s four groups and S7’s five groups not contradict?

**Answer:** Figure 2 merges the 8 synonymous-rival and 3 loss-of-function-rival missense groups into one 11-site panel. The other three groups are unchanged.

## P65. Table S8: the displayed fraction and the tested mean are separate

**Where we are:** Additional file 3, Table S8, PDF pp 1–2.

**What the passage is doing:** Teaches row-specific denominators and within-stratum correction.

**Evidence class:** EXPLORATORY STRATIFIED FAMILY

**In ordinary language:** The table displays first-place fractions beside tests based on mean gaps. Those columns should not be confused. It also corrects tests within each class group. Different scorers retain different sites, and some cells are unavailable. A dash is not a zero, and an uncorrected small value does not override the reported family result.

**Source details, definitions and reported values:** S8 places missense and nonsense/start-loss results side by side for each scorer–geometry pair. The displayed most-extreme fraction is descriptive; the p-values come from the within-site mean-statistic test. They should not be read as binomial p-values for the displayed fraction.

BH correction runs within each stratum. AVI_SCORE Euclidean has 0.372 first place in 86 missense sites with q about 0.349, and 0.882 in 34 nonsense/start-loss sites with q about 0.00052. Other rows need not show the same class contrast. The table includes the nonsignificant comparisons rather than only the most favorable ones.

The AVI input-feature loss-of-function cells are dashes because eligibility requires missense inputs for all alternatives. Polyadenylation has 81 missense and 25 loss-of-function sites. These are missing-support differences, not zero effects.

**Reasoning or worked illustration:** While reading one row, record what generated the p-value and what generated the fraction. Two different summaries can be displayed beside each other for interpretation. Mean significance and a fraction above one third are related but not identical claims.

**Do not accidentally conclude:** No initial missense comparison passes the uniform family. That inconclusive result must not be overridden by reading an uncorrected p or a simply above-chance fraction as confirmation.

**Self-check:** Why is a dash in the AVI input-feature loss-of-function column not evidence of zero signal?

**Answer:** The comparison lacks eligible profiles under its definition. An unavailable analysis does not estimate zero.

## P66. Table S9: matching and conditional-logit checks retain boundary findings

**Where we are:** Additional file 3, Table S9, PDF pp 2–3.

**What the passage is doing:** Explains each column set and the warning about separation.

**Evidence class:** EXPLORATORY MATCHED / PARAMETRIC CHECK

**In ordinary language:** Matching changes which rivals can be chosen under the null. A fitted model checks the same sites in another way. Neither adds new data. A huge fitted number may be unstable. The remaining finding sits near a threshold and fails a stronger correction. Keep those limits beside it rather than calling it settled evidence.

**Source details, definitions and reported values:** The left columns describe the consequence-matched null: eligible n, first-place fraction, its matched reference, p, BH q and BY q. Most rows use 94 sites; polyadenylation uses 86 and AVI input features 75. The matched reference fraction need not be exactly one third because positions can have two eligible alternatives and ties.

SPLICE_JUNCTIONS Euclidean has fraction 0.468 against null 0.353, p 0.0010, BH q 0.046 and BY q 0.221. The conditional-logit distance odds ratio is 1.42 per SD, with corrected q 0.0498. These are borderline exploratory results and shared-data analyses, not independent confirmations.

Very large or tiny odds ratios with large standard errors can reflect separation. The caption explicitly warns that they are not interpretable. A surprising number is not automatically a strong biological effect.

**Reasoning or worked illustration:** The matched null and logit model both try to account for loss-of-function differences, but make different statistical assumptions. Agreement helps assess method dependence; it does not add sites or independent labels. Read effect size, uncertainty and family context before deciding what a confirmation claim would require.

**Do not accidentally conclude:** The odds ratio concerns selected labels in the constructed comparison, not odds of disease. The BY failure and exploratory status must remain beside the BH finding.

**Self-check:** Why can the matched null’s first-place reference be 0.353 rather than 1/3?

**Answer:** Reassignments are restricted by consequence, some positions offer two eligible choices, and the first-place event depends on profiles and ties. The uniform three-choice baseline is not automatically applicable.

## P67. Table S10: random subsets ask whether smaller size alone explains weakness

**Where we are:** Additional file 3, Table S10 and junction proximity note, PDF pp 3–4.

**What the passage is doing:** Clarifies the subset comparison and distinguishes two junction definitions.

**Evidence class:** EXPLORATORY POWER / DESCRIPTIVE CHECK

**In ordinary language:** Random subsets help ask whether smaller size alone explains a weak result. They still come from the same mixed sample. Their behavior does not prove that the missense effect is zero. The footnote also uses two different definitions of junction proximity. Counts from different coordinate rules should not be treated as conflicting measurements of one quantity.

**Source details, definitions and reported values:** For each published comparison, the analysis draws 2,000 random subsets of the same size as the missense stratum from that comparison’s eligible sites. It compares their z-values with the actual missense z. Most subsets retain the higher signal of the full mixed cohort. This argues against smaller N alone explaining the weaker observed missense pattern.

The check does not prove a zero effect among missense variants. The mixed reference contains stronger loss-of-function positions, and the selected full-cohort effect can be optimistic. Later S15 asks different power questions using fractions and normalized excess.

The footnote reports two junction proximities:12 selected sites within 3 genomic bases of a junction in the Atlas records, and 5 within 2 coding bases of an exon boundary in the MANE transcript. They use different reference objects and distance conventions, so unequal counts are expected.

**Reasoning or worked illustration:** Imagine holding N fixed but changing which classes enter. If random mixed subsets remain strong while the actual missense set is weak, composition matters beyond sample size. That inference concerns heterogeneity, not complete absence of information. A proximity description likewise requires its coordinate and transcript definition.

**Do not accidentally conclude:** The subsets are derived from the original observations, not 2,000 independent biological replications. The descriptive proximity counts do not by themselves establish that splicing drives the score.

**Self-check:** What does the subset check weaken, and what does it leave open?

**Answer:** It weakens an explanation by smaller N alone under its reference. It leaves open a smaller real missense effect, null dependence, gene heterogeneity and label circularity.

## P68. Table S11: each gene contributes differently

**Where we are:** Additional file 4, Table S11, PDF pp 1–2.

**What the passage is doing:** Explains the paired within-gene and leave-one-gene-out columns.

**Evidence class:** EXPLORATORY PER-GENE / LEAVE-ONE-OUT CHECK

**In ordinary language:** Genes contribute different amounts of signal and different numbers of sites. Leaving one out shows how much a pooled finding relies on it. Missing outputs can change the actual effect of the exclusion for each scorer. This is useful exploration within the sample. It does not establish performance on a randomly chosen new gene.

**Source details, definitions and reported values:** The table follows the 17 published comparisons across four genes. Its left side tests each gene alone; its right side repeats the test with that gene removed. The share-of-excess column describes a gene's contribution to the total excess, not its fraction of patients or biological causation.

For AVI_SCORE Euclidean, PCCA contributes about 0.35 of the excess with 15 sites; MMUT contributes about 0.22 with 58 sites. Large contributions need not follow sample size. Consequence composition and gap magnitudes differ. The selected-class counts are DNM1 15 missense/5 nonsense, PCCA 5/10, PCCB 17/9 plus 1 start loss, and MMUT 49/8 plus 1 start loss.

Some non-AVI results depend strongly on a gene. For polyadenylation, removing PCCB leaves weak evidence; removing PCCA leaves almost the same eligible sample because most PCCA profiles were unavailable. Missingness and biological composition interact. Corrected values must be read in the stated 68-test families.

**Reasoning or worked illustration:** Compare the number of sites, share of excess and leave-out result together. A small gene can contribute a large signal if it contains many high-contrast sites. Leave-out stability assesses dependence on one part of this sample. It does not estimate performance on an unseen gene drawn from a population of genes.

**Do not accidentally conclude:** The 17 comparisons were selected from the primary results. Their gene-specific follow-ups are exploratory and share observations. A share exceeding or falling below its sample proportion is not evidence of a unique causal mechanism.

**Self-check:** Why can removing PCCA have little effect on polyadenylation while mattering for AVI?

**Answer:** Polyadenylation already lacks most PCCA profiles, whereas AVI includes them. The same nominal exclusion changes each scorer’s actual support differently.

## P69. Table S12: exact tails check simulation resolution

**Where we are:** Additional file 5, Table S12, PDF pp 1–2.

**What the passage is doing:** Explains permutation floors, Monte Carlo intervals and exact-tail brackets.

**Evidence class:** NUMERICAL PRECISION CHECK

**In ordinary language:** More draws give a more precise tail estimate. An exact calculation checks the same null by another route. Neither adds biological data. One bound concerns random draws; another concerns the math used to calculate a tail. This matters near a cutoff. The sample and its scientific limits stay the same.

**Source details, definitions and reported values:** The table compares the original 9,999-draw p-values with 99,999 draws and an exact calculation of the conditional null tail. All 17 primary discoveries remain significant; the largest new BH q among them is 0.0069. Seven cells reach the new simulation floor of 10^−5.

The exact computation combines independent three-choice contributions across sites using a lattice convolution. Its displayed bracket reflects numerical discretization bounds, not a confidence interval for disease risk. The Monte Carlo interval instead describes uncertainty from finitely many random draws under the fixed null.

For CONTACT_MAPS Poincaré, the exact tail is about 0.0150. It remains outside the uniform-family threshold. Thus the original 18th-place boundary was not simply rescued by adding permutations. Several very small exact tails lie far below what 9,999 or 99,999 draws can resolve directly.

**Reasoning or worked illustration:** A simulation floor is a measurement-resolution limit for a probability calculation. Increasing draws can distinguish values below the old floor, but it does not create more biological data. Exact arithmetic is especially useful near a decision boundary, where Monte Carlo uncertainty could otherwise change a significance label.

**Do not accidentally conclude:** Exact conditional tails do not make the null scientifically correct or labels independent. They remove one numerical uncertainty while leaving design and interpretation limits intact.

**Self-check:** Why are the exact-tail bracket and Monte Carlo interval different?

**Answer:** The bracket bounds a numerical approximation in the exact-distribution calculation. The interval quantifies random-draw uncertainty. Neither is an interval for a patient outcome or model transport across genes.

## P70. Table S13: every alternative-status category has a distinct meaning

**Where we are:** Additional file 5, Table S13, PDF pp 2–3.

**What the passage is doing:** Explains status counts, the small benign subset and the sign-test granularity.

**Evidence class:** PUBLIC-RECORD LABEL AUDIT / EXPLORATORY PAIRS

**In ordinary language:** Alternative labels range from known P/LP to no record. These categories must stay distinct. The few likely-benign examples all share a class limitation, and small pair counts make tests coarse. Even a perfect small set can give weak statistical evidence. It cannot by itself establish general clinical discrimination.

**Source details, definitions and reported values:** The alternatives partition into 23 P/LP, 6 benign or likely benign, 11 uncertain, 4 conflicting and 196 without records, totaling 240. The gene rows sum to the same total. A no-record category is unavailable clinical evidence, not an inferred benign class.

The six likely-benign examples are listed with their exact substitutions, transcript names and review stars. All are synonymous. Selected-versus-benign Euclidean comparisons therefore contrast classes as well as clinical labels. Three scorers place the selected allele farther away in all six pairs. Other scorers have ties, fewer available pairs or mixed directions.

The one-sided sign test for six successes in six pairs gives 0.0156. Polyadenylation has only four usable pairs; even four successes give 0.0625. These discrete limits show why small selected examples cannot support a general discrimination claim.

**Reasoning or worked illustration:** Calculate the best possible sign-test tail as(1/2)^n under its independent fair-sign reference. With n = 6 that is 1/64; with n = 4 it is 1/16. The calculation explains the table's granularity. It does not establish independence or remove the consequence contrast in those pairs.

**Do not accidentally conclude:** These are not independent pathogenic-versus-benign validation cohorts. The table documents label availability and a small exploratory check, with no multiplicity-adjusted clinical certification.

**Self-check:** Why does a perfect four-pair result still fail an unadjusted 0.05 rule?

**Answer:** Its smallest one-sided sign-test probability is 1/16=0.0625. Discrete small samples limit statistical resolution even before considering other biases.

## P71. Table S14: composition projection is not a new measured result

**Where we are:** Additional file 5, Table S14, PDF pp 3–4.

**What the passage is doing:** Explains record overlaps, class weights and the projected first-place fraction.

**Evidence class:** ASCERTAINMENT AUDIT / EXPLORATORY PROJECTION

**In ordinary language:** The cohort and pool overlap in fewer records than the cohort's full size. Counts must follow that actual overlap. The table then projects a rate under a changed class mix. The projection is an assumption-based calculation, not a new measured result. Per-gene differences explain why an overall mixture can hide different sampling patterns.

**Source details, definitions and reported values:** The table compares the initial cohort with the star-filtered pool. Only 119 of the initial 120 records meet that pool's star condition. Thus the pool-minus-cohort total is 516, not 635−120=515. Counts must follow the stated overlap, not a convenient subtraction.

The pool includes many canonical splice and other intronic records missing initially. Among coding records, the loss-of-function mix differs by gene. DNM1 and MMUT shift in opposite directions; an overall nonsignificant composition difference does not imply identical sampling within every gene.

The projection uses the source's pool coding loss-of-function weight 0.336 with initial class-specific fractions. Its result is 0.543, with delta-method interval 0.466–0.620 and similar bootstrap limits. Per-gene/consequence cells reveal which initial observations supply the rates. The later observed pool fraction can be compared with this projection, but it is not the same quantity.

**Reasoning or worked illustration:** Using rounded source values, 0.336×0.882+0.664×0.372≈0.543. This is a transparent weighted average. It assumes the class-specific fractions transfer under changed weights. It does not model new molecular effects or establish that the original cohort was representative.

**Do not accidentally conclude:** The projection interval reflects its stated calculation and source uncertainty. It does not cover every source of gene, label or model-release uncertainty, and it is not a clinical accuracy interval.

**Self-check:** Why is the overlap total important for reproducing the pool-minus-cohort column?

**Answer:** One cohort record lacks the assertion-criteria qualification used by the pool. Subtracting all 120 would mix eligibility definitions and give the wrong denominator.

## P72. Table S15: exclusion, low power and compatibility are not synonyms

**Where we are:** Additional file 5, Table S15, PDF p 4.

**What the passage is doing:** Explains its three effect summaries and the meaning of each verdict.

**Evidence class:** EXPLORATORY POWER / EFFECT-SIZE CHECK

**In ordinary language:** A test that does not pass may still leave many effects plausible. A power calculation asks about detecting a specified effect under a rule. An interval can exclude one effect without proving zero. The table uses several summaries, so its verdicts need not match. Keep the statistic and reference effect beside each conclusion.

**Source details, definitions and reported values:** The first part uses the most-extreme fraction with Wilson intervals, a minimum detectable fraction and power against each comparison's full-cohort fraction. For 86 sites, the reported unadjusted 80%-power minimum is about 0.470. For the smaller 81-site polyadenylation group it is about 0.473.

AVI's missense interval excludes its larger full-cohort fraction. Many non-AVI rows are underpowered against their full-cohort fractions. The mean-statistic verdict and normalized-excess verdict need not agree with the rank-fraction verdict because they use gap sizes and attainable excess differently.

Normalized excess divides excess over the null by the largest excess possible at the same sites. Its one-sided upper bound helps distinguish data compatible with the reference effect from data excluding it. The source warns that the reference full-cohort effects were selected for significance, making power comparisons optimistic.

**Reasoning or worked illustration:** A nonsignificant test can leave a wide range of effects plausible. An exclusion statement requires a specified reference effect and uncertainty bound. A low-power statement concerns the chance of detecting that reference under assumptions. Neither alone demonstrates equivalence to zero or establishes clinical usefulness.

**Do not accidentally conclude:** The minimum detectable fractions use a specified unadjusted test, not automatic 66-test-family clinical thresholds. Do not carry a number from one testing rule into another.

**Self-check:** Why can one row say “underpowered” while another summary says the reference effect is excluded?

**Answer:** They may concern different statistics or reference scales. Read the fraction, mean and normalized-excess columns separately rather than collapsing their verdicts into one binary model label.

## P73. Table S16: gene composition and null choice can move different parts of a result

**Where we are:** Additional file 5, Table S16, PDF p 4.

**What the passage is doing:** Explains shares, per-gene counts, leave-out values and matched versus three-way nulls.

**Evidence class:** POST-HOC HETEROGENEITY / NULL SENSITIVITY

**In ordinary language:** Dropping a gene, limiting rivals and changing weights are different choices. Each can move the result. This table shows all three in the first missense sample. A favorable mix is not the first test unchanged. A gene dropped after seeing the scores does not become a proven rule for use in care.

**Source details, definitions and reported values:** The table follows the 17 primary comparisons within the 86 missense sites. It reports missense share of full-cohort excess, first-place counts by gene, a homogeneity test, a without-MMUT result, and several null choices. These are distinct summaries of one selected stratum.

For AVI_SCORE Euclidean, first place is 7/15 in DNM1, 3/5 in PCCA, 10/17 in PCCB and 12/49 in MMUT, totaling 32/86. Removing MMUT gives 20/37. The homogeneity result is exploratory evidence that a single pooled fraction hides gene differences.

Matched-null columns restrict choice to missense substitutions. Three-allele columns allow all alternatives. Weights 2, 4 and 6 encode different Ti:Tv assumptions. A starred raw p identifies BH significance in that particular family; the displayed p is not itself the q-value. Leave-one-gene-out families still produce no uniform-null missense discovery after correction.

**Reasoning or worked illustration:** Follow one intervention on the analysis at a time. Removing MMUT changes sites and class/context representation. Changing transition weights changes reference selection probabilities. Restricting to missense alternatives changes the eligible choices. A favorable result under several simultaneous changes should not be described as the original uniform result.

**Do not accidentally conclude:** The table is post hoc and the gene sample is small. Removing a poorly performing gene after observing outcomes is not a validated deployment rule.

**Self-check:** What must be named beside a starred weighted result?

**Answer:** The selected sites, matched or three-way choice set, transition weights, statistic and multiple-testing family. Without them the star has no stable scientific meaning.

## P74. Table S16b: raw score ranking is not centroid-distance ranking

**Where we are:** Additional file 5, Table S16b, PDF pp 4–5.

**What the passage is doing:** Explains the AlphaMissense reference, expected fractions and the source of an apparent count discrepancy.

**Evidence class:** POST-HOC DIRECT-RANKER COMPARISON

**In ordinary language:** Raw scores and distances from an average ask different questions. They can give different first-place counts without a bug. The null also depends on how many rivals can be chosen. AVI shares an input with the other ranker. Their agreement is useful context, but it is not two independent tests of clinical truth.

**Source details, definitions and reported values:** Among initial missense substitutions, AlphaMissense and raw AVI_SCORE each rank the selected allele highest at 34 of 86 sites. Their direct-score fraction 0.395 differs from the distance-based AVI first-place count 32/86 in the primary summaries. They are not conflicting copies of one statistic: raw score and distance from a centroid ask different questions.

The predictors choose the same allele at 58 of 86 sites. Under uniform choice among eligible missense substitutions, the expected fraction is 0.355, not automatically 1/3. Some positions offer fewer eligible same-class choices. Transition-weighted expectations change while the observed 34 wins remain fixed.

Exact Poisson-binomial tests account for position-specific selection probabilities. They do not measure biological calibration. The comparison is a post hoc reference to a predictor already used as an AVI input and potentially in clinical classifications.

**Reasoning or worked illustration:** A high raw score is directional; distance from a background reference is unsigned. A value can be far below a centroid without being the highest raw score. Eligibility also changes the null probability. Keep those two differences visible before comparing 34 with 32 or the reference 0.355 with one third.

**Do not accidentally conclude:** This is not an independent external validation of AVI by AlphaMissense. Shared input information and clinical-label circularity remain.

**Self-check:** Why does agreement between AlphaMissense and AVI not prove two independent models confirmed a clinical truth?

**Answer:** AlphaMissense is an AVI input and may inform the labels. The methods share information, so agreement can arise without independent biological confirmation.

## P75. Table S17: active-allele profiles mostly describe shared local activity

**Where we are:** Additional file 5, Table S17, PDF p 5.

**What the passage is doing:** Explains the spread metric and the changed correction family after removing ACTIVE rows.

**Evidence class:** POST-HOC VARIATION / FAMILY CHECK

**In ordinary language:** Some outputs barely change among alternatives at one position. That limits their use for choosing an alternate, even if they matter for other tasks. Removing their tests changes the multiple-testing family. An extra corrected finding can then appear with the same remaining raw values. The model has not gained new biological information.

**Source details, definitions and reported values:** Spread is the largest distance between the three pooled profiles divided by their mean norm, before per-site scaling. The table reports its median and interquartile range across eligible positions. This is a relative within-position variability measure, not a measurement of disease variation.

The seven ACTIVE scorers have median spreads about 0.0017–0.0181, roughly 0.2–1.8% of profile norm. Other scorers span about 0.0474–1.4895. The active outputs are consequently much less allele-varying in this task. That supports the source's decision not to interpret them as ordinary allele-selection tests.

Removing their 21 comparisons and reapplying BH gives 18 of 45 primary findings rather than 17 of 66. The nonsense/start-loss family changes from 22 of 63 to 20 of 42, and missense remains 0 of 45. Different corrected counts can result without changing a single remaining raw p-value.

**Reasoning or worked illustration:** A correction family is part of the analysis specification. Removing low-information tests reduces multiplicity burden but changes the declared search. The extra CONTACT_MAPS finding after removal is a family effect, not newly observed molecular evidence. The raw spread itself helps explain task suitability before significance is considered.

**Do not accidentally conclude:** Low within-site variation does not make an ACTIVE scorer useless for all biological questions. It limits its ability to distinguish alternate bases at a fixed position.

**Self-check:** What does removing ACTIVE rows change: the model outputs or the testing family?

**Answer:** The outputs and remaining raw test results stay fixed. The multiplicity family and therefore adjusted decisions change.

## P76. Table S18: distinguish held-out, whole-pool and sensitivity rows

**Where we are:** Additional file 5, Table S18, PDF pp 5–6.

**What the passage is doing:** Explains the table’s sample hierarchy and four planned readings.

**Evidence class:** PRE-SPECIFIED REPLICATION WITH LABELED POST-HOC ROWS

**In ordinary language:** Rows separate new held-out sites, the whole pool and broader checks. Each has its own count and null. A plan decides which row settles a planned claim. A favorable later row cannot replace a failed planned result. Similar rates from different groups need not measure the same thing.

**Source details, definitions and reported values:** Primary pool positions number 482; held-out primary positions number 384. Coding, missense, nonsense/start-loss, canonical-splice and other-intronic rows are different subsets. For example, held-out coding has 278 positions and a first-place fraction 160/278≈0.576, while all 384 held-out positions give 196/384≈0.510. Mixing additional classes changes the pooled fraction.

The planned readings cover the class contrast, observed coding fraction against the projection, a named missense-matched AVI criterion, and canonical-splice behavior. The missense q 0.0506 fails its strict 0.05 criterion. Weighted held-out missense and whole-pool missense rows are labeled post hoc and should not replace that result.

Sensitivity rows add positions with multiple P/LP alternatives using a random selected P/LP choice. Those rows test robustness to the primary single-allele restriction, not a new independent cohort. Cache stability controls and plan provenance remain in the caption.

**Reasoning or worked illustration:** Read the leftmost family label before any number. “Pool” can include initial observations; “held-out” excludes them; “sensitivity” changes eligibility. A numerator/denominator pair is meaningful only with that label and its null. Similar fractions across these rows are useful pattern checks but not identical estimands.

**Do not accidentally conclude:** The table does not resolve the original four-locus generalization limit. Its canonical-splice null is a relative alternate-choice result, not a failure to detect reference disruption.

**Self-check:** Which row should decide the planned missense replication claim?

**Answer:** The pre-specified held-out missense-matched AVI reading with its exact criterion. Favorable post hoc or whole-pool rows provide context but do not replace the planned decision.

## P77. Table S19: a special-case replay checks the context-aware implementation

**Where we are:** Additional file 5, Table S19, PDF p 6.

**What the passage is doing:** Explains the full grid of transition and CpG assumptions.

**Evidence class:** PRE-SPECIFIED NULL SENSITIVITY

**In ordinary language:** The grid varies weights while keeping observed ranks fixed. With the new factor set to one, it should replay the earlier rule. That checks the code. Other settings show how much the finding depends on a choice. The smallest adjusted value is not always the main answer. The weights are not measured rates at each site.

**Source details, definitions and reported values:** A CpG transition is available among the three alternatives at 11 of 120 initial sites; only two selected alleles are CpG transitions. The null combines a transition weight with a CpG multiplier. Its grid shows Ti:Tv 1, 2 and 3 under multipliers 1 and 10 for the full cohort and missense-matched subset.

Multiplier 1 replays the transition-only full-cohort analysis. The strongest transition-only setting retains 16 of the published 17 comparisons; adding the CpG multiplier retains all 17 in each reported full-cohort setting. The identities and families remain important, not just the totals.

At the 86 missense sites, AVI_SCORE q varies from 0.450 for the lowest listed transition-only matched setting to 0.008 for Ti:Tv 3 with CpG 10. At the planned Ti:Tv 2/CpG 10 setting it is 0.031. The model outputs and observed ranks do not change across this grid.

**Reasoning or worked illustration:** This table is a sensitivity surface for assumptions. A point on the grid represents a proposed selection-probability model, not an estimate of each site's true mutation process. Replaying a known special case checks code; examining the grid checks how conclusions depend on the assumption.

**Do not accidentally conclude:** Do not pick the smallest q from the grid and call it the primary result. Do not treat a global relative weight as a measured mutation rate for a patient or position.

**Self-check:** Why is the multiplier 1 replay useful even though it adds no new scientific finding?

**Answer:** It checks that adding a context mechanism leaves the earlier transition-only calculation unchanged when that mechanism is neutral. It is an implementation consistency test.

## P78. Table S20: each planned panel reading needs its own denominator

**Where we are:** Additional file 5, Table S20, PDF pp 6–7.

**What the passage is doing:** Explains the principal, secondary and sensitivity rows together with the failed stopping rule.

**Evidence class:** PUBLICLY PRE-SPECIFIED PANEL RESULTS

**In ordinary language:** Each planned reading has its own sites, null and stopping rule. The matched finding count is not just a subset of the uniform findings. Some tests can gain evidence when the question changes. Keep the failed count criterion, the positive missense reading and the distinct intronic results separate. They answer related but different questions.

**Source details, definitions and reported values:** The table gives six planned readings plus secondary and sensitivity rows. P1 is the nonsense-versus-missense contrast; P1b extends it to selected non-AVI scorers. P2 tests consequence matching; P3 tests missense under the mutation-aware matched null; P4 tests other intronic positions; P5 tests canonical-splice positions.

The coding uniform family has 1,490 positions and 37 significant comparisons. The matched coding family has 452 positions and 10 significant comparisons. Seven matched findings are AVI-related; CAGE cosine and two CHIP_HISTONE_ACTIVE comparisons supply the other three. Some matched findings were not significant in the uniform family, so the matched set is not simply a subset of its discoveries.

P3 has 246 missense positions, P4 has 63 other-intronic positions and P5 has 157 canonical-splice positions. The “no chromosome 13” and multi-P/LP rows change scope explicitly. The table's compact q-values are rounded; the main text supplies exact 0.0013 for the planned AVI missense test.

**Reasoning or worked illustration:** Use the plan's label to select the relevant row before reading a favorable number. For P2 apply both criteria; do not treat passing criterion(b) as rescuing failed criterion(a). For P4 keep non-splicing scorer findings beside splice findings. For P5 retain the relative-alternative interpretation.

**Do not accidentally conclude:** Uniform and matched analyses change both choice rules and available sites. Their discovery counts are not a count of biological mechanisms explained or an independent estimate of mediation.

**Self-check:** Why can a matched analysis gain a finding absent in the uniform analysis?

**Answer:** The null, support and multiplicity-adjusted evidence change. Matching need not monotonically reduce every test statistic or q-value. It changes the scientific comparison.

## P79. Table S20b: four of six is not all six

**Where we are:** Additional file 5, Table S20b, PDF p 7.

**What the passage is doing:** Explains the difference estimates and Newcombe intervals for non-consequence-input scorers.

**Evidence class:** PRE-SPECIFIED CONTRAST ESTIMATES

**In ordinary language:** All six point estimates favor one class, but only four intervals exclude zero. The exceptions matter. A positive estimate with a broad interval is not proof of no difference, nor proof of a reliable contrast. Read both class denominators and the interval before summarizing how many scorers support the planned finding.

**Source details, definitions and reported values:** Each row compares the nonsense/start-loss first-place fraction with the missense fraction for a Euclidean scorer. The difference is positive for all six point estimates, but the interval excludes zero for only four: SPLICE_JUNCTIONS, SPLICE_SITE_USAGE, RNA_SEQ and CHIP_HISTONE.

SPLICE_SITES has difference 0.062 with 95% interval−0.005 to 0.126. POLYADENYLATION has 0.045 with interval−0.021 to 0.108. These remain compatible with no contrast under the stated interval. The paper therefore says four of six tested scorers extend the contrast, not six of six.

SPLICE_JUNCTIONS has 668/1,238 versus 81/246, a difference about 0.210. Newcombe hybrid-score intervals combine uncertainty in two proportions. They do not establish an experimentally measured mechanism behind the class association.

**Reasoning or worked illustration:** A positive point estimate and an interval entirely above zero are different statements. State both numerator/denominator pairs before interpreting a difference. The same-selected-sites setting and shared model outputs also mean these rows are not six independent studies.

**Do not accidentally conclude:** The interval interpretation is conditional on the studied sample and method. Failure to exclude zero is not proof that the two class fractions are identical.

**Self-check:** What wording preserves both exceptions?

**Answer:** Four of six tested scorers without consequence inputs show intervals above zero for the class contrast; the other two have positive point estimates with intervals crossing zero.

## P80. Table S20c: read zero-over-zero as unavailable

**Where we are:** Additional file 5, Table S20c, PDF p 7.

**What the passage is doing:** Explains pooled heterogeneity through actual per-gene numerators and denominators.

**Evidence class:** PRE-SPECIFIED DESCRIPTIVE PER-GENE COUNTS

**In ordinary language:** A fraction needs both its numerator and denominator. Two wins from two sites should not be read like hundreds of wins. Zero over zero means no observations, not zero performance. Per-gene counts help explain the pooled result and its limits for new genes. They do not rank clinical severity or guide patient care.

**Source details, definitions and reported values:** Rows identify seven genes; columns identify nonsense/start-loss, missense, canonical splice and other intronic positions. A cell is the number of selected first places over the number of eligible positions. For example, SCN5A has 125/130 nonsense/start-loss and 24/83 missense first places. BRCA2 has 617/708 and 28/57 in those columns.

HFE has only 2 missense positions, both ranked first. Its apparent 100% is not evidence of certainty or superiority over other genes. Its other-intronic cell 0/0 means no observations, not zero performance. BAP1's other-intronic 1/1 is likewise a tiny sample.

Homogeneity tests are limited to genes with at least five positions. The reported missense p 0.041 suggests variation within that subset; nonsense/start-loss p 0.14 does not prove identical gene behavior. The counts explain why pooled precision does not automatically transport to a new gene.

**Reasoning or worked illustration:** Always read numerator and denominator together. A fraction based on two observations is much less informative than one based on hundreds, even if its displayed percentage is higher. Missing categories must remain missing rather than being averaged as zero.

**Do not accidentally conclude:** The table is not a per-gene clinical recommendation or a ranking of disease severity. It describes this model comparison in selected records.

**Self-check:** How should HFE’s other-intronic 0/0 cell enter a pooled rate?

**Answer:** It contributes no observations. It must not be converted into a zero-valued rate or interpreted as evidence that no intronic signal exists in that gene.

## P81. Table S21: follow-up explanations do not amend the plans

**Where we are:** Additional file 5, Table S21, PDF p 8.

**What the passage is doing:** Explains baseline, direct-ranker, fixed-position, weighted-intronic and exclusion rows.

**Evidence class:** POST-HOC REPLICATION FOLLOW-UP

**In ordinary language:** These follow-ups explain the replication results but were not in either plan. They compare a simple baseline, raw rankers, fixed sites, weighted nulls and exclusions. Each changes a different part of the task. The fixed-site calculation separates one sample change from a null change. It helps interpretation without amending the failed planned criterion.

**Source details, definitions and reported values:** The consequence-only baseline reaches expected fraction 0.817 at 1,490 coding positions, compared with AVI_SCORE 0.800. At missense positions the baseline is 0.323 versus AVI 0.382. These are composition-dependent exploratory comparisons, not clinical equivalence tests.

Direct AlphaMissense and raw AVI ranking use 245 eligible positions, giving 104/245 and 103/245 first places. Their uniform expected fraction is 0.361 because eligible missense choice sets differ across sites. The methods pick the same allele at 172 positions. Shared information prevents treating that agreement as independent confirmation.

The fixed 452-position comparison gives uniform excess 0.146 and matched excess 0.037. The reported 74.8% reduction is smaller than the 94.3% all-coding-versus-matched comparison because the latter changes sites too. Weighted 13-site pool-intronic rows retain 18–19 of 60 findings rather than 21 under uniform selection. Outside-chromosome 13 small intronic counts are explicitly descriptive.

**Reasoning or worked illustration:** This table is valuable because it separates several explanations. A simple baseline exposes consequence contribution; direct scores compare ranking definitions; fixed positions isolate one eligibility change; weighted nulls examine assumed selection. None turns a failed confirmatory rule into a successful one. Rounded displayed inputs may not reproduce the last decimal of a calculation made from full-precision outputs.

**Do not accidentally conclude:** Every row is labeled post hoc and is outside both plans. Keep that status, small subset sizes and shared-label limitations in any summary.

**Self-check:** Why is the fixed-position reduction a cleaner comparison than comparing all coding with matched positions?

**Answer:** It holds the 452 positions fixed while changing the null. The all-coding comparison also removes positions, mixing a choice-rule change with sample composition.

## Working glossary

| Term | Meaning and boundary here |
|---|---|
| Allele / substitution | A base at a position / a change from the chosen reference base. An unselected alternative is not automatically benign. |
| SNV | Single-nucleotide variant, changing one DNA base. |
| Position / locus | One coordinate / a genomic region. Many positions in one locus do not become many independent genes. |
| GRCh38 / strand | The reference genome build / sequence orientation used to interpret a variant. |
| Transcript / exon / intron | An RNA form of a gene / retained sequence / sequence removed during RNA processing. |
| Missense / synonymous | Changes a protein building block / leaves that building block unchanged. Neither label alone supplies a clinical verdict. |
| Nonsense / start loss | Creates a stop signal / disrupts a start signal. Effects remain gene- and transcript-dependent. |
| Canonical splice | The usual boundary signals for RNA processing; the audit compares alternatives, not just alternate versus reference. |
| P/LP / VUS | Pathogenic or likely pathogenic / uncertain significance in the chosen ClinVar record snapshot. |
| Ascertainment | The rules selecting records and sites for analysis. |
| Scorer / track / profile | A variant-output method / assay- or tissue-related output dimension / collection of output values. |
| AVI | AlphaGenome Variant Impact, an ensemble using AlphaGenome features and other inputs. |
| ACTIVE | A scorer returning activity of the more active reference/alternate allele rather than their difference. |
| Centroid / norm | An average profile / a vector's length. |
| T / contrast / excess | Distance from centroid / selected distance minus largest rival / observed statistic minus its null mean. |
| Most extreme | Selected substitution has the largest distance at a site; not clinical accuracy. |
| Null / exchangeability | A specified reference assignment rule / the assumption allowing labels to be reassigned under that rule. |
| Permutation / Monte Carlo | Relabeling under a null / approximating a distribution with random draws. Neither adds biological observations. |
| p-value / q-value | Tail evidence under a specified null / multiplicity-adjusted evidence in a stated family. Neither is a patient's disease probability. |
| BH / BY | Benjamini–Hochberg / Benjamini–Yekutieli multiple-testing procedures. Their family and assumptions matter. |
| SD / standardized excess | Standard deviation / excess divided by null SD. A large standardized value is not a clinical effect size. |
| Wilson / Newcombe | Methods for intervals on a proportion / a difference of proportions. The sampling target still needs justification. |
| ARI | Adjusted Rand index for agreement between groupings relative to chance. Inspect memberships as well as its value. |
| Ti:Tv / CpG | Transition-to-transversion ratio / a sequence context affecting the stipulated mutation-aware null. |
| FAF | Filtering allele frequency, used in the declared AVI proxy-label rule; not a clinical diagnosis. |
| PVS1 / PP3 | Clinical evidence criteria for relevant null variants / computational evidence. Their use can create shared information with model inputs. |
| Conditional logit / separation | A within-site selection model / near-perfect predictor sorting that can make coefficient estimates unstable. |
| Prespecified / post hoc | Defined before the relevant information was available / added after earlier results were known. |
| Held-out | Outside the original cohort under the stated design, not automatically absent from all model training. |
| Circularity | Shared evidence entering both a predictor and its evaluation label. It differs from direct training overlap. |
| Functional assay / saturation editing | An experiment measuring a biological effect / experiments covering many substitutions at a position. Their own scope and training use still matter. |
| SHA-256 / manifest | A file-identity checksum / a list of identified files. Neither establishes that an interpretation is correct. |

## Twelve-item transfer self-test with answers

These questions ask you to transfer the reasoning to a new benchmark. Try each question before reading its answer.

### 1. State the estimand before the model name

**Question:** A team says a model achieved a high value on “variant understanding.” What must you ask before accepting that phrase?

**Answer:** Ask for the selected population, comparison alternatives, label definition, statistic, reference rule and deployment target. In this paper the quantity is selected-substitution enrichment among alternatives at chosen ClinVar positions. It is narrower than diagnosis, biological mechanism or general variant understanding. A model name does not supply an estimand.

### 2. Design a negative control for location shortcuts

**Question:** Selected variants lie near chosen genes while backgrounds are sampled far away. Which simple control should precede a biological interpretation?

**Answer:** Try a coordinate-only rule and inspect how sampling created separability. Then compare alternatives at the same position to remove that shortcut. Do not claim that fixing position also fixes consequence, label evidence or training exposure. A useful control targets a named alternative explanation, not every possible bias.

### 3. Explain a negative observed statistic

**Question:** Can a negative mean selected-minus-largest-rival contrast still exceed its null?

**Answer:** Yes. Under uniform three-way labeling the expected contrast is generally negative. Compare the observation with that distribution, not with zero. The RNA_SEQ example is −0.036 versus −0.126, an excess of +0.090. It can support mean enrichment without the selected allele always beating its rivals.

### 4. Choose between two tempting summaries

**Question:** A mean test is significant but the selected allele ranks first near one third of the time. Which summary should be omitted?

**Answer:** Neither. The mean uses gap magnitude; first place counts ordering. Both describe the result, and their difference limits claims of reliable ranking. Report sample size, null and heterogeneity. Do not rename the first-place fraction diagnostic accuracy.

### 5. Audit a same-class benchmark

**Question:** A team claims consequence matching removed most signal. What must you compare to quantify that statement cleanly?

**Answer:** Compare uniform and matched analyses on the same eligible positions, while reporting how matching changes choice sets and which sites drop. A count of significant tests is not a causal fraction explained. Check the simple consequence baseline and retain the distinction between exploratory and planned analyses.

### 6. Honor a failed stopping rule

**Question:** The plan requires matched discoveries no greater than one quarter of 37; ten remain. A second criterion passes. What is the verdict?

**Answer:** Ten exceeds 9.25, so the count criterion fails. If both criteria are required, the planned conclusion is not confirmed. The passing condition and strong qualitative pattern should still be reported. Rounding or selecting a later favorable analysis does not amend the original rule.

### 7. Diagnose a misleading benign control set

**Question:** Most comparison alternatives have no clinical record. Can you call them benign controls if the model ranks them below selected P/LP alleles?

**Answer:** No. The role of unselected control is not a clinical classification. Seek independent labels or functional measurements for all alternatives, define what those labels measure, and retain unknown status where evidence is absent. Known P/LP rivals can make one test conservative without solving the unknown-label problem.

### 8. Separate two circularity routes

**Question:** An allele is outside a declared training-label pool, but a model input may have informed its ClinVar classification. Is the evaluation independent?

**Answer:** Not necessarily. Direct training overlap and shared evidence in evaluation labels are different routes. Check model inputs, label construction and assay provenance separately. “No confirmed member of one pool” does not mean “no leakage or circularity anywhere.”

### 9. Pick the correct uncertainty target

**Question:** Thousands of variants come from a few genes. What is missing if confidence intervals treat every site as an independent draw from the genome?

**Answer:** The target population of genes and between-gene variation are not represented adequately. Define whether the claim concerns new variants in the same genes or unseen genes. Use design and uncertainty methods appropriate to that target. More variants within one locus do not substitute for diverse loci.

### 10. Read a canonical-splice null fairly

**Question:** All three alternatives disrupt a boundary signal, and none is preferred over the others. Does that refute splice-effect prediction?

**Answer:** No. The relative-alternative test differs from alternate-versus-reference disruption and from measured RNA function. State exactly which contrast failed. A useful next experiment measures all alternatives against a functional reference and checks whether those assay labels were used in model development.

### 11. Distinguish numerical precision from new evidence

**Question:** Increasing permutations makes an extremely small tail more precise. Has the biological sample size increased?

**Answer:** No. The positions, labels and predictions remain fixed. More draws reduce Monte Carlo uncertainty. Exact conditional tails likewise improve a probability calculation under the same assumptions; they do not remove ascertainment, circularity or model-release limitations.

### 12. Write a prospective next-study plan

**Question:** You obtain independent functional measurements at new positions. What should be fixed before inspecting model scores?

**Answer:** State eligible positions, assay quality rules, transcript/reference conventions, consequence groups, training/validation exclusions, analysis unit, null probabilities, multiplicity families, effect summaries and stopping rules. Plan both negative and positive interpretations. Separate held-out genes from held-out positions. Preserve source versions, missingness and reproducible joins. Functional assays can still cover only particular tissues or mechanisms, so even a well-designed benchmark must retain its biological scope.

## Final source and educational-status note

The complete companion is pinned to the exact v3 PDF and five additional files identified in the reader entry. It explains the source rather than extending its scientific claims. The frozen code/data and public panel plan retain their versioned deposit identifiers. Underlying AlphaGenome-derived outputs keep their separate terms.

The questions and answers support self-study. All source locators refer to the exact v3 files identified above, rather than to later manuscript versions.
