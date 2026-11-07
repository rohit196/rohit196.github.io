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
responsive styling is in `assets/css/portfolio.css`. All three pages share
`_layouts/portfolio-base.html`. Blog, Books, and reading notes use
`assets/css/reading.css` for their page-specific layouts.

## Updating the résumé

The menu opens `assets/files/Rohit-Karmudi-Resume.pdf` in the browser, and the
homepage's **Download résumé (PDF)** link downloads the same file. The supplied
PDF is stored unchanged under this stable filename. To update it later, replace
that PDF and keep its filename; both links will continue to work.

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
