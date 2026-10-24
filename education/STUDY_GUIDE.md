# Reading the same-site AlphaGenome audit

*A plain-language companion to Patrick Iben's audit at ClinVar sites in 11 genes.*

This guide is for a reader who knows basic statistics but is new to genetics. You can use it without running the code. Its purpose is to help you explain the question, read the results, and recognize their limits. It is not a guide to interpreting a patient's DNA.

The source is preprint **v3**, DOI **10.5281/zenodo.23546548**. Page numbers below refer to that PDF, including its title page. The exact file and checksum are recorded in [the reader entry and provenance](README.md). The guide explains selected load-bearing passages rather than annotating every sentence. Scientific claims belong to the paper; the small teaching exercises are identified separately.

A useful question to keep beside you is: **At one DNA position, does the substitution recorded by ClinVar look more unusual than the other two possible substitutions?** A positive answer is narrower than showing that a model can diagnose disease.

## 1. What is being compared?

**Where we are:** Results §2.1, PDF p4; Methods §5.1, pp24–25; Limitations §3.3, pp19–23.

**What the passage is doing:** Defines the initial sample and the unit of comparison.

**In ordinary language:** DNA uses four letters, called bases. An SNV changes one base at one position. SNV means single-nucleotide variant. Given one reference base, three other bases are possible. The paper compares those three changes at the same position.

ClinVar stores reports about variants and their clinical meaning. P/LP means pathogenic or likely pathogenic. The study first chose 120 coding variants in four genes: DNM1, PCCA, PCCB and MMUT. Coding means the sequence helps specify a protein. The sample contains 86 missense, 32 nonsense and two start-loss variants. A missense change alters a protein building block. Nonsense creates a stop signal. Start loss disrupts a start signal.

The initial cache has 520 variants: the 120 selected variants and 400 background variants. The same-site comparison then uses all three substitutions at the 120 selected positions. That gives 360 possible changes. Those positions remain four gene regions. They are not 120 independent samples from all human genes.

**Evidence status:** Source-defined sample and cached model outputs. The cohort is selected, not a random sample of human disease.

**Do not accidentally conclude:** “Selected by ClinVar” does not make the other two alternatives benign. Nor does the sample describe all coding or noncoding variation. The initial curation excluded 60 intronic records; later replications examine intronic positions explicitly.

**Try it:** Explain why there are three substitutions per position but four genes in the first sample. Then name one type of variant missing from its initial coding-only sample.

## 2. Why a perfect first benchmark can be uninformative

**Where we are:** Results §2.2, PDF p5; Additional file 1, Figure S1, p1; Discussion §3.1, pp16–18.

**What the passage is doing:** Shows why a comparison against distant background variants can reward location recognition.

**In ordinary language:** The background sampler left an empty band around each selected position. It excluded coordinates within 50 kilobases on either side. A kilobase is a thousand DNA bases. The selected variants also lie in four chosen gene regions. These choices make location highly informative.

A rule using only genomic coordinates separates the selected and background variants perfectly in this constructed sample. It does not need a biological prediction. The result shows a weakness in that benchmark. It does not show perfect detection of harmful variants.

The same-site comparison removes this easy route. All three alternatives share a position. A model cannot win by recognizing that position alone. Yet the three changes can still have different consequences for the protein. Holding location fixed does not hold every biological property fixed.

**Evidence status:** A demonstrated negative control for this particular sampling design. Its lesson motivates the same-site audit.

**Do not accidentally conclude:** Location has no biological value. The narrower point is that location alone can explain success in this chosen-versus-background task. Same-site control removes that explanation but leaves other possible explanations.

**Try it:** A classifier knows only which gene region contains a variant. It separates these selected and background samples perfectly. What has it learned that still would not let it choose among three changes at one position?

## 3. What does “farther from background” mean?

**Where we are:** Results §2.3 and Table 1, PDF pp5–7; Methods §§5.2–5.3, pp25–26.

**What the passage is doing:** Defines the measured quantity and separates it from clinical risk.

