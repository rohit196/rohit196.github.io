# Rohit Karmudi's portfolio

A Jekyll portfolio hosted on GitHub Pages. The homepage content lives in
`index.md`, and the menu lives in `_data/navigation.yml`.

## Local preview on Windows

Prerequisites: Ruby+Devkit (Ruby 3.2 or newer), Bundler, and Git.

Open this repository folder in VS Code. In its terminal, install the dependencies
inside the project:

```powershell
bundle config set --local path vendor/bundle
bundle install
```

Then select **Terminal > Run Task > Preview portfolio**, or run:

```powershell
bundle exec jekyll serve --config _config.yml,_config.local.yml --livereload --force_polling
```

Open <http://127.0.0.1:4000>. Save an edit to a page to rebuild it and reload
the browser automatically. Restart the task after editing either configuration
file. Stop the preview with Ctrl+C in its terminal.

The local configuration loads the installed theme and writes generated pages to
`.preview/`. It skips the old `about.markdown` template so that it does not compete
with `_pages/about.md`. Local dependencies and generated preview files are ignored
by Git. Existing tracked `_site/` files are left as they are.

## Reviewing changes

Homepage text, tools, and project links are editable in the YAML at the top of
`index.md`. Its page structure is in `_layouts/portfolio-home.html`, and its
responsive styling is in `assets/css/portfolio.css`. Blog and Books keep their
existing theme layouts while the homepage design is reviewed.

Use VS Code's Source Control view (Ctrl+Shift+G) to inspect saved edits before
committing. Work on `portfolio-cleanup` while the redesign is in progress.
The preview command serves only your computer; it does not publish the website.
