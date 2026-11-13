# Beta-Lactam Infusion Strategy in Sepsis and Septic Shock

An interactive, referenced walkthrough of the decision algorithm for selecting and
delivering a beta-lactam infusion strategy — continuous versus extended infusion — in
adult patients with sepsis or septic shock in the intensive care unit: the initial loading
dose, the physicochemical-stability check that decides between a 24-hour continuous
infusion and a 3-to-8-hour extended infusion, the governance steps that secure that
delivery, the therapeutic-drug-monitoring fork, and the 48-to-72-hour reassessment that
closes the loop. Every box in the diagram can be selected to reveal, in one place: what the
step means, why the algorithm calls for it, and the sources behind it.

**Live site:** https://satbuhan.github.io/beta-lactam-infusion-protocol/

**Authors:** Dr. Özgür Karcıoğlu & Dr. Satuk Buğra Han Bozatlı

This tool is part of a growing atlas of tools built the same way:

- [Clinical Algorithm Atlas](https://satbuhan.github.io/clinical-algorithm-atlas/) — the hub page for all of them
- [Acute aortic dissection — initial medical management](https://github.com/satbuhan/aortic-dissection-protocol) ([live site](https://satbuhan.github.io/aortic-dissection-protocol/))
- [Butyrophenone selection — acute agitation & hyperactive delirium](https://github.com/satbuhan/agitation-delirium-protocol) ([live site](https://satbuhan.github.io/agitation-delirium-protocol/))
- [Influenza antiviral selection — baloxavir marboxil vs oseltamivir](https://github.com/satbuhan/influenza-antiviral-protocol) ([live site](https://satbuhan.github.io/influenza-antiviral-protocol/))
- [Dexketoprofen vs ibuprofen — selecting an NSAID for acute pain](https://github.com/satbuhan/nsaid-pain-protocol) ([live site](https://satbuhan.github.io/nsaid-pain-protocol/))
- [Anticoagulant reversal in gastrointestinal haemorrhage](https://github.com/satbuhan/anticoagulant-reversal-protocol) ([live site](https://satbuhan.github.io/anticoagulant-reversal-protocol/))
- [The adult with obesity in emergency and critical care](https://github.com/satbuhan/obesity-critical-care-protocol) ([live site](https://satbuhan.github.io/obesity-critical-care-protocol/))
- [Dapagliflozin / SGLT2 inhibitor — overdose and acute illness management](https://github.com/satbuhan/dapagliflozin-overdose-protocol) ([live site](https://satbuhan.github.io/dapagliflozin-overdose-protocol/))
- [Lidocaine vs prilocaine — local anaesthesia for laceration repair](https://github.com/satbuhan/lidocaine-prilocaine-protocol) ([live site](https://satbuhan.github.io/lidocaine-prilocaine-protocol/))
- [Reperfusion therapy in acute pulmonary thromboembolism](https://github.com/satbuhan/pte-thrombolysis-protocol) ([live site](https://satbuhan.github.io/pte-thrombolysis-protocol/))
- [LMWH selection & renal dosing in NSTE-ACS](https://github.com/satbuhan/lmwh-nste-acs-protocol) ([live site](https://satbuhan.github.io/lmwh-nste-acs-protocol/))
- [Ketamine in head injury — safety & complication management](https://github.com/satbuhan/ketamine-head-injury-protocol) ([live site](https://satbuhan.github.io/ketamine-head-injury-protocol/))
- [Midazolam versus clonazepam — seizures, acute agitation & anxiety](https://github.com/satbuhan/midazolam-clonazepam-protocol) ([live site](https://satbuhan.github.io/midazolam-clonazepam-protocol/))
- [Vasopressor (aminergic) agent selection in shock states](https://github.com/satbuhan/vasopressor-shock-protocol) ([live site](https://satbuhan.github.io/vasopressor-shock-protocol/))
- [Whole-body CT in traumatic circulatory shock](https://github.com/satbuhan/wbct-trauma-protocol) ([live site](https://satbuhan.github.io/wbct-trauma-protocol/))
- [Epinephrine/Adrenaline revisited — contemporary decision-making algorithm](https://github.com/satbuhan/epinephrine-revisited-protocol) ([live site](https://satbuhan.github.io/epinephrine-revisited-protocol/))
- [Ketamine in emergency and critical care — indication-based decision algorithm](https://github.com/satbuhan/ketamine-indications-protocol) ([live site](https://satbuhan.github.io/ketamine-indications-protocol/))
- [Tenecteplase versus alteplase — fibrinolysis in STEMI](https://github.com/satbuhan/tenecteplase-alteplase-stemi-protocol) ([live site](https://satbuhan.github.io/tenecteplase-alteplase-stemi-protocol/))
- [Blood gas-guided assessment of the chemical warfare agent casualty](https://github.com/satbuhan/cwa-blood-gas-protocol) ([live site](https://satbuhan.github.io/cwa-blood-gas-protocol/))
- [Calcium channel blocker toxicity — phenotype-guided management](https://github.com/satbuhan/ccb-toxicity-protocol) ([live site](https://satbuhan.github.io/ccb-toxicity-protocol/))
- [Choosing an adjunct to haloperidol in hyperactive delirium with severe agitation](https://github.com/satbuhan/haloperidol-adjunct-protocol) ([live site](https://satbuhan.github.io/haloperidol-adjunct-protocol/))
- [Selection of a neuromuscular blocking agent for rapid sequence induction and intubation](https://github.com/satbuhan/succinylcholine-rocuronium-protocol) ([live site](https://satbuhan.github.io/succinylcholine-rocuronium-protocol/))
- [Pharmacological pain management in elderly patients](https://github.com/satbuhan/geriatric-pain-protocol) ([live site](https://satbuhan.github.io/geriatric-pain-protocol/))
- [Metoclopramide versus ondansetron — antiemetic selection by clinical setting](https://github.com/satbuhan/metoclopramide-ondansetron-protocol) ([live site](https://satbuhan.github.io/metoclopramide-ondansetron-protocol/))
- [Needle aspiration versus tube thoracostomy — symptom-led management of spontaneous pneumothorax](https://github.com/satbuhan/spontaneous-pneumothorax-protocol) ([live site](https://satbuhan.github.io/spontaneous-pneumothorax-protocol/))
- [Suspected or witnessed button battery exposure in a child](https://github.com/satbuhan/button-battery-protocol) ([live site](https://satbuhan.github.io/button-battery-protocol/))

## Why this exists

A flowchart alone tells a reader *what* to do at each step but not *why* — and the
continuous-versus-extended-infusion question has been argued over for two decades, with
the pooled trial evidence showing a real but modest mortality benefit that no single trial
reaches on its own. This page keeps the original algorithm exactly as authored, and attaches
the clinical reasoning, the evidence certainty behind each step, and the literature to each
box without cluttering the diagram itself.

The algorithm this page presents is Figure 1 ("Clinical decision algorithm for the selection
and delivery of a beta-lactam infusion strategy in adults with sepsis or septic shock") of an
unpublished, blinded manuscript — a structured narrative review with GRADE-informed
appraisal (MEDLINE/Embase/CENTRAL/Scopus/Web of Science, January 2005 to May 2026; 2417
records screened to 30 included reports and a 77-entry bibliography) — from a Gemini
condensation of the manuscript text, tables and references, with Figure 1 supplied
separately as an image.

## Status

This is a working version, built to be tested on both desktop and mobile.

- **Source workflow:** the manuscript's own narrative text, tables and 77-entry
  bibliography were condensed as usual by an external AI (Gemini) using this project's
  structured condensation prompt, with Figure 1 supplied as a separate image. Every one of
  this tool's 9 box/diamond labels and sub-texts was independently cross-checked against the
  figure image, box by box — the first build in this atlas where that check found **zero**
  corrections needed. The condensation itself was also unusually thorough: all 77 references
  already carried their manuscript-stated DOIs (no extraction script needed), and the
  document's own Section 4.4.2 had already identified and catalogued eight genuine
  figure-versus-manuscript-text discrepancies before this tool was built from it — in every
  prior tool in this atlas, discrepancies of that kind had to be found by reading the source
  figure directly.
- **Reference verification — explicit, author-granted exception (the eighth in this
  atlas):** asked directly whether to extend the same no-independent-re-verification policy
  used for `epinephrine-revisited-protocol`, `ketamine-indications-protocol`,
  `haloperidol-adjunct-protocol`, `geriatric-pain-protocol`,
  `metoclopramide-ondansetron-protocol`, `spontaneous-pneumothorax-protocol` and
  `button-battery-protocol` to this tool's 77-entry bibliography, the author confirmed the
  same policy again, noting that the full reference list may be verified later by a separate
  manual process once the project has progressed further. The reference list was **not**
  independently re-verified against primary sources; every entry's `kind` field says so
  plainly. See `assets/content.js`'s header comment and `METHODOLOGY.md` for the full
  precedent record.
- **Figure-versus-manuscript-text discrepancies, carried through as clinical cautions
  rather than silently resolved:** the source manuscript is internally inconsistent in eight
  places — most notably two key percentages (the loading-dose and protocol-deviation rates)
  that the figure attributes to the full BLING III trial while the manuscript's own prose and
  tables attribute them to a smaller national sub-cohort instead, a meropenem infusion
  duration quoted three different ways across the same document, a "dedicated intravenous
  lumen" instruction that the figure applies to both infusion strategies even though the
  text says it is specific to one of them, and a 48-to-72-hour reassessment box that has no
  counterpart anywhere in the manuscript's prose at all. Figure 1's own box text is
  transcribed exactly as authored in every case; each discrepancy is instead surfaced as a
  clinical caution on the relevant node, with both figures/claims given and neither
  silently preferred over the other. The full registry is kept in `METHODOLOGY.md`.

## Disclaimer

This is an academic / educational reference tool, not a substitute for institutional protocol
or bedside clinical judgement. This algorithm applies to critically ill adults with sepsis or
septic shock receiving piperacillin-tazobactam or meropenem; it should not be extrapolated to
ward-based or non-critically ill populations, nor to patients receiving renal replacement
therapy or extracorporeal membrane oxygenation, for whom individualised dosing with
therapeutic drug monitoring is preferred. This tool's reference list is reproduced directly
from the source manuscript's own bibliography and was not independently re-verified for this
build — see Status above.

## How it's built

Plain HTML/CSS/JS, no build step and no framework — a single static site that GitHub Pages
can serve directly.

```
index.html          page structure — masthead, the diagram (entry, loading dose, stability
                     check, the continuous/extended-infusion decision and its two branches,
                     the delivery-governance box, the TDM-availability decision and its two
                     branches, the 48-72h reassessment), readout panel, references,
                     abbreviation legend, footer
assets/style.css     design (the "paper" masthead/references, the diagram grid, multi-line
                     node sub-text support)
assets/content.js    ← single source of truth for every node's text and reference list. Edit
                     this file to change what the page says.
assets/app.js        rendering + interaction (builds the diagram and its connector lines from
                     content.js; handles the click-to-expand panel on desktop and the bottom
                     sheet on mobile)
```

### Running it locally

No install needed:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

### Editing content

Open `assets/content.js`. Each entry in `NODES` is one box from the diagram (`meaning`,
`rationale`, optional `dose`/`cautions`/`certainty`, and `refs` pointing at numbered entries
in `REFERENCES`). Add or edit a reference in `REFERENCES` and point to it by `id` from any
node. Never change a node's `label` or `sub` text without the author team's sign-off — those
fields are the algorithm itself, transcribed verbatim from the authors' own figure.

### Building the next tool in this atlas

See [`METHODOLOGY.md`](METHODOLOGY.md) — the full build/verification process (fidelity rule,
content schema, citation verification, QA steps, and how this tool's own
figure-versus-manuscript-text discrepancies were handled), written so that any collaborator
or AI assistant can pick this up and build the next tool the same way.