**In ordinary language:** A scorer returns a profile: one value or a list of predicted values. For each scorer, the study averages the available background profiles. That average is a centroid, a reference point in the profile space.

The symbol T means distance from that centroid. For each position, the study subtracts the larger distance of the two alternatives from the selected variant's distance. It then averages this difference over positions. In words: selected distance minus the largest alternative distance, averaged over sites.

The paper also reports a simpler summary. “Most extreme” is the fraction of positions where the selected change is farthest away. These summaries answer related but different questions. One uses the sizes of the differences. The other counts first places.

The reference centroid uses only background outputs available for that scorer. Most scorers use all 400 backgrounds. Some use far fewer. A common formula does not guarantee equal information across scorers.

**Evidence status:** An analysis definition applied to cached predictions. Neither distance nor first-place fraction is a calibrated probability of disease.

**Do not accidentally conclude:** A larger T means a patient has a higher disease risk. T depends on the scorer, pooling rule, scaling and geometry. Comparing T across different scorers as if they used one clinical scale is not justified.

**Try it:** If selected distance increases but it still remains below the largest alternative, can the mean statistic improve without the selected change taking first place? Explain without inventing a disease probability.

## 4. Why the null mean can be negative

**Where we are:** Results §2.3 and Table 1, PDF pp5–7; Methods §5.3, p26; Additional file 5, Table S12, p1.

**What the passage is doing:** Explains the reference comparison and a result that is easy to misread.

**In ordinary language:** A null model states what selection would look like under a chosen reference rule. The primary rule labels each of the three substitutions selected with equal probability. It shuffles that label within each position. The model outputs stay fixed.

Under this rule, the mean statistic is usually negative. An ordinary random choice often loses to the largest of its two rivals. If the three distances differ, the null mean at one position is the smallest distance minus the largest, divided by three.

Table 1 gives a useful real example. For RNA_SEQ in Euclidean geometry, the observed mean is −0.036. Its null mean is −0.126. The excess over the null is +0.090: −0.036 minus −0.126. The observed result is negative, yet above its negative reference. Its adjusted q-value is 0.0038. The selected change takes first place at 0.458 of positions. That fraction is separate from the mean statistic.

**Evidence status:** The null is an explicit analysis assumption. The numerical example is from the source table, not new data.

**Do not accidentally conclude:** A significant comparison means the selected change usually beats both alternatives by a positive margin. Six of the 17 significant primary comparisons have negative observed means. Also, the uniform null is not a claim that all mutations occur equally often in nature.

**Try it:** Calculate the RNA_SEQ excess. Say why “significant” and “positive observed mean” are different statements.

## 5. What do the 17 significant comparisons establish?

**Where we are:** Results §2.3, Table 1 and Figure 1, PDF pp5–7 and p39; Methods §§5.3–5.4, pp26–27.

**What the passage is doing:** Reports the primary result and checks dependence and simulation error.

**In ordinary language:** The study combines 22 scorers with three ways to measure distance. That creates 66 comparisons. Benjamini–Hochberg, or BH, adjusts for testing this family. Seventeen comparisons pass its q < 0.05 rule. They involve eight scorers. Seventeen comparisons do not mean 17 independent discoveries.

The comparisons share variants, model inputs and distance rules. A second correction, Benjamini–Yekutieli, also retains all 17 primary comparisons. It allows broader forms of dependence. More permutations and an exact null calculation preserve the same count. These checks support the reported count under this test.

They do not turn the test into a clinical benchmark. The label being shuffled is the selected substitution at a position. The outcome is distance from a background profile. No patient outcome is being predicted here.

A permutation p-value is not zero just because no simulated shuffle exceeds the observation. The study uses a correction that includes the observed arrangement. Its initial finite simulation has a smallest possible p-value of 0.0001.

**Evidence status:** A multiple-testing result within a defined family, supported by numerical sensitivity checks.

**Do not accidentally conclude:** A q-value measures the probability that an individual variant is benign. Nor does one corrected family account automatically for every later exploratory analysis in the paper.

