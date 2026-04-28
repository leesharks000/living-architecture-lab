import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// Living Architecture Lab — canonical site
// Workplan: 10.5281/zenodo.19855905

export default defineConfig({
  site: 'https://livingarchitecturelab.org',
  integrations: [
    mdx(),
  ],
  // Build to plain static — content-first, zero JS by default.
  // The strain map (Phase 3) will land as a D3 island only on
  // /atlas/strain-map. No hydration tax on text pages.
  // Sitemap shipped as static public/sitemap.xml (regenerated manually as pages are added).
  output: 'static',
  build: {
    format: 'directory',
  },
});
