/* =========================================================================
   Content data for the interactive beta-lactam infusion strategy protocol
   (continuous vs extended infusion of beta-lactam antibiotics in adults
   with sepsis/septic shock in the ICU).

   SOURCE: an unpublished, blinded narrative-review manuscript ("Intermittent
   versus Continuous Infusion: The Role of Infusion Rate of Beta-Lactam
   Antibiotics in Sepsis and Septic Shock — A Narrative Review with
   GRADE-Informed Appraisal"), condensed by Gemini from the manuscript's own
   text, tables and 77-entry bibliography, with Figure 1 supplied separately
   as an image. Every clinical claim below is paraphrased from the
   condensation, not copied from it; label/sub fields are transcribed
   byte-for-byte from Figure 1 and were independently checked against the
   supplied figure image box-by-box with zero corrections needed — the
   first tool in this atlas where that check found nothing to fix.

   REFERENCE VERIFICATION — explicit, author-granted exception (the eighth
   in this atlas, same policy as epinephrine-revisited-protocol,
   ketamine-indications-protocol, haloperidol-adjunct-protocol,
   geriatric-pain-protocol, metoclopramide-ondansetron-protocol,
   spontaneous-pneumothorax-protocol and button-battery-protocol): the
   author instructed that the 77-entry bibliography not be independently
   re-verified against primary sources for this build. Every reference's
   `kind` field says so plainly. See METHODOLOGY.md for the full precedent
   record.

   FIGURE-VS-MANUSCRIPT-TEXT DISCREPANCIES: this source document's own
   Section 4.4.2 identifies eight internal inconsistencies between Figure 1
   and the manuscript's prose/tables/references — a first for this atlas:
   every previous tool's discrepancies had to be found by Claude reading
   the figure directly, whereas here the condensation had already done that
   analysis itself. The genuine ones (cohort/arm mismatches on the two
   percentages, the merged-lumen logic, the meropenem duration conflict,
   the missing "four times the MIC" source, the unsupported weight-dosing
   claim, and Node 9's total absence from the prose) are flagged as
   cautions on the relevant nodes below, and the full registry is kept in
   METHODOLOGY.md. The figure's own box text is transcribed as authored in
   every case — discrepancies are surfaced as clinical caveats, never used
   to silently "correct" what the authors drew.
   ========================================================================= */

// Date this tool's content and citations were last built/checked
// together (see assets/app.js's References summary, and the hub
// README's "Content search index"-adjacent conventions doc).
const VERIFIED = "2026-11-13";