**Try it:** Write a one-sentence result containing “17 of 66” that mentions the sample and the test, without using “diagnostic accuracy.”

## 6. Why consequence class matters

**Where we are:** Results §2.4 and Table 2, PDF pp8–11; Figure 2, p40; Methods §5.5, p27; Additional file 3, Table S9, p3.

**What the passage is doing:** Tests whether some preference reflects an easier distinction between kinds of changes.

**In ordinary language:** At some positions, the selected change creates a stop signal while its rivals do not. Choosing the most disruptive consequence could then succeed without separating harmful from harmless changes within one consequence class.

AVI_SCORE places the selected change first at 30 of 34 nonsense or start-loss sites. It does so at 32 of 86 missense sites. Those fractions are about 88% and 37%. A simple consequence rule reaches an expected fraction of 0.489 over all 120 sites. AVI_SCORE reaches 0.517. The simple rule was a later, exploratory comparison.

A consequence-matched null compares only changes in the selected change's class. Twenty-six positions have no rival in that class and drop out. Among the 94 remaining positions, only two comparisons pass BH correction. Both use SPLICE_JUNCTIONS. They do not pass the stronger BY correction. AVI_SCORE does not remain significant in this comparison.

This suggests that consequence differences explain much of the initial pattern. It does not prove that consequence class explains every result. The later replication makes that distinction especially important.

**Evidence status:** Post hoc explanatory analysis of the initial cohort. It narrows interpretation rather than establishing a new clinical ranking system.

**Do not accidentally conclude:** The simple rule is a validated clinical substitute for a model. It uses broad consequence classes and was evaluated in this selected sample. Matching also changes which positions can be analyzed.

**Try it:** Why does a position with only one nonsense substitution offer no within-nonsense rival? What changes when those positions are removed?

## 7. Why “not significant” is not “no information”

**Where we are:** Results §2.5 and Table 2, PDF pp9–11; Limitations §3.3, pp20–23; Additional file 3, Table S10, p4.

**What the passage is doing:** Keeps the initial missense result within its actual uncertainty and tests null assumptions.

**In ordinary language:** At the 86 initial missense sites, no comparison passes correction under the uniform null. That result is inconclusive. It is not proof that the predictions contain no useful information. The sample is small, uneven across genes and sensitive to the reference rule. MMUT supplies 49 of these 86 sites.

Real mutation types have different frequencies. A transition swaps within a base family. A transversion crosses between families. At each position, there is one possible transition and two possible transversions. To set a transition-to-transversion ratio of two, the study gives the transition weight four and each transversion weight one. The transition then receives four of six total units of weight.

Another null adds weight for transitions at CpG contexts. These are assumptions about relative selection probabilities. They are not measured mutation rates at each study position. Results can change when the null changes. That dependence belongs in the result, rather than being hidden by one threshold.

**Evidence status:** An inconclusive initial stratum result with sensitivity analyses. Some later weighted-null analyses are exploratory; the paper distinguishes them from planned readings.

**Do not accidentally conclude:** Switching nulls proves a model works, or that a uniform null is always conservative. The relevant question is whether a null answers the intended question and whether its assumptions are credible.

**Try it:** Check the transition share under weights 4, 1 and 1. Explain why weights 2, 1 and 1 would give a different transition-to-transversion ratio.

## 8. What did the replications settle—and leave open?

**Where we are:** Results §§2.6–2.7, PDF pp12–15; Methods §5.6, pp28–29; Additional file 5, Tables S19–S21, pp6–8.

**What the passage is doing:** Adds held-out positions and further genes, while honoring planned decision rules.

**In ordinary language:** The first replication expands the same four genes. Its primary held-out set contains 384 positions outside the original cohort. Its plan was written before fetching scores, with local file dates. That is different from an external public registration. Its missense reading remains inconclusive under the planned rule.

The next replication adds seven genes. It has 2,144 positions, including 1,713 with exactly one P/LP allele. Its plan was publicly deposited before their scores were fetched. At 1,238 nonsense or start-loss positions, AVI_SCORE places the selected change first at 1,095. At 246 missense positions, it does so at 94. The contrast persists, but it does not settle every proposed explanation.

