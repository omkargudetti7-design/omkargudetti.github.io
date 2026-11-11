# Omkar Gudetti portfolio: rules for every session

This is the personal engineering portfolio of Omkar Gudetti, a mechanical design engineer. It is hosted on GitHub Pages at omkargudetti.github.io and served from the `main` branch.

Read this file before you change anything. These rules apply to every page, every edit and every new section.

## Writing rules

- Use simple, human language. Short sentences. Plain words. It must not sound AI written.
- Write in first person with personal ownership. Say "I designed", not "we designed" or "the team designed". If a result belongs to a team, say what I did and what the result was.
- Never use em dashes or en dashes anywhere in the content. That includes the HTML entities for them and the dashes in CSS and JS comments. Write date ranges as "2022 to 2023". Use a colon, a comma, a full stop or brackets instead of a dash.
- No buzzwords. Do not write "passionate", "results driven", "driven by", "leveraging", "leverage", "cutting edge", "robust", "seamless", "synergy", "dynamic", "world class", "holistic" or "journey". If a sentence still works after you delete a fancy word, delete it.
- Do not pad. State the fact and stop. Avoid lists of three adjectives and sentences that start with "Whether you".
- Never invent numbers, names, tools or outcomes. Every fact must come from `images/PROJECT-NOTES.md` or the CV (`Omkar_Gudetti_Resume.pdf`). If a fact is not in either, leave it out and ask Omkar.

## Confidentiality

- No confidential details from GE Vernova or Osler Diagnostics.
- GE Vernova: keep it generic. No part numbers, product names, customer names, supplier names or internal data.
- Osler Diagnostics: keep it generic. No part details, customer names or internal data. No images.
- Only use the facts about these two employers that are already written in `images/PROJECT-NOTES.md`.

## Positioning

- Omkar is a Design Engineer: 3D CAD, FEA, prototype build and testing, root cause analysis.
- Open to relocation.
- Target roles: Mechanical Design, Product Design, Stress, and R&D.

## Technical rules

- Plain HTML, CSS and a little JavaScript. No frameworks, no build step, no package manager.
- Structure:
  - `index.html`: the one page home with all sections
  - `css/style.css`: all styles
  - `js/main.js`: all scripts
  - `projects/`: one HTML page per featured project
  - `images/`: all images, sorted by project. `images/PROJECT-NOTES.md` holds the facts and says which image goes where.
- Fully responsive and fast. Every image below the first screen uses `loading="lazy"` and `decoding="async"`, and every `<img>` has `width`, `height` and meaningful `alt` text.
- Every page needs a unique `<title>`, a meta description, a canonical URL and Open Graph tags (LinkedIn previews use them). Image URLs in Open Graph tags must be absolute.
- Keep the page usable without JavaScript. JavaScript only adds the mobile menu, the active nav link and the image viewer.

## Design rules

- Clean, technical engineering feel inspired by technical drawings: subtle grid lines, precise typography, lots of white space.
- One accent colour only (`--accent` in `css/style.css`). Do not add a second one.
- The hero image is `images/formula-student/fs-car-on-track.jpg`.

## Page order on the home page

Hero, About, Featured Projects (the 6 in PROJECT-NOTES.md, in order), More Work, Experience, Skills, Recognition and Awards, Contact.

## Before you commit

- Search the content for dashes, banned words and confidential names:
  `LC_ALL=C.UTF-8 grep -rnP "\x{2014}|\x{2013}|&mdash;|&ndash;" --include="*.html" --include="*.css" --include="*.js" --include="*.md" .`
  (CLAUDE.md will match because it names the entities. Anything else is a mistake.)
- Open the pages at phone width and at desktop width and check for sideways scrolling and broken images.