const REFERENCES = [
  { id: 1, kind: "As cited in the manuscript; not independently re-verified.", text: "Singer M, Deutschman CS, Seymour CW, et al. (2016) The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3). JAMA 315(8): 801-810.", url: "https://doi.org/10.1001/jama.2016.0287" },
  { id: 2, kind: "As cited in the manuscript; not independently re-verified.", text: "Rudd KE, Johnson SC, Agesa KM, et al. (2020) Global, regional, and national sepsis incidence and mortality, 1990-2017: analysis for the Global Burden of Disease Study. Lancet 395(10219): 200-211.", url: "https://doi.org/10.1016/S0140-6736(19)32989-7" },
  { id: 3, kind: "As cited in the manuscript; not independently re-verified.", text: "Evans L, Rhodes A, Alhazzani W, et al. (2021) Surviving Sepsis Campaign: international guidelines for management of sepsis and septic shock 2021. Intensive Care Med 47(11): 1181-1247.", url: "https://doi.org/10.1007/s00134-021-06506-y" },
  { id: 4, kind: "As cited in the manuscript; not independently re-verified.", text: "Kumar A, Roberts D, Wood KE, et al. (2006) Duration of hypotension before initiation of effective antimicrobial therapy is the critical determinant of survival in human septic shock. Crit Care Med 34(6): 1589-1596.", url: "https://doi.org/10.1097/01.CCM.0000217961.75225.E9" },
  { id: 5, kind: "As cited in the manuscript; not independently re-verified.", text: "Ferrer R, Martin-Loeches I, Phillips G, et al. (2014) Empiric antibiotic treatment reduces mortality in severe sepsis and septic shock from the first hour: results from a guideline-based performance improvement program. Crit Care Med 42(8): 1749-1755.", url: "https://doi.org/10.1097/CCM.0000000000000330" },
  { id: 6, kind: "As cited in the manuscript; not independently re-verified.", text: "Seymour CW, Gesten F, Prescott HC, et al. (2017) Time to treatment and mortality during mandated emergency care for sepsis. N Engl J Med 376(23): 2235-2244.", url: "https://doi.org/10.1056/NEJMoa1703058" },
  { id: 7, kind: "As cited in the manuscript; not independently re-verified.", text: "Craig WA (1998) Pharmacokinetic/pharmacodynamic parameters: rationale for antibacterial dosing of mice and men. Clin Infect Dis 26(1): 1-10.", url: "https://doi.org/10.1086/516284" },
  { id: 8, kind: "As cited in the manuscript; not independently re-verified.", text: "Roberts JA, Paratz J, Paratz E, et al. (2007) Continuous infusion of beta-lactam antibiotics in severe infections: a review of its role. Int J Antimicrob Agents 30(1): 11-18.", url: "https://doi.org/10.1016/j.ijantimicag.2007.02.002" },
  { id: 9, kind: "As cited in the manuscript; not independently re-verified.", text: "Taccone FS, Laterre PF, Dugernier T, et al. (2010) Insufficient beta-lactam concentrations in the early phase of severe sepsis and septic shock. Crit Care 14(4): R126.", url: "https://doi.org/10.1186/cc9091" },
  { id: 10, kind: "As cited in the manuscript; not independently re-verified.", text: "Roberts JA, Paul SK, Akova M, et al. (2014) DALI: defining antibiotic levels in intensive care unit patients: are current beta-lactam antibiotic doses sufficient for critically ill patients? Clin Infect Dis 58(8): 1072-1083.", url: "https://doi.org/10.1093/cid/ciu027" },
  { id: 11, kind: "As cited in the manuscript; not independently re-verified.", text: "Roberts JA, Abdul-Aziz MH, Lipman J, et al. (2014) Individualised antibiotic dosing for patients who are critically ill: challenges and potential solutions. Lancet Infect Dis 14(6): 498-509.", url: "https://doi.org/10.1016/S1473-3099(14)70036-2" },
  { id: 12, kind: "As cited in the manuscript; not independently re-verified.", text: "Dulhunty JM, Roberts JA, Davis JS, et al. (2013) Continuous infusion of beta-lactam antibiotics in severe sepsis: a multicenter double-blind, randomized controlled trial. Clin Infect Dis 56(2): 236-244.", url: "https://doi.org/10.1093/cid/cis856" },
  { id: 13, kind: "As cited in the manuscript; not independently re-verified.", text: "Dulhunty JM, Roberts JA, Davis JS, et al. (2015) A multicenter randomized trial of continuous versus intermittent beta-lactam infusion in severe sepsis. Am J Respir Crit Care Med 192(11): 1298-1305.", url: "https://doi.org/10.1164/rccm.201505-0857OC" },
  { id: 14, kind: "As cited in the manuscript; not independently re-verified.", text: "Abdul-Aziz MH, Sulaiman H, Mat-Nor MB, et al. (2016) Beta-Lactam Infusion in Severe Sepsis (BLISS): a prospective, two-centre, open-labelled randomised controlled trial of continuous versus intermittent beta-lactam infusion in critically ill patients with severe sepsis. Intensive Care Med 42(10): 1535-1545.", url: "https://doi.org/10.1007/s00134-015-4188-0" },
  { id: 15, kind: "As cited in the manuscript; not independently re-verified.", text: "Monti G, Bradic N, Marzaroli M, et al. (2023) Continuous vs intermittent meropenem administration in critically ill patients with sepsis: the MERCY randomized clinical trial. JAMA 330(2): 141-151.", url: "https://doi.org/10.1001/jama.2023.10598" },
  { id: 16, kind: "As cited in the manuscript; not independently re-verified.", text: "Dulhunty JM, Brett SJ, De Waele JJ, et al. (2024) Continuous vs intermittent beta-lactam antibiotic infusions in critically ill patients with sepsis: the BLING III randomized clinical trial. JAMA 332(8): 629-637.", url: "https://doi.org/10.1001/jama.2024.9779" },
  { id: 17, kind: "As cited in the manuscript; not independently re-verified.", text: "Abdul-Aziz MH, Hammond NE, Brett SJ, et al. (2024) Prolonged vs intermittent infusions of beta-lactam antibiotics in adults with sepsis or septic shock: a systematic review and meta-analysis. JAMA 332(8): 638-648.", url: "https://doi.org/10.1001/jama.2024.9803" },
  { id: 18, kind: "As cited in the manuscript; not independently re-verified.", text: "Hong LT, Downes KJ, FakhriRavari A, et al. (2023) International consensus recommendations for the use of prolonged-infusion beta-lactam antibiotics. Pharmacotherapy 43(8): 740-777.", url: "https://doi.org/10.1002/phar.2842" },
  { id: 19, kind: "As cited in the manuscript; not independently re-verified.", text: "Page MJ, McKenzie JE, Bossuyt PM, et al. (2021) The PRISMA 2020 statement: an updated guideline for reporting systematic reviews. BMJ 372: n71.", url: "https://doi.org/10.1136/bmj.n71" },
  { id: 20, kind: "As cited in the manuscript; not independently re-verified.", text: "Sterne JAC, Savovic J, Page MJ, et al. (2019) RoB 2: a revised tool for assessing risk of bias in randomised trials. BMJ 366: l4898.", url: "https://doi.org/10.1136/bmj.l4898" },
  { id: 21, kind: "As cited in the manuscript; not independently re-verified.", text: "Shea BJ, Reeves BC, Wells G, et al. (2017) AMSTAR 2: a critical appraisal tool for systematic reviews that include randomised or non-randomised studies of healthcare interventions, or both. BMJ 358: j4008.", url: "https://doi.org/10.1136/bmj.j4008" },
  { id: 22, kind: "As cited in the manuscript; not independently re-verified.", text: "Guyatt GH, Oxman AD, Vist G, et al. (2011) GRADE guidelines: 1. Introduction - GRADE evidence profiles and summary of findings tables. J Clin Epidemiol 64(4): 383-394.", url: "https://doi.org/10.1016/j.jclinepi.2010.04.026" },
  { id: 23, kind: "As cited in the manuscript; not independently re-verified.", text: "Higgins JPT, Thompson SG, Deeks JJ, Altman DG (2003) Measuring inconsistency in meta-analyses. BMJ 327(7414): 557-560.", url: "https://doi.org/10.1136/bmj.327.7414.557" },
  { id: 24, kind: "As cited in the manuscript; not independently re-verified.", text: "Chytra I, Stepan M, Benes J, et al. (2012) Clinical and microbiological efficacy of continuous versus intermittent application of meropenem in critically ill patients: a randomized open-label controlled trial. Crit Care 16(3): R113.", url: "https://doi.org/10.1186/cc11405" },
  { id: 25, kind: "As cited in the manuscript; not independently re-verified.", text: "Zhao HY, Gu J, Lyu J, et al. (2017) Pharmacokinetic and pharmacodynamic efficacies of continuous versus intermittent administration of meropenem in patients with severe sepsis and septic shock: a prospective randomized pilot study. Chin Med J (Engl) 130(10): 1139-1145.", url: "https://doi.org/10.4103/0366-6999.205859" },
  { id: 26, kind: "As cited in the manuscript; not independently re-verified.", text: "Aardema H, Bult W, van Hateren K, et al. (2020) Continuous versus intermittent infusion of cefotaxime in critically ill patients: a randomized controlled trial comparing plasma concentrations. J Antimicrob Chemother 75(2): 441-448.", url: "https://doi.org/10.1093/jac/dkz463" },
  { id: 27, kind: "As cited in the manuscript; not independently re-verified.", text: "Hagel S, Bach F, Brenner T, et al. (2022) Effect of therapeutic drug monitoring-based dose optimization of piperacillin/tazobactam on sepsis-related organ dysfunction in patients with sepsis: a randomized controlled trial. Intensive Care Med 48(3): 311-321.", url: "https://doi.org/10.1007/s00134-021-06609-6" },
  { id: 28, kind: "As cited in the manuscript; not independently re-verified.", text: "Khan AB, Abdul-Aziz MH, Hindle L, et al. (2025) Continuous versus intermittent bolus dosing of beta-lactam antibiotics in a South African multi-disciplinary intensive care unit: a randomized controlled trial. J Infect 90(5): 106487.", url: "https://doi.org/10.1016/j.jinf.2025.106487" },
  { id: 29, kind: "As cited in the manuscript; not independently re-verified.", text: "Best-Lane J, Al-Beidh F, Barton G, et al. (2026) Continuous versus intermittent beta-lactam antibiotic infusions in critically ill patients: the UK cohort of the BLING III trial. J Intensive Care Soc 27(1): 30-40.", url: "https://doi.org/10.1177/17511437251396871" },
  { id: 30, kind: "As cited in the manuscript; not independently re-verified.", text: "Billot L, Lipman J, Brett SJ, et al. (2021) Statistical analysis plan for the BLING III study: a phase 3 multicentre randomised controlled trial of continuous versus intermittent beta-lactam antibiotic infusion in critically ill patients with sepsis. Crit Care Resusc 23(3): 273-284.", url: "https://doi.org/10.51893/2021.3.OA4" },
  { id: 31, kind: "As cited in the manuscript; not independently re-verified.", text: "Roberts JA, Abdul-Aziz MH, Davis JS, et al. (2016) Continuous versus intermittent beta-lactam infusion in severe sepsis: a meta-analysis of individual patient data from randomized trials. Am J Respir Crit Care Med 194(6): 681-691.", url: "https://doi.org/10.1164/rccm.201601-0024OC" },
  { id: 32, kind: "As cited in the manuscript; not independently re-verified.", text: "Vardakas KZ, Voulgaris GL, Maliaros A, et al. (2018) Prolonged versus short-term intravenous infusion of antipseudomonal beta-lactams for patients with sepsis: a systematic review and meta-analysis of randomised trials. Lancet Infect Dis 18(1): 108-120.", url: "https://doi.org/10.1016/S1473-3099(17)30615-1" },
  { id: 33, kind: "As cited in the manuscript; not independently re-verified.", text: "Falagas ME, Tansarli GS, Ikawa K, Vardakas KZ (2013) Clinical outcomes with extended or continuous versus short-term intravenous infusion of carbapenems and piperacillin/tazobactam: a systematic review and meta-analysis. Clin Infect Dis 56(2): 272-282.", url: "https://doi.org/10.1093/cid/cis857" },
  { id: 34, kind: "As cited in the manuscript; not independently re-verified.", text: "Teo J, Liew Y, Lee W, Kwa AL (2014) Prolonged infusion versus intermittent boluses of beta-lactam antibiotics for treatment of acute infections: a meta-analysis. Int J Antimicrob Agents 43(5): 403-411.", url: "https://doi.org/10.1016/j.ijantimicag.2014.01.027" },
  { id: 35, kind: "As cited in the manuscript; not independently re-verified.", text: "Yu Z, Pang X, Wu X, et al. (2018) Clinical outcomes of prolonged infusion (extended infusion or continuous infusion) versus intermittent bolus of meropenem in severe infection: a meta-analysis. PLoS One 13(7): e0201667.", url: "https://doi.org/10.1371/journal.pone.0201667" },
  { id: 36, kind: "As cited in the manuscript; not independently re-verified.", text: "Rhodes NJ, Liu J, O'Donnell JN, et al. (2018) Prolonged infusion piperacillin-tazobactam decreases mortality and improves outcomes in severely ill patients: results of a systematic review and meta-analysis. Crit Care Med 46(2): 236-243.", url: "https://doi.org/10.1097/CCM.0000000000002836" },
  { id: 37, kind: "As cited in the manuscript; not independently re-verified.", text: "Chen P, Chen F, Lei J, et al. (2020) Clinical outcomes of continuous vs intermittent meropenem infusion for the treatment of sepsis: a systematic review and meta-analysis. Adv Clin Exp Med 29(8): 993-1000.", url: "https://doi.org/10.17219/acem/121934" },
  { id: 38, kind: "As cited in the manuscript; not independently re-verified.", text: "Li X, Long Y, Wu G, et al. (2023) Prolonged vs intermittent intravenous infusion of beta-lactam antibiotics for patients with sepsis: a systematic review of randomized clinical trials with meta-analysis and trial sequential analysis. Ann Intensive Care 13(1): 121.", url: "https://doi.org/10.1186/s13613-023-01222-w" },
  { id: 39, kind: "As cited in the manuscript; not independently re-verified.", text: "Zhao Y, Zang B, Wang Q (2024) Prolonged versus intermittent beta-lactam infusion in sepsis: a systematic review and meta-analysis of randomized controlled trials. Ann Intensive Care 14(1): 30.", url: "https://doi.org/10.1186/s13613-024-01263-9" },
  { id: 40, kind: "As cited in the manuscript; not independently re-verified.", text: "Tejada DA, Garcia HC, Tomas-Alvarado E, et al. (2025) Continuous versus intermittent infusion of beta-lactams in patients with sepsis and septic shock: a systematic review and meta-analysis. BMC Infect Dis 25(1): 1138.", url: "https://doi.org/10.1186/s12879-025-11504-2" },
  { id: 41, kind: "As cited in the manuscript; not independently re-verified.", text: "Shiu J, Wang E, Tejani AM, Wasdell M (2013) Continuous versus intermittent infusions of antibiotics for the treatment of severe acute infections. Cochrane Database Syst Rev (3): CD008481.", url: "https://doi.org/10.1002/14651858.CD008481.pub2" },
  { id: 42, kind: "As cited in the manuscript; not independently re-verified.", text: "Fawaz S, Barton S, Nabhani-Gebara S (2020) Comparing clinical outcomes of piperacillin-tazobactam administration and dosage strategies in critically ill adult patients: a systematic review and meta-analysis. BMC Infect Dis 20(1): 430.", url: "https://doi.org/10.1186/s12879-020-05149-6" },
  { id: 43, kind: "As cited in the manuscript; not independently re-verified.", text: "Ishikawa K, Shibutani K, Kawai F, et al. (2023) Effectiveness of extended or continuous vs. bolus infusion of broad-spectrum beta-lactam antibiotics for febrile neutropenia: a systematic review and meta-analysis. Antibiotics 12(6): 1024.", url: "https://doi.org/10.3390/antibiotics12061024" },
  { id: 44, kind: "As cited in the manuscript; not independently re-verified.", text: "Lokhandwala A, Patel P, Isaak AK, et al. (2023) Comparison of the effectiveness of prolonged infusion and intermittent infusion of meropenem in patients with sepsis: a meta-analysis. Cureus 15(10): e46990.", url: "https://doi.org/10.7759/cureus.46990" },
  { id: 45, kind: "As cited in the manuscript; not independently re-verified.", text: "Goncalves-Pereira J, Povoa P (2011) Antibiotics in critically ill patients: a systematic review of the pharmacokinetics of beta-lactams. Crit Care 15(5): R206.", url: "https://doi.org/10.1186/cc10441" },
  { id: 46, kind: "As cited in the manuscript; not independently re-verified.", text: "Udy AA, Roberts JA, Boots RJ, et al. (2010) Augmented renal clearance: implications for antibacterial dosing in the critically ill. Clin Pharmacokinet 49(1): 1-16.", url: "https://doi.org/10.2165/11318140-000000000-00000" },
  { id: 47, kind: "As cited in the manuscript; not independently re-verified.", text: "Udy AA, Varghese JM, Altukroni M, et al. (2012) Subtherapeutic initial beta-lactam concentrations in select critically ill patients: association between augmented renal clearance and low trough drug concentrations. Chest 142(1): 30-39.", url: "https://doi.org/10.1378/chest.11-1671" },
  { id: 48, kind: "As cited in the manuscript; not independently re-verified.", text: "Carrie C, Legeron R, Petit L, et al. (2018) Higher than standard dosing regimen are needed to achieve optimal antibiotic exposure in critically ill patients with augmented renal clearance receiving piperacillin-tazobactam administered by continuous infusion. J Crit Care 48: 66-71.", url: "https://doi.org/10.1016/j.jcrc.2018.08.026" },
  { id: 49, kind: "As cited in the manuscript; not independently re-verified.", text: "Roberts JA, Kirkpatrick CMJ, Roberts MS, et al. (2010) First-dose and steady-state population pharmacokinetics and pharmacodynamics of piperacillin by continuous or intermittent dosing in critically ill patients with sepsis. Int J Antimicrob Agents 35(2): 156-163.", url: "https://doi.org/10.1016/j.ijantimicag.2009.10.008" },
  { id: 50, kind: "As cited in the manuscript; not independently re-verified.", text: "De Waele JJ, Lipman J, Akova M, et al. (2014) Risk factors for target non-attainment during empirical treatment with beta-lactam antibiotics in critically ill patients. Intensive Care Med 40(9): 1340-1351.", url: "https://doi.org/10.1007/s00134-014-3403-8" },
  { id: 51, kind: "As cited in the manuscript; not independently re-verified.", text: "Abdulla A, Dijkstra A, Hunfeld NGM, et al. (2020) Failure of target attainment of beta-lactam antibiotics in critically ill patients and associated risk factors: a two-center prospective study (EXPAT). Crit Care 24(1): 558.", url: "https://doi.org/10.1186/s13054-020-03272-z" },
  { id: 52, kind: "As cited in the manuscript; not independently re-verified.", text: "Carlier M, Carrette S, Stove V, et al. (2014) Does consistent piperacillin dosing result in consistent therapeutic concentrations in critically ill patients? A longitudinal study over an entire antibiotic course. Int J Antimicrob Agents 43(5): 470-473.", url: "https://doi.org/10.1016/j.ijantimicag.2014.01.028" },
  { id: 53, kind: "As cited in the manuscript; not independently re-verified.", text: "Ehmann L, Zoller M, Minichmayr IK, et al. (2017) Role of renal function in risk assessment of target non-attainment after standard dosing of meropenem in critically ill patients: a prospective observational study. Crit Care 21(1): 263.", url: "https://doi.org/10.1186/s13054-017-1829-4" },
  { id: 54, kind: "As cited in the manuscript; not independently re-verified.", text: "Heil EL, Nicolau DP, Farkas A, et al. (2018) Pharmacodynamic target attainment for cefepime, meropenem, and piperacillin-tazobactam using a pharmacokinetic/pharmacodynamic-based dosing calculator in critically ill patients. Antimicrob Agents Chemother 62(9): e01008-18.", url: "https://doi.org/10.1128/AAC.01008-18" },
  { id: 55, kind: "As cited in the manuscript; not independently re-verified.", text: "Sumi CD, Heffernan AJ, Naicker S, et al. (2022) Pharmacodynamic evaluation of intermittent versus extended and continuous infusions of piperacillin/tazobactam in a hollow-fibre infection model against Escherichia coli clinical isolates. J Antimicrob Chemother 77(11): 3026-3034.", url: "https://doi.org/10.1093/jac/dkac273" },
  { id: 56, kind: "As cited in the manuscript; not independently re-verified.", text: "Boselli E, Breilh D, Rimmele T, et al. (2008) Alveolar concentrations of piperacillin/tazobactam administered in continuous infusion to patients with ventilator-associated pneumonia. Crit Care Med 36(5): 1500-1506.", url: "https://doi.org/10.1097/CCM.0b013e318170ba21" },
  { id: 57, kind: "As cited in the manuscript; not independently re-verified.", text: "Nicolau DP (2008) Pharmacokinetic and pharmacodynamic properties of meropenem. Clin Infect Dis 47(Suppl 1): S32-S40.", url: "https://doi.org/10.1086/590064" },
  { id: 58, kind: "As cited in the manuscript; not independently re-verified.", text: "Lodise TP Jr, Lomaestro B, Drusano GL (2007) Piperacillin-tazobactam for Pseudomonas aeruginosa infection: clinical implications of an extended-infusion dosing strategy. Clin Infect Dis 44(3): 357-363.", url: "https://doi.org/10.1086/510590" },
  { id: 59, kind: "As cited in the manuscript; not independently re-verified.", text: "Wiersinga WJ, van Agtmael MA (2024) Resolving the dilemma on continuous vs intermittent beta-lactam antibiotics in sepsis. JAMA 332(8): 623-625.", url: "https://doi.org/10.1001/jama.2024.10168" },
  { id: 60, kind: "As cited in the manuscript; not independently re-verified.", text: "Hyun DG, Seo J, Lee SY, et al. (2022) Continuous piperacillin-tazobactam infusion improves clinical outcomes in critically ill patients with sepsis: a retrospective, single-centre study. Antibiotics 11(11): 1508.", url: "https://doi.org/10.3390/antibiotics11111508" },
  { id: 61, kind: "As cited in the manuscript; not independently re-verified.", text: "Chen CH, Chen YM, Chang YJ, et al. (2019) Continuous versus intermittent infusions of antibiotics for the treatment of infectious diseases: meta-analysis and systematic review. Medicine (Baltimore) 98(10): e14632.", url: "https://doi.org/10.1097/MD.0000000000014632" },
  { id: 62, kind: "As cited in the manuscript; not independently re-verified.", text: "Imani S, Buscher H, Marriott D, et al. (2017) Too much of a good thing: a retrospective study of beta-lactam concentration-toxicity relationships. J Antimicrob Chemother 72(10): 2891-2897.", url: "https://doi.org/10.1093/jac/dkx209" },
  { id: 63, kind: "As cited in the manuscript; not independently re-verified.", text: "Payne LE, Gagnon DJ, Riker RR, et al. (2017) Cefepime-induced neurotoxicity: a systematic review. Crit Care 21(1): 276.", url: "https://doi.org/10.1186/s13054-017-1856-1" },
  { id: 64, kind: "As cited in the manuscript; not independently re-verified.", text: "Boschung-Pasquier L, Atkinson A, Kastner LK, et al. (2020) Cefepime neurotoxicity: thresholds and risk factors. A retrospective cohort study. Clin Microbiol Infect 26(3): 333-339.", url: "https://doi.org/10.1016/j.cmi.2019.06.028" },
  { id: 65, kind: "As cited in the manuscript; not independently re-verified.", text: "Quinton MC, Bodeau S, Kontar L, et al. (2017) Neurotoxic concentration of piperacillin during continuous infusion in critically ill patients. Antimicrob Agents Chemother 61(9): e00654-17.", url: "https://doi.org/10.1128/AAC.00654-17" },
  { id: 66, kind: "As cited in the manuscript; not independently re-verified.", text: "Bricheux A, Lenggenhager L, Hughes S, et al. (2019) Therapeutic drug monitoring of imipenem and the incidence of toxicity and failure in hospitalized patients: a retrospective cohort study. Clin Microbiol Infect 25(3): 383.e1-383.e4.", url: "https://doi.org/10.1016/j.cmi.2018.11.020" },
  { id: 67, kind: "As cited in the manuscript; not independently re-verified.", text: "Qian ET, Casey JD, Wright A, et al. (2023) Cefepime vs piperacillin-tazobactam in adults hospitalized with acute infection: the ACORN randomized clinical trial. JAMA 330(16): 1557-1567.", url: "https://doi.org/10.1001/jama.2023.20583" },
  { id: 68, kind: "As cited in the manuscript; not independently re-verified.", text: "Passon SG, Schmidt AR, Wittmann M, et al. (2023) Evaluation of continuous ampicillin/sulbactam infusion in critically ill patients. Life Sci 320: 121567.", url: "https://doi.org/10.1016/j.lfs.2023.121567" },
  { id: 69, kind: "As cited in the manuscript; not independently re-verified.", text: "Wong G, Briscoe S, McWhinney B, et al. (2018) Therapeutic drug monitoring of beta-lactam antibiotics in the critically ill: direct measurement of unbound drug concentrations to achieve appropriate drug exposures. J Antimicrob Chemother 73(11): 3087-3094.", url: "https://doi.org/10.1093/jac/dky314" },
  { id: 70, kind: "As cited in the manuscript; not independently re-verified.", text: "Jamieson C, Ozolina L, Seaton RA, et al. (2022) Assessment of the stability of citrate-buffered piperacillin/tazobactam for continuous infusion when stored in two commercially available elastomeric devices for outpatient parenteral antimicrobial chemotherapy. Eur J Hosp Pharm 29(4): 212-216.", url: "https://doi.org/10.1136/ejhpharm-2020-002340" },
  { id: 71, kind: "As cited in the manuscript; not independently re-verified.", text: "Barton G, Rickard CM, Roberts JA (2025) Continuous infusion of beta-lactam antibiotics in critically ill patients: implementation considerations. Intensive Care Med 51(1): 230-231.", url: "https://doi.org/10.1007/s00134-024-07650-x" },
  { id: 72, kind: "As cited in the manuscript; not independently re-verified.", text: "Hagiya H (2024) Detailed regimens for the prolonged beta-lactam infusion therapy. J Infect Chemother 30(12): 1324-1326.", url: "https://doi.org/10.1016/j.jiac.2024.07.003" },
  { id: 73, kind: "As cited in the manuscript; not independently re-verified.", text: "Abdul-Aziz MH, Alffenaar JWC, Bassetti M, et al. (2020) Antimicrobial therapeutic drug monitoring in critically ill adult patients: a position paper. Intensive Care Med 46(6): 1127-1153.", url: "https://doi.org/10.1007/s00134-020-06050-1" },
  { id: 74, kind: "As cited in the manuscript; not independently re-verified.", text: "Guilhaumou R, Benaboud S, Bennis Y, et al. (2019) Optimization of the treatment with beta-lactam antibiotics in critically ill patients: guidelines from the French Society of Pharmacology and Therapeutics and the French Society of Anaesthesia and Intensive Care Medicine. Crit Care 23(1): 104.", url: "https://doi.org/10.1186/s13054-019-2378-9" },
  { id: 75, kind: "As cited in the manuscript; not independently re-verified.", text: "Williams P, Cotta MO, Abdul-Aziz MH, et al. (2023) In silico evaluation of a beta-lactam dosing guideline among adults with serious infections. Pharmacotherapy 43(11): 1121-1130.", url: "https://doi.org/10.1002/phar.2753" },
  { id: 76, kind: "As cited in the manuscript; not independently re-verified.", text: "Tangden T, Ramos Martin V, Felton TW, et al. (2017) The role of infection models and PK/PD modelling for optimising care of critically ill patients with severe infections. Intensive Care Med 43(7): 1021-1032.", url: "https://doi.org/10.1007/s00134-017-4780-6" },
  { id: 77, kind: "As cited in the manuscript; not independently re-verified.", text: "Hong LT, Downes KJ, FakhriRavari A, et al. (2023) International consensus recommendations for the use of prolonged-infusion beta-lactam antibiotics: an executive summary. Pharmacotherapy 43(8): 736-739.", url: "https://doi.org/10.1002/phar.2844" }
];

