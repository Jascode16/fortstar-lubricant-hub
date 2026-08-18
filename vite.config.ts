// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // TanStack Start's own crawler handles prerendering to static HTML — this is what actually
    // produces .output/public/*.html for every route.
    prerender: {
      enabled: true,
      crawlLinks: true,
    },
  },
  // IMPORTANT: do NOT set preset: "static" here. The "static" preset triggers Nitro's own
  // separate built-in prerenderer, which conflicts with TanStack Start's prerender crawler above
  // (causes a 404 during the crawl, then a broken SSR build step afterward).
  // "node-server" just gives the crawler a normal, real local server to hit — we only care about
  // the resulting .output/public/ folder; the server output itself is not deployed anywhere.
  nitro: {
    preset: "node-server",
  },
});