One planned criterion asks whether consequence matching leaves no more than a quarter as many significant comparisons. There are 37 under the uniform null and ten after matching. A quarter of 37 is 9.25. Ten exceeds that bound. The criterion therefore fails. The paper does not claim its planned “mainly consequence class” conclusion was confirmed.

The further-gene missense result is positive under the planned mutation-aware null: q = 0.0013. Its first-place fraction is 0.382. This is evidence of within-class preference in these genes. It remains distinct from clinical accuracy.

**Evidence status:** Pre-specified replication results, with a locally dated first plan and a publicly timestamped second plan. Later explanatory analyses are labeled post hoc in the source.

**Do not accidentally conclude:** A mostly favorable pattern passes a failed stopping rule. Also, significance of a mean does not guarantee strong ranking. Outside chromosome 13, the reported missense first-place fraction is 0.341, near one third, while the mean test remains significant.

**Try it:** Apply the planned count criterion to ten and 37. Write the conclusion you would report even if you favored the consequence explanation beforehand.

## 9. Why the intronic results are not contradictory

**Where we are:** Results §§2.6–2.7, PDF pp12–15; Methods §5.6, pp28–29; Additional file 5, Table S20, p6.

**What the passage is doing:** Separates canonical splice positions from other intronic positions.

**In ordinary language:** Introns are parts of a gene removed when RNA is processed. Canonical splice positions form the usual boundary signals for that process. At those positions, all three possible changes can disrupt the same type of signal. A test asking which one was selected can then be hard, even if every change affects splicing.

In the seven further genes, none of 63 comparisons is significant at the 157 canonical splice positions. At 63 other intronic positions, the splice scorers place the selected change first at 46 or 47 positions. Those are different sets and different questions.

The other-intronic result is not unique to splice scorers. Twenty-one of its 29 significant comparisons use scorers without a splicing mechanism. This limits a direct biological interpretation. A signal associated with intronic variants does not isolate one causal mechanism.

**Evidence status:** Distinct planned stratum readings in the expanded panel. They describe preference among substitutions, not measured RNA changes in patients.

**Do not accidentally conclude:** A null canonical-splice result means AlphaGenome cannot detect splice disruption. The audit asks which alternative is singled out, not whether each alternative disrupts splicing compared with the reference base.

**Try it:** Explain how all three changes could disrupt a boundary signal while the same-site test shows no preference for the ClinVar change.

## 10. What do the training and label audits rule out?

**Where we are:** Results §§2.9–2.10, PDF pp15–17; Limitations §3.3, pp19–23; Methods §5.8, pp29–30; Additional file 5, Tables S13–S14, pp1–2.

**What the passage is doing:** Checks specific exposure routes and bounds what clinical labels can establish.

**In ordinary language:** A model may have seen information about its test data while being built. This paper checks one such route: the frequency labels used to train AVI. It places 118 of the 120 selected variants outside that declared pool. Two remain uncertain. None is confirmed inside it.

That does not clear every route. AVI uses other inputs, such as AlphaMissense. The base model has seen reference DNA. ClinVar labels can use the type of DNA change and other model scores as evidence. If a model and its test labels share that evidence, their agreement may be partly circular.

The two alternatives are also not a known benign set. Of 240 unselected changes, 196 have no ClinVar record. The checked snapshot calls 23 P/LP. It calls six likely benign. All six are synonymous: they leave the protein building block unchanged. An unselected change is therefore not always known to be harmless.

A stronger next test would measure all changes at the same positions in a functional assay. That is an experiment measuring a biological effect. Its labels should not depend on the model inputs being tested. Such a test could address a question that these clinical labels cannot settle.

**Evidence status:** A targeted overlap audit and a limitation of the available labels. Absence from one declared label pool is narrower than absence from all training or clinical evidence.

**Do not accidentally conclude:** The study proves no leakage, or that its alternatives form a benign control set. It does neither. Nor does a prediction's agreement with ClinVar show that it independently measured disease biology.

