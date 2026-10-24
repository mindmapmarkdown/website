# website

Source of [www.mindmapmarkdown.org](https://www.mindmapmarkdown.org), the Mindmap Markdown website, in English, Korean, Japanese, and Simplified Chinese.

The site introduces the project and links to the specification. The normative text lives in [`mindmapmarkdown/spec`](https://github.com/mindmapmarkdown/spec) and is not copied here.

## Structure

| Path | Contents |
|---|---|
| `src/i18n/content.js` | All page text, per language. English is the source |
| `src/layouts/Base.astro` | Header, language switcher, footer, `hreflang` |
| `src/components/Home.astro` | Home page sections |
| `src/components/Brand.astro` | Logo story, palette, construction rules, downloads |
| `src/pages/` | `/`, `/brand/` and `/{ko,ja,zh}/...` routes |
| `public/brand/` | Logo, favicon, avatar, and share-image files |

URLs: `/` (English), `/ko/`, `/ja/`, `/zh/`. Each has a `brand/` page.

## Develop

```sh
npm install
npm run dev
npm run build   # static output in dist/
```

## Deploy

The `Dockerfile` builds the static site and serves `dist/` with nginx on port 80. Coolify deploys it on every push to `main`. TLS is terminated in front of it. The apex domain redirects to `www`.

## License

Code is licensed under [Apache-2.0](LICENSE). Text and images are licensed under CC-BY-4.0, except the logo, whose use is described on the [brand page](https://www.mindmapmarkdown.org/brand/).