/* Each node mirrors one box or decision diamond in Figure 1.
   type: "process" | "decision" | "branch" | "terminal"
   refs: array of REFERENCES ids used in meaning/rationale/dose/cautions
   needsAuthor: true marks a number stated in the algorithm that the
   literature search below could not independently source — flagged
   for the author team to confirm or cite, rather than invented. */
const NODES = [
  {
    id: "entry",
    type: "terminal",
    label: "Adult with sepsis or septic shock in the intensive care unit",
    sub: "Intravenous beta-lactam indicated on clinical or microbiological grounds",
    meaning:
      "This identifies the target population for everything that follows: a critically ill adult (18 years or older) in an intensive care or high-dependency unit, meeting Sepsis-3 criteria for sepsis or septic shock, in whom an intravenous broad-spectrum beta-lactam is already indicated on clinical or microbiological grounds. The algorithm assumes a beta-lactam has already been chosen and that source control is being pursued in parallel — it is a delivery-strategy algorithm, not an antibiotic-selection algorithm.",
    rationale:
      "Critical illness distorts beta-lactam pharmacokinetics — expanded volume of distribution, hypoalbuminaemia, augmented renal clearance (ARC), or accumulation in acute kidney injury (AKI) — to a degree that standard intermittent bolus regimens frequently miss pharmacodynamic fT>MIC targets. In the multinational DALI study, 16% of ICU patients failed even the permissive 50% fT>MIC threshold, and failure to reach 100% fT>MIC was associated with worse clinical outcome. Ward-based or non-critically ill populations are deliberately excluded from this algorithm: those cohorts have lower baseline mortality and less pharmacokinetic distortion, and syntheses in that setting have not demonstrated a mortality benefit from prolonged infusion.",
    cautions: [
      "This algorithm does not apply to patients receiving renal replacement therapy (RRT) or extracorporeal membrane oxygenation (ECMO) — both were excluded from most of the underlying trials (BLING III explicitly excluded RRT), randomised evidence is absent in those groups, and individualised dosing with therapeutic drug monitoring is preferred instead.",
      "The randomised outcome evidence behind this pathway is almost entirely confined to piperacillin-tazobactam and meropenem. For other beta-lactams, the same sequence rests on pharmacokinetic reasoning alone, not on trial data — see Table 4 in the References for agent-by-agent evidence strength.",
      "Neonates, children, patients with obesity or at the extremes of body weight are under-represented in the underlying trials despite substantially altered volume of distribution in those groups; this is flagged in the source manuscript as persistent uncertainty, not resolved by it."
    ],
    refs: [1, 3, 9, 10, 11, 43]
  },
  {
    id: "loading",
    type: "process",
    tone: "key",
    label: "GIVE A STANDARD LOADING DOSE BY SHORT INFUSION IMMEDIATELY",
    sub: "Prolonged infusion delays the approach to steady state. Without a loading dose the patient spends several hours below target at the moment exposure matters most. The first dose is never delayed and never slowed.\nAbsence of a loading dose was a recorded protocol deviation in 3.4% of BLING III",
    meaning:
      "Before any continuous or extended maintenance infusion begins, a full standard loading dose is given promptly by short intravenous infusion — never delayed and never slowed to accommodate the maintenance strategy chosen downstream.",
    rationale:
      "Each hour of delay in effective antimicrobial therapy after hypotension onset is associated with increased mortality in septic shock. Starting a continuous infusion without an upfront loading bolus causes a slow approach to steady state, leaving the patient under-exposed for several hours during early sepsis — precisely when volume of distribution is maximally expanded and exposure matters most. This is why the 2021 Surviving Sepsis Campaign guidelines and the 2023 multi-society consensus both treat the initial bolus as mandatory regardless of which maintenance strategy follows.",
    cautions: [
      "The figure's own '3.4% of BLING III' line is a narrower statistic than it reads: the manuscript text specifies 3.4% of the continuous arm of the UK national cohort of BLING III (n = 2900, reference 29), not 3.4% of the full 7202-patient BLING III trial (reference 16). Both numbers describe real protocol-deviation data from the same research programme, but they are not interchangeable denominators.",
      "No specific milligram or gram loading dose per agent is stated in the source manuscript — this is a sequencing rule (bolus first, always), not a dosing table. Use local or published agent-specific loading doses."
    ],
    refs: [3, 4, 5, 6, 9, 11, 16, 18, 29]
  },
  {
    id: "stability",
    type: "process",
    label: "Verify in-use physicochemical stability",
    sub: "For the specific agent, diluent, final concentration and ambient ward temperature.\nStability is agent-specific and must not be extrapolated across the class.",
    meaning:
      "Before choosing between 24-hour continuous infusion and a shorter extended infusion, check locally verified physicochemical stability data for the exact agent, diluent (e.g. a citrate-buffered diluent), final infusate concentration, and ambient ward temperature actually in use.",
    rationale:
      "Physicochemical stability in solution is an operational property of a specific formulation, not a property of the beta-lactam class as a whole. An agent that is stable for 24 hours in one diluent at one temperature can degrade appreciably in another combination, at elevated ambient temperature, or at a different concentration — potentially under-dosing the patient or forcing frequent bag changes that add nursing and pharmacy workload. The source manuscript explicitly instructs institutions to adopt published stability schedules rather than improvising this step.",
    cautions: [
      "No single numeric temperature or concentration cutoff is given in the source — stability statements in Table 4 are described as indicative and must be verified locally for the specific agent, diluent, concentration and temperature actually used; they are not transferable from one agent to another."
    ],
    refs: [70, 72]
  },
  {
    id: "d1",
    type: "decision",
    label: "Does verified stability support administration of the maintenance dose over a full 24 hours?",
    meaning:
      "This branches the maintenance strategy on exactly one question: does the locally verified stability data for this agent, diluent and temperature support running the infusate over a full 24 hours? If yes, continuous infusion is selected; if no or unknown, extended infusion is the default.",
    rationale:
      "Continuous and extended infusion are neither pharmacodynamically nor operationally equivalent. Only continuous infusion sustains steady-state concentrations with no sub-MIC interval and allows a steady-state sample to be drawn at any time — but running an agent continuously for 24 hours without verified 24-hour stability risks meaningful drug degradation inside the infusion bag. Defaulting to extended infusion whenever stability is unproven avoids that risk.",
    cautions: [
      "The source manuscript's own Section 4.4.2 flags an internal ambiguity here: meropenem is placed under 'extended infusion' in this algorithm because it is infused over 6-8 hours with frequent bag changes rather than a single 24-hour bag, yet in the pivotal MERCY and BLING III trials meropenem was in fact randomised to the continuous-infusion arm, maintained through periodic bag replacement. A regimen infused over 8 hours and replaced every 8 hours around the clock runs continuously for 24 hours in substance even while this diamond routes it to the 'extended' branch by name."
    ],
    refs: [3, 15, 16, 18, 70, 72]
  },
  {
    id: "continuous",
    type: "branch",
    label: "CONTINUOUS INFUSION",
    sub: "Deliver the remaining daily dose over 24 hours by infusion pump.\nPiperacillin-tazobactam is suitable, particularly in a citrate-buffered diluent.\nAllows a steady-state sample to be drawn at any time",
    meaning:
      "The remaining equivalent daily maintenance dose — after the loading bolus above — is delivered continuously over 24 hours by infusion pump, needing only one bag change per 24 hours once 24-hour stability is verified. Piperacillin-tazobactam, particularly in a citrate-buffered diluent, is the agent with the strongest stability and outcome evidence for this route.",
    rationale:
      "Continuous infusion eliminates sub-MIC trough intervals, lowers high peak concentrations that add no bactericidal value for a time-dependent killer, and reliably approaches 100% fT>MIC even as pathogen MIC nears the susceptibility breakpoint. It underpins the majority of the pooled trial evidence, including BLING III, where continuous infusion increased 14-day clinical cure by 5.7 percentage points and lowered the covariate-adjusted odds ratio for 90-day mortality to 0.89 — consistent with the largest pooled meta-analysis behind this pathway, which rated 90-day mortality as high-certainty evidence under GRADE and estimated a number needed to treat (NNT) of roughly 26. Because plasma concentration is constant at steady state, a single therapeutic drug monitoring sample can also be drawn at any time, rather than requiring a precisely timed pre-dose trough.",
    cautions: [
      "Augmented renal clearance can push the dose required to maintain target exposure above the licensed maximum even on a continuous regimen — this is a reason to re-check levels, not a reason to avoid continuous infusion.",
      "'By infusion pump' is this figure's own phrasing; the source manuscript's prose and tables discuss elastomeric devices only in the context of outpatient parenteral therapy, not ICU administration hardware specifically.",
      "A theoretical concern with sustained antibiotic exposure is selection pressure favouring a multidrug-resistant organism (MDRO), but the two largest trials behind this pathway found no significant difference in new MDRO colonisation between continuous and intermittent infusion — reassuring, though surveillance in both was limited to 14 days at most."
    ],
    refs: [3, 7, 8, 10, 16, 17, 46, 48, 49, 55, 56, 70, 73, 74]
  },
  {
    id: "extended",
    type: "branch",
    label: "EXTENDED INFUSION",
    sub: "Give each dose over 3 to 4 hours.\nMeropenem degrades appreciably at in-use temperature: infuse over 6 to 8 hours with more frequent bag changes.\nThe default choice when 24-hour stability is unproven",
    meaning:
      "When 24-hour stability is not verified or not supported by the agent's own degradation profile, each intermittent maintenance dose is instead infused over 3 to 4 hours — or, specifically for meropenem, over 6 to 8 hours with correspondingly more frequent bag changes, because meropenem degrades appreciably at in-use temperature.",
    rationale:
      "Prolonging each dose to 3-4 hours substantially raises fT>MIC compared with a 30-60 minute bolus, and extended-infusion piperacillin-tazobactam was associated with lower 14-day mortality in more severely ill Pseudomonas aeruginosa infections. This approach also accommodates an agent's limited room-temperature stability and frees the intravenous line between scheduled doses, unlike a continuous regimen.",
    cautions: [
      "The source manuscript is internally inconsistent about meropenem's own extended-infusion duration: Section 4.7's summary of the whole pathway says '3 to 4 hours' for both piperacillin-tazobactam and meropenem when stability precludes continuous infusion, while this box, Table 4 and Section 4.3 all specify 6 to 8 hours for meropenem specifically — and Section 4.3's own prose refers to bag changes 'every six hours' in the same paragraph. All three numbers come from the same source; none is presented as superseding the others.",
      "Newer licensed agents sit awkwardly under this box's blanket '3 to 4 hours' instruction: ceftazidime-avibactam's licensed regimen is already a 2-hour infusion (extension to 3-4 hours is still under investigation), and cefiderocol's licensed regimen is already 3 hours — neither is a case of choosing a duration from scratch the way piperacillin-tazobactam or meropenem are."
    ],
    refs: [3, 17, 18, 32, 33, 34, 35, 36, 55, 57, 58, 70, 72]
  },
  {
    id: "secure",
    type: "process",
    label: "Secure the delivery and govern it",
    sub: "Dedicated intravenous lumen · documented Y-site compatibility check\nWritten standard operating procedure for interruptions, transfers and procedures\nPre-prepared bags where pharmacy capacity allows · audit of interruption rates\n36.8% of the continuous arm of BLING III had at least one protocol deviation",
    meaning:
      "Whichever maintenance strategy was chosen, prolonged beta-lactam delivery is treated as an institutional governance process, not just a prescription: a dedicated intravenous lumen, a documented Y-site compatibility check against concurrent infusions, a written standard operating procedure covering interruptions, transfers and bedside procedures, pharmacy-prepared bags where capacity allows, and routine audit of interruption rates.",
    rationale:
      "Even inside a well-resourced randomised trial with detailed protocols — the UK cohort of BLING III — administration errors and protocol deviations occurred in over a third of patients, and interruptions exceeding one hour occurred in roughly a fifth of the continuous-infusion group. Deviations at that frequency cause delivered therapy to drift toward an effectively extended rather than truly continuous pattern, attenuating the clinical benefit toward the null. Building governance into the pathway — not just writing the prescription — is this box's whole purpose.",
    cautions: [
      "The figure attributes '36.8% ... protocol deviation' to 'the continuous arm of BLING III', but the manuscript's own Section 3.9 and Table 1 attribute that same 36.8% to overall participants in the smaller UK national cohort of BLING III (n = 2900, reference 29) — not the continuous arm specifically, and not the full 7202-patient trial (reference 16). Table 2 of the same manuscript then reports 36.8% for the continuous column and a separate 35.8% for the intermittent column within that UK cohort. The three figures are all real data from the same research programme but are not simple restatements of one another.",
      "Both the continuous-infusion and extended-infusion branches above flow into this box, including its 'dedicated intravenous lumen' instruction — but the manuscript's own prose repeatedly describes occupying a dedicated lumen throughout therapy as a constraint specific to continuous infusion, stating elsewhere that extended infusion frees the line between doses. Apply the dedicated-lumen requirement according to which strategy was actually chosen, not uniformly to both."
    ],
    refs: [29, 71]
  },
  {
    id: "d2",
    type: "decision",
    label: "Is therapeutic drug monitoring of beta-lactams available?",
    meaning:
      "This determines the dose-optimisation pathway: if institutional assay capability for beta-lactam therapeutic drug monitoring is available, concentrations are measured and the dose individualised; if not, a published protocolised dosing schedule adjusted for renal function and weight is used instead.",
    rationale:
      "Prolonged infusion improves the likelihood of hitting pharmacodynamic targets but does not guarantee it, because interindividual variability in volume of distribution and renal clearance makes fixed, population-based dosing unreliable at the level of the individual patient. At the same time, in the one included randomised trial of TDM-guided dosing (TARGET), piperacillin-tazobactam dose optimisation improved target attainment without reducing sepsis-related organ dysfunction — showing that pharmacokinetic optimisation on its own is necessary but not sufficient.",
    refs: [27, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 69, 73, 74]
  },
  {
    id: "measure",
    type: "branch",
    label: "MEASURE AND ADJUST",
    sub: "Sample the unbound steady-state or trough concentration and target 100% fT > MIC, commonly at four times the MIC of the isolate.\nPreferred where hypoalbuminaemia is present",
    meaning:
      "A steady-state sample (at any time, for continuous infusion) or a timed pre-dose trough sample (for extended/intermittent regimens) is drawn, measuring unbound (free) beta-lactam concentration directly — particularly important in hypoalbuminaemic patients and for highly protein-bound agents — and the dose is adjusted to keep free concentration above the MIC for the entire dosing interval, commonly targeting four times the isolate's MIC, while avoiding toxic troughs.",
    rationale:
      "Failure to attain 100% fT>MIC was independently associated with worse clinical outcome in the multinational DALI study. Augmented renal clearance frequently causes subtherapeutic levels even on continuous regimens, while acute kidney injury can cause neurotoxic accumulation — notably with cefepime or high-concentration piperacillin or meropenem. Measuring unbound rather than total drug concentration avoids misjudging both exposure and toxicity risk in hypoalbuminaemic critically ill patients.",
    cautions: [
      "The '100% fT > MIC, commonly at four times the MIC' target in this box is not actually stated together in the manuscript's own dedicated therapeutic-drug-monitoring section — the 'four times the MIC' figure appears only once elsewhere, as an uncited simulation detail for ceftazidime-avibactam.",
      "A causative pathogen with a known MIC is identified in well under half of patients in the largest trials behind this pathway (as low as 19% in one trial) — the manuscript does not state what MIC surrogate to use when targeting '4× the MIC of the isolate' in a patient with no identified isolate.",
      "Toxicity trough thresholds reported elsewhere in the source for reference, not printed in this box: roughly 50%-risk neurotoxicity troughs of 361.4 mg/L for piperacillin, 64.2 mg/L for meropenem, 125.1 mg/L for flucloxacillin, and above 20 mg/L for cefepime; roughly 50%-risk nephrotoxicity troughs of 452.65 mg/L for piperacillin and 44.45 mg/L for meropenem."
    ],
    refs: [10, 27, 46, 47, 48, 62, 63, 64, 65, 69, 73, 74]
  },
  {
    id: "protocolised",
    type: "branch",
    label: "USE A PROTOCOLISED REGIMEN",
    sub: "Dose by renal function and weight using a published schedule for the specific agent.\nDo not improvise.\nGuideline-concordant doses still leave many off target",
    meaning:
      "Where beta-lactam therapeutic drug monitoring is unavailable, maintenance doses are prescribed strictly according to a published prolonged-infusion schedule for the specific agent, adjusted for renal function and weight, without ad-hoc institutional or bedside improvisation.",
    rationale:
      "Improvised regimens risk physicochemical degradation or administration error, while renal function — from acute kidney injury to augmented renal clearance — strongly drives beta-lactam clearance and target non-attainment. Even so, multiple prospective pharmacokinetic studies and in-silico evaluations of published dosing guidelines show that standard, guideline-concordant fixed regimens still leave a substantial proportion of critically ill patients outside their target exposure range — this box narrows the uncertainty TDM would otherwise resolve, it does not eliminate it.",
    cautions: [
      "The manuscript provides no numerical creatinine-clearance, eGFR, or weight-based dosing brackets anywhere in its text or tables — 'dose by renal function and weight' defers entirely to external published schedules, which must be sourced separately.",
      "Weight-based dosing specifically is not discussed in the manuscript prose at all; the same source instead classifies patients with obesity or at the extremes of body weight as an under-studied population with persistent, unresolved uncertainty, which sits awkwardly alongside this box's instruction to dose by weight using a published schedule."
    ],
    refs: [10, 11, 18, 46, 47, 48, 50, 51, 52, 53, 54, 72, 74, 75]
  },
  {
    id: "reassess",
    type: "terminal",
    tone: "key",
    label: "Reassess at 48 to 72 hours",
    sub: "Review culture and MIC, de-escalate or stop, and reconsider the dose and the infusion strategy",
    meaning:
      "After 48 to 72 hours of therapy under either pathway above, culture and susceptibility (MIC) results are reviewed, beta-lactam therapy is de-escalated or stopped if appropriate, and both the total dose and the choice of infusion strategy are reconsidered in light of what is now known about the pathogen.",
    rationale:
      "Once an isolate and its MIC are known, a highly susceptible, low-MIC organism attains target fT>MIC readily even with intermittent dosing, whereas an isolate with an MIC near the breakpoint is where prolonged infusion matters most — so the earlier choice of strategy is worth revisiting once that information exists, not treated as fixed for the whole course.",
    cautions: [
      "This box, and the 48-to-72-hour reassessment window specifically, has no counterpart anywhere in the manuscript's prose, tables, or even in Section 4.7's own text walk-through of this exact figure. It reflects standard external sepsis-stewardship practice (the kind endorsed by general sepsis guidelines) rather than a finding, recommendation or citation from this review's own literature search.",
      "A causative pathogen is identified in well under half of patients in the largest trials underlying this pathway, so 'review culture and MIC' will frequently have nothing agent-specific to review by 48-72 hours — de-escalation decisions in that situation rest on clinical response and local epidemiology rather than a culture result."
    ],
    refs: [3, 13, 49, 52, 55]
  }
];