**Try it:** Name two information routes that remain open after the declared AVI frequency-label pool is checked.

## 11. Why engineering and geometry checks matter

**Where we are:** Results §§2.1 and 2.3, PDF pp4–7; Limitations §3.3, pp22–23; Methods §§5.2–5.4, pp25–27; Additional file 2, Tables S2–S6, pp2–5.

**What the passage is doing:** Checks data joins, reduction rules and distance choices without turning reproducibility into biological validation.

**In ordinary language:** Model outputs must be joined to the correct variant. The study checks explicit identifiers and verifies stable repeated outputs. These checks prevent an ordering error from masquerading as a scientific result. They do not tell us whether the predictions are biologically correct.

Some scorers return many target rows. The main analysis keeps the row with the largest absolute value for each feature. It also rescales profiles at each site before two of the distance calculations. Mean pooling and a shared scorer-wide scale change some results. The headline count is therefore conditional on the stated processing choices.

Euclidean distance measures separation in the usual flat space. Cosine distance compares directions. Poincaré distance uses a curved-space formula as a sensitivity check. Its curvature and scale were fixed. They were not learned as a biological hierarchy.

One scorer's background centroid uses only two variants. Its null result is not a strong negative finding. More generally, “same code ran” and “all inputs were informative” are different checks.

**Evidence status:** Reproducibility and sensitivity evidence. These checks bound processing errors and choices, not the clinical validity of the model.

**Do not accidentally conclude:** A successful audit of joins validates the biological interpretation. Also avoid treating the three geometries as three independent replications. They reuse the same underlying predictions.

**Try it:** Identify one engineering failure and one scientific limitation that a perfect identifier audit would leave unresolved.

## 12. How to use the browser explorer responsibly

**Where we are:** This repository's README and explorer; source Results §§2.3–2.5, PDF pp5–11, and Availability of data and materials, p32.

**What the passage is doing:** Connects the paper's question to an exercise while keeping the demo's scope visible.

**In ordinary language:** The browser explorer uses the initial four-gene cohort. It does not embed the seven-gene replication. It loads cached distances, not new AlphaGenome predictions. Changing a filter changes the selected group of positions. Changing a null changes the reference selection rule.

Start with all 120 coding sites. Record the chosen scorer, geometry, sample size and null. Then choose the missense-only preset. Describe how the result changes, keeping the smaller and uneven gene sample in view. Finally, compare the mean statistic with the first-place fraction. Do not substitute one for the other.

Browser shuffles use their own random stream. Small Monte Carlo differences from archived results are expected. For exact scientific reproduction, use the deposited study code and cached results. The explorer is a teaching and inspection tool, not a new registered analysis.

The guide and explorer do not provide a treatment recommendation or a clinical variant classification. The underlying AlphaGenome-derived outputs keep their separate terms of use. A teaching explanation does not override those terms.

**Evidence status:** A scope statement and learning exercise. Re-running an exploratory filter does not create independent validation.

**Do not accidentally conclude:** A filtered finding confirms the same claim in new data. The observations are reused, and extra searches create additional opportunities for favorable results.

**Try it:** Give a short report with five parts: selection, null, mean-statistic result, first-place fraction, and one limitation. Compare your wording with the answer notes below.

## Pocket glossary

| Term | Meaning in this guide |
|---|---|
| Allele or substitution | One possible base at a position, or the change from the reference base. |
| SNV | A variant changing a single DNA base. |
| Coding / intronic | In protein-coding sequence / in an intron removed during RNA processing. |
| Consequence | A predicted class of sequence effect, such as missense or stop gain; not a clinical verdict. |
| P/LP | Pathogenic or likely pathogenic in the chosen ClinVar snapshot. |
| Scorer / profile | A model output method / the values it returns for a variant. |
| Centroid | An average reference profile. |
| T | Distance of one profile from its scorer's background centroid. |
| Null model | A specified reference rule used to judge the observed statistic. |
| Permutation | Reassigning labels under that rule while keeping outputs fixed. |
| p-value | How extreme the observation is under that specified null; not the chance a variant is benign. |
| BH / BY q-value | A multiple-testing adjustment within a stated family. |
| Most-extreme fraction | Share of sites where the selected change is farthest from the centroid. |
| Held-out / pre-specified | Outside the initial cohort / defined before the relevant scores or analysis. |
| Post hoc | Added after earlier results were available; useful for exploration, weaker as confirmation. |
| Training exposure / circularity | Reused training information / shared evidence in predictions and evaluation labels. |

