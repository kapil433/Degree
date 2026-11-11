# Degree Atlas — Academic Discovery Build Plan

**Release:** 5.1 · **Academic context:** IGNOU MA Anthropology (July 2026 application), MUJ Online MSc Mathematics (Computational Science pathway), and interdisciplinary Complexity Science.

## Product objective

Make an academic **discovery and experimentation environment**, not a chapter-by-chapter curriculum or a collection of links without context.

A learner should follow:

**Course → broad syllabus topics → one suitable textbook/open resource → significant papers and explanatory essays → interactive tool → research or product idea.**

This document is for maintenance. It must not appear as development instructions in the live UI.

## Phase 1 — verified university framework

- [x] Carry forward IGNOU MAANY semester structure and degree titles into the catalog.
- [x] Carry forward MUJ MSc Mathematics course codes and Computational Science elective selection.
- [x] Maintain a separate undergraduate mathematics foundation track.
- [x] Label open collections that are not exact syllabus-equivalent courses as supplementary.
- [x] Preserve honest user-entered assessment dates and statuses.
- [ ] Verify exact July 2026 assignment PDFs for the user's actual enrolled programme and study centre.
- [ ] Review every open learning link for current accessibility and full subject coverage.
- [ ] Match individual course topic outlines to the newest official unit-by-unit documents without creating a chapter-level reading plan.

## Phase 2 — progressive books

- [x] Three complete 25-book pathways (Anthropology, Mathematics, Complexity Science), each in a reasoned sequence.
- [x] Nine additional focused routes for methods, computation, social systems and fiction.
- [x] Provide a reason to read each book and a visible next step.
- [x] Track personal reading status and preserve earlier local progress.
- [ ] Add additional books where required by syllabus coverage rather than imposing numerical caps.
- [ ] Individually verify publisher, edition, ISBN, legal open-access status and suitability.

## Phase 3 — scholarly and public reading corpus

The target is **600 individually verified items**: in each of three disciplines, 100 scholarly papers and 100 essays/articles.

Strict rules:
- No invented article titles or authors.
- No duplicate work counted as two unique readings within a discipline.
- Keep books and chapters out of scholarly-paper counts.
- Separate peer-reviewed research from public essays, articles and explainers.
- Every item must map to a broad course topic or interdisciplinary research theme.
- Record title, author, year, publisher/venue, DOI or direct URL, publication type, relevance, difficulty and source-check date.
- Distinguish editorial selection from database citation-count ranking.

Current implementation:
- [x] Independent Research and Essays sections organized by subject and topic.
- [x] A small source-linked starter list for research papers.
- [x] Live OpenAlex scholarly search requesting up to 100 works per query when the public API is reachable, with fallback.
- [x] Reputable public-explainer and lecture collections.
- [ ] Finish and individually verify 100 research papers per field.
- [ ] Finish and individually verify 100 essays/articles per field.
- [ ] Add original one-paragraph summaries and methods/limitations metadata for all 600.
- [ ] Audit publication types, DOI resolution and duplicates.

**Never present the current live search results or the earlier mixed historical index as a completed, academically verified 600-entry bibliography.**

## Phase 4 — tools and experiments

- [x] Topic-relevant resource cards (e.g. GeoGebra, Taguette, NetLogo, NetworkX, Gephi, QGIS, Colab).
- [x] Browser-based threshold diffusion experiment, with editable seeds and thresholds.
- [x] Research studio with interdisciplinary ideas and private notes.
- [ ] Add mathematical visualizations for stability, phase portraits and fluid flow.
- [ ] Add user-exportable, reproducible notebooks for modeling exercises.
- [ ] Add ethically designed ethnographic interviewing and coding exercises.

## Phase 5 — learning science and long-term utility

- [x] Evidence-linked retrieval practice, spacing, interleaving, self-explanation and implementation intentions.
- [x] Small active-recall queue and transparent review schedule.
- [x] Weekly routine, study time logging and university assessment checklist.
- [x] Migrate relevant local progress from the earlier site.
- [x] JSON backup and restore.
- [ ] Add personal flashcard creation, optional citation export and research knowledge graph.

## UX and reliability checklist

- [x] Clickable internal course pages, without repetitive external links on course-grid items.
- [x] Seven navigation destinations, desktop sidebar and mobile horizontal bottom navigation.
- [x] Search and semester filters specific to each subject.
- [x] Light and dark appearance.
- [x] 24 route-level rendering checks completed during build (tested in a mock DOM runtime, not screenshot/device browser testing).
- [ ] Run a full browser QA pass on Android Chrome and desktop.
- [ ] Independently verify the live GitHub Pages deployment and asset-loading status.

## Primary official sources

- IGNOU programme: https://www.ignou.ac.in/schools/programme/MAANY
- IGNOU July 2026 prospectus: https://www.ignou.ac.in/viewFile/services/common_prospectus/common-prospectus-july-2026-V-L-1-1.pdf
- IGNOU eGyanKosh programme guide: https://www.egyankosh.ac.in/handle/123456789/124490
- IGNOU assignments: https://www.ignou.ac.in/studentService/download/assignments
- MUJ official course report: https://muj.onlinemanipal.com/wp-content/uploads/sites/2/2026/03/Final-PPR-for-M.Sc-Mathematics.pdf

## Boundaries

The site is independent, local-first, not an official student portal, and has no automated university deadline feed or AI model connected. OpenAlex live search depends on external service availability. User-entered dates, marks, and enrolment statuses are not institutionally verified.
