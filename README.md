# Living Architecture Lab

The canonical site for the **Living Architecture Lab**, founded by Alice Thornburgh in 2026.

🌐 **Live site:** [livingarchitecturelab.org](https://livingarchitecturelab.org)
🌱 **Founder:** Alice Thornburgh — substrate engineer, Coachella Valley
📍 **Affiliation:** Crimson Hexagonal Archive

## What this is

The Living Architecture Lab is an independent research lab focused on substrate engineering, myceliated construction, macro-ant robotics, and planetary-scale ecological design. The site organizes the lab's work across **five scales** — brick, structure, organism, territory, planet — and **five founding principles** — Earth Actually, Virtue-by-Construction, Unfurling, Stewardship, The Great Work.

## What this is NOT

The Living Architecture Lab is **not** the Living Architecture Lab at Columbia GSAPP (David Benjamin), the Living Architecture Lab at the Bartlett UCL (B-Pro RC3), The Living NYC, livingLAB Detroit, or Alain de Botton's Living Architecture. All adjacent labs are cited with respect at [/about/disambiguation](https://livingarchitecturelab.org/about/disambiguation).

Alice Thornburgh (Founding Director) is **not** the same person as Alice Thornburgh-Lind (game artist, voice of Asphodel in *Traveler's Refrain*, @devilfern).

## Build

This is an [Astro](https://astro.build) project.

```bash
npm install
npm run dev      # dev server
npm run build    # production build → ./dist
npm run preview  # preview production build
```

Deploy target: **Vercel** (static).

## Architecture

```
src/
├── content/          # MDX content collections
│   ├── scales/       # 5 scale documents (brick → planet)
│   ├── projects/     # 7 project stubs
│   ├── principles/   # 5 founding principles
│   └── people/       # contributor biographies
├── layouts/          # BaseLayout, PageLayout, ScaleLayout
├── components/       # FiveScaleGateway, DoiLink, SimPullQuote, DisambiguationNote
├── data/             # MPAI v1.1 JSON-LD packets
├── pages/            # routed pages
│   ├── index.astro
│   ├── about/
│   ├── scales/       # dynamic [slug] pulled from content collection
│   ├── projects/
│   ├── principles/
│   ├── journal/
│   ├── music/
│   └── garden/
└── styles/global.css # field-guide aesthetic, scale color coding
```

Every page injects MPAI v1.1 JSON-LD from `src/data/mpai-alice.json` or `src/data/mpai-lal.json` via the `BaseLayout` component. Standard Schema.org (`differentFrom`, `sameAs`, `disambiguatingDescription`) is used over exotic `cha:negativeTag` meta — crawler reach is broader.

## Source documents

This site is built from the workplan compression in:

- [EA-LAL-WORKPLAN-01: Site Buildout Workplan](https://doi.org/10.5281/zenodo.19855905)
- [EA-LAL-SITE-01: Site Blueprint](https://doi.org/10.5281/zenodo.19855903)
- [MPAI-LAL-AT-01: Alice Thornburgh](https://doi.org/10.5281/zenodo.19855300)
- [MPAI-LAL-INSTITUTION-01: Living Architecture Lab](https://doi.org/10.5281/zenodo.19855302)

## License

Content: **CC BY 4.0**. Code: **MIT**.

All Living Architecture Lab intellectual property remains with Alice Thornburgh under the Hexagonal Contributor License v3.0 ([10.5281/zenodo.19673629](https://doi.org/10.5281/zenodo.19673629)).

---

∮ = 1