const GLOSSARY = [
  { match: "fT>MIC", full: "fraction of the dosing interval during which free drug concentration exceeds the MIC", def: "The single pharmacodynamic parameter that governs killing by a time-dependent antibiotic like a beta-lactam. Unlike a concentration-dependent drug, a higher peak adds little extra bactericidal value — what matters is how much of the dosing interval the free (unbound) drug concentration spends above the pathogen's MIC. Infusion duration, for a fixed total daily dose, is what reshapes the concentration-time curve to raise this fraction." },
  { match: "MIC", full: "minimum inhibitory concentration", def: "The lowest concentration of an antibiotic that visibly inhibits growth of a specific bacterial isolate in the laboratory. Prolonged infusion strategies matter most when a pathogen's MIC sits close to the susceptibility breakpoint; when the organism is highly susceptible (a low MIC), intermittent and prolonged dosing tend to converge on the same result." },
  { match: "TDM", full: "therapeutic drug monitoring", def: "Measuring a patient's own drug concentration directly, rather than relying on a population-average dose, and adjusting the regimen to that individual result. For beta-lactams this typically means a free (unbound) concentration sample, because critical illness alters protein binding unpredictably." },
  { match: "ARC", full: "augmented renal clearance", def: "A state of supranormal kidney filtration seen in a subset of critically ill patients — often younger, with preserved cardiac output — that can clear a renally eliminated drug faster than standard dosing assumes, driving concentrations below target even on a continuous infusion." },
  { match: "AKI", full: "acute kidney injury", def: "A sudden decline in kidney function. For beta-lactams dosed on the assumption of normal clearance, AKI works in the opposite direction from augmented renal clearance — it can cause drug to accumulate toward neurotoxic concentrations, particularly with cefepime or high-concentration piperacillin or meropenem." },
  { match: "RRT", full: "renal replacement therapy", def: "Dialysis or haemofiltration substituting for kidney function. Patients receiving RRT were excluded from most of the randomised trials behind this pathway (BLING III explicitly excluded them), so this algorithm does not apply to them — individualised dosing with therapeutic drug monitoring is preferred instead." },
  { match: "ECMO", full: "extracorporeal membrane oxygenation", def: "Mechanical circulatory and/or respiratory support that can sequester lipophilic drugs in the circuit and substantially alter their apparent volume of distribution. Like RRT, ECMO patients are excluded from this algorithm's evidence base, and individualised dosing with TDM is preferred." },
  { match: "GRADE", full: "Grading of Recommendations Assessment, Development and Evaluation", def: "A structured framework for rating how much confidence to place in a body of evidence for a specific outcome, based on domains such as risk of bias, inconsistency, indirectness, imprecision, and publication bias. The source manuscript applies GRADE narratively to externally pooled meta-analytic estimates, rather than performing new pooling of its own." },
  { match: "MDRO", full: "multidrug-resistant organism", def: "A bacterial pathogen resistant to multiple classes of antibiotics. One theoretical concern with prolonged beta-lactam exposure is selection pressure favouring resistant subpopulations; the trial evidence reviewed here found no significant difference in new MDRO colonisation between prolonged and intermittent infusion." },
  { match: "NNT", full: "number needed to treat", def: "The number of patients who would need to receive the intervention, compared with the control, for one additional patient to benefit. For 90-day mortality with prolonged beta-lactam infusion, the largest pooled meta-analysis behind this pathway estimated an NNT of roughly 26 — consistent with a real but modest absolute effect." }
];

const AGENTS = [
  "Piperacillin-tazobactam",
  "Meropenem",
  "Cefepime",
  "Ceftazidime-avibactam",
  "Ceftazidime",
  "Cefiderocol",
  "Ceftolozane-tazobactam",
  "Ticarcillin-clavulanate",
  "Ampicillin-sulbactam",
  "Amoxicillin-clavulanate",
  "Imipenem-cilastatin",
  "Cefotaxime",
  "Flucloxacillin"
];