## Self-check answers

Try each prompt before reading its answer notes.

1. **Comparison units.** Each reference base has three non-reference alternatives. The initial positions belong to four gene regions. Intronic variation is absent from the initial coding sample. Three substitutions do not create three independent loci.
2. **Coordinate shortcut.** A gene-region rule can exploit how selected and background samples were drawn. It cannot choose among alternatives sharing a position. That requires information that varies among those alternatives.
3. **Size versus rank.** Yes. A selected change can move closer to the largest alternative without overtaking it. Its contribution to the mean improves while first place remains unchanged. No clinical probability follows.
4. **Negative reference.** −0.036 − (−0.126) = +0.090. The test compares the observation with the null distribution, not with zero. A significant excess can coexist with a negative mean difference.
5. **Supported primary wording.** “In the initial 120-site cohort, 17 of 66 scorer–geometry comparisons exceeded their uniform same-site null after BH correction.” The sentence does not claim clinical sensitivity, specificity or accuracy.
6. **Matching.** A unique nonsense alternative has no same-class competitor. Matching removes that position from this contrast. The comparison is now conditional on the retained set; it is not a direct before-and-after result on identical sites.
7. **Weights.** Weights 4, 1 and 1 give transition probability 4/6 = 2/3 and a transition-to-all-transversions ratio of 4/2 = 2. Weights 2, 1 and 1 give probability 1/2 and ratio 1.
8. **Decision rule.** Ten is greater than 37/4 = 9.25. The planned count criterion fails. A fair report says the contrast replicates but that criterion does not confirm the planned “mainly consequence class” reading.
9. **Splicing.** The test compares three alternate substitutions with each other. If all disrupt a canonical signal similarly, it may not favor the ClinVar alternative. That does not test each change against an intact reference signal.
10. **Remaining routes.** Other model inputs and clinical-label evidence remain relevant. AlphaMissense exposure, reference-sequence training, and clinical use of consequence or computational evidence are examples. The targeted pool audit does not rule them all out.
11. **Two kinds of check.** Wrong variant-to-output joins are an engineering failure. A correctly joined but biased clinical sample is a scientific limitation. A small or unrepresentative background centroid is another limitation.
12. **Exercise report.** State the actual filter and null before the result. Report mean and first-place summaries separately, with sample size. Note reuse of the initial cohort and the explorer's restricted scope. Do not call an exploratory rerun independent confirmation.

## Transfer exercise: design a better next test

Suppose you are asked to evaluate a model on variants in genes absent from this guide. You have functional assay measurements for every possible substitution at several positions.

Before seeing model scores, write down the target question, eligible positions, assay quality rules, comparison unit, null, multiplicity family and stopping rule. Explain whether your labels are independent of computational predictions. Check training exposure using the model's actual documentation. Decide how genes, rather than just variants, enter the uncertainty calculation.

A good answer does not promise a perfect benchmark. It explains which weaknesses this design addresses and which remain. Functional assays may measure only one mechanism. Their tissues and conditions may not match disease. New genes improve coverage but do not establish genome-wide clinical utility. This is a proposed exercise, not an experiment reported by the paper.

## Source and use boundary

The exact source is preprint v3. The paper, its five supplemental PDFs, frozen code/data deposit and pre-specified panel plan are the scientific sources. [The provenance entry](README.md) gives exact identifiers and hashes. These source locators do not track later preprint versions.

Nothing here adds clinical validation, a new analysis result or a new license for underlying model outputs.
