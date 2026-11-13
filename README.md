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
`.preview/`. The About page is maintained in `_pages/about.md`; the duplicate
starter template has been removed. Local dependencies and generated preview files are ignored
by Git. Existing tracked `_site/` files are left as they are.

## Reviewing changes

Homepage text and tools are editable in the YAML at the top of
`index.md`. Project cards are loaded from `_projects/`. Its page structure is in `_layouts/portfolio-home.html`, and its
responsive styling is in `assets/css/portfolio.css`. All three pages share
`_layouts/portfolio-base.html`. Blog, Books, and reading notes use
`assets/css/reading.css` for their page-specific layouts.

## Updating the résumé

The menu opens `assets/files/Rohit-Karmudi-Resume.pdf` in the browser, and the
homepage's **Download résumé (PDF)** link downloads the same file. The supplied
PDF is stored unchanged under this stable filename. To update it later, replace
that PDF and keep its filename; both links will continue to work.

## Add content with a form

Open `_tools/content-editor.html` in your browser (double-click the file in your
file manager). No server, account, or installation is required. Choose Book,
Project, or Blog post, fill in the form, and download the Markdown file.
The form shows the destination folder:

- Books: `_books/`
- Projects: `_projects/`
- Blog posts: `_posts/`

Move the downloaded file from Downloads into that folder. New content defaults
to Draft; choose Published when ready for it to appear in normal builds.
Preview the site, then commit and push to the GitHub Pages publishing branch.
Downloading a file does not publish it. To edit existing content, edit its
Markdown file directly; the form creates new files and does not load existing ones.
The local editor is excluded from Jekyll output by its underscore directory name.

Projects now live in individual `_projects/*.md` files; adding a project there
adds it to the homepage without editing `index.md`. The `order` field controls
card order. `project_url` points to a repository or demo. Optional longer case
studies are rendered at `/projects/<filename>/`. To link a homepage card to its
case study, set `project_url` to that path. For manual authoring, copy
`_templates/project.md` and set `published: true` when ready.

## Adding books and articles

Copy `_templates/book.md` into `_books/your-book-title.md`. Keep the file's
front matter at its very first line, fill the fields, and set `published: true`
when it is ready. Write longer notes below the closing `---`.

- `book_author`, `title`, and `subjects` power title/author search and subject filters.
- Subjects are Fiction, History, Philosophy, Psychology, Business, Technology,
  and Biographies; a book can have more than one.
- Set `status` to `reading`, `read`, or `want-to-read` to place it on a shelf.
  Leave it `null` to show notes without asserting a reading status.
- `reading_reason` appears beside up to three currently reading books.
- Set `favourite: true` and add `favourite_reason` for the personal shortlist.
  The page supports up to ten favourites; aim for five to ten recommendations.
- `rating` is a recommendation score from 1 to 5, with decimals supported.
  Leave it `null` for an unrated book. The rating guide is in `_data/reading.yml`.
- Add an honest `short_review` and three entries in `key_takeaways`.
  The notes page displays the first three takeaways.
- For the archive, set `status: read` and `finished_on: "YYYY-MM-DD"` using
  the actual completion date. No completion year is inferred from publication.
- Each optional `highlights` entry has `quote` and `interpretation` fields.
  Keep quotations brief and explain what the passage means to you.
- `cover_image` accepts a local path or image URL. For Open Library covers,
  use `https://covers.openlibrary.org/b/isbn/YOURISBN-L.jpg?default=false`.
  A title-and-author fallback is shown if a cover is missing or unavailable.
- Optional `purchase_links` entries have `vendor` and `url` fields.

For example, a reading selection can use:

```yaml
status: reading
reading_reason: "Your reason for choosing this book."
favourite: false
rating: null
key_takeaways: []
highlights: []
finished_on: null
```

Bookshelf filters can be shared or bookmarked through the URL. The page also
works without JavaScript as a complete, unfiltered list. Recommendations use
an email link that opens the visitor's email client; there is no submission backend.
Reading statistics appear when books are explicitly marked as read or favourite.
The yearly total uses completion dates, subjects use read books, and the author
list is drawn from favourite books. No reading activity is inferred from ratings.

Copy `_templates/post.md` to `_posts/YYYY-MM-DD-your-title.md` for an article.
Set its title, excerpt, categories, and `published: true`, then write the article
in Markdown. Demo book and Jekyll post files are retained with `published: false`.

Use VS Code's Source Control view (Ctrl+Shift+G) to inspect saved edits before
committing. Work on `portfolio-cleanup` while the redesign is in progress.
The preview command serves only your computer; it does not publish the website.

## Search engine setup

The shared `_includes/portfolio-seo.html` supplies unique page titles, descriptions,
canonical links, social metadata, and WebSite/Person structured data. The sitemap
and robots.txt are generated by `jekyll-sitemap`. The 404 and legacy category
redirect are excluded from the sitemap. Keep real page permalinks stable.

The homepage's `seo_title`, `description`, and `hero` fields in `index.md`
identify Rohit Karmudi and describe the Python, SQL, and data analytics work
shown on the page. Keep these fields accurate when updating the portfolio.
The title and description also supply its social metadata. The homepage adds
ProfilePage structured data linked to the shared Person and WebSite entities;
the person's role and location come from `author.job_title` and
`author.location` in `_config.yml`. Project headings link to their local project
pages, while the card's action still opens the project repository or demo.

Google Search Console's **HTML file** method is configured with
`google4f8f2038a1614832.html` at the repository root. Its name and contents must
remain exactly as supplied by Google, without front matter or a page layout.
It is excluded from the sitemap through a path-specific default in `_config.yml`.
After publishing, open
`https://rohit196.github.io/google4f8f2038a1614832.html`, then click **Verify**
in Search Console for the **URL-prefix** property `https://rohit196.github.io/`.
Keep the verification file published after verification so Google can recheck it.

As an alternative, the **HTML tag** method is also supported. Copy only its
`content` value into `_config.yml` under `webmaster_verifications.google`.
Publish the change, confirm the homepage includes Google's exact tag, and click
**Verify** in Search Console. Keep the value afterward to retain verification.
Empty configuration values emit no verification tags. Bing's equivalent value
can be set under `webmaster_verifications.bing`, or import the verified Google
property into Bing Webmaster Tools.

After verification, submit `https://rohit196.github.io/sitemap.xml` using
**Sitemaps**, then inspect the homepage with **URL Inspection** and request
indexing. Google determines whether and when pages are indexed; publishing
metadata or a sitemap does not submit or verify a Search Console account.

Official guides: [Google verification](https://support.google.com/webmasters/answer/9008080),
[sitemap submission](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap),
and [requesting a crawl](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl).
