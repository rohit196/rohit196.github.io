(() => {
  'use strict';

  // Covers are optional: a title-and-author fallback stays visible underneath.
  document.querySelectorAll('[data-book-cover]').forEach(image => {
    const fallback = () => { image.hidden = true; };
    image.addEventListener('error', fallback, { once: true });
    if (image.complete && image.naturalWidth === 0) fallback();
  });

  const library = document.querySelector('[data-books-page]');
  if (!library) return;
  const grid = library.querySelector('[data-books-grid]');
  const cards = Array.from(grid.querySelectorAll('[data-book-card]'));
  const search = library.querySelector('#book-search');
  const subject = library.querySelector('#book-subject');
  const rating = library.querySelector('#book-rating');
  const sort = library.querySelector('#book-sort');
  const shelves = Array.from(library.querySelectorAll('[data-shelf]'));
  const result = library.querySelector('#book-results');
  const empty = library.querySelector('[data-filter-empty]');
  const form = library.querySelector('form');
  const statuses = new Set(shelves.map(button => button.dataset.shelf));
  const normalize = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase().trim();
  let shelf = 'all';

  // Statistics use explicit reading metadata, never publication dates or scores.
  const statistics = library.querySelector('[data-reading-statistics]');
  if (statistics) {
    const readBooks = cards.filter(card => card.dataset.status === 'read');
    const favourites = cards.filter(card => card.dataset.favourite === 'true');
    statistics.hidden = readBooks.length === 0 && favourites.length === 0;
    statistics.querySelector('[data-stat-completed]').textContent = readBooks.filter(card => /^\d{4}-\d{2}-\d{2}$/.test(card.dataset.finished) && card.dataset.finished.startsWith(statistics.dataset.year + '-')).length;
    statistics.querySelector('[data-stat-subjects]').textContent = new Set(readBooks.flatMap(card => card.dataset.subjects.split('|')).filter(Boolean)).size;
    const authorCounts = new Map();
    favourites.forEach(card => { if (card.dataset.author) authorCounts.set(card.dataset.author, (authorCounts.get(card.dataset.author) || 0) + 1); });
    const authors = [...authorCounts.entries()].sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0])).slice(0, 3).map(entry => entry[0]);
    statistics.querySelector('[data-stat-authors]').textContent = authors.join(', ') || 'Not selected';
  }

  library.querySelectorAll('[data-book-controls]').forEach(control => { control.hidden = false; });
  library.querySelectorAll('[data-shelf-count]').forEach(counter => {
    const status = counter.dataset.shelfCount;
    counter.textContent = status === 'all' ? cards.length : cards.filter(card => card.dataset.status === status).length;
  });

  function readLocation() {
    const parameters = new URLSearchParams(window.location.search);
    search.value = parameters.get('q') || '';
    for (const [control, key] of [[subject, 'subject'], [rating, 'rating'], [sort, 'sort']]) {
      const value = parameters.get(key);
      control.value = Array.from(control.options).some(option => option.value === value) ? value : control.options[0].value;
    }
    shelf = statuses.has(parameters.get('shelf')) ? parameters.get('shelf') : 'all';
  }

  function updateLocation() {
    const url = new URL(window.location.href);
    const values = { q: search.value.trim(), subject: subject.value, rating: rating.value, sort: sort.value, shelf };
    for (const [key, value] of Object.entries(values)) {
      if (!value || value === 'all' || (key === 'sort' && value === 'title')) url.searchParams.delete(key);
      else url.searchParams.set(key, value);
    }
    if (url.href !== window.location.href) window.history.replaceState(null, '', url);
  }

  function render(updateUrl = true) {
    const query = normalize(search.value);
    const ordered = [...cards].sort((left, right) => {
      let comparison = 0;
      if (sort.value === 'rating') comparison = (Number(right.dataset.rating) || -1) - (Number(left.dataset.rating) || -1);
      if (sort.value === 'recent') comparison = (right.dataset.finished || '').localeCompare(left.dataset.finished || '');
      if (sort.value === 'author') comparison = left.dataset.author.localeCompare(right.dataset.author);
      return comparison || left.dataset.title.localeCompare(right.dataset.title);
    });
    let matches = 0;
    ordered.forEach(card => {
      const score = card.dataset.rating;
      const ratingMatches = rating.value === 'all' || (rating.value === 'unrated' ? !score : score !== '' && Number(score) >= Number(rating.value));
      const subjectMatches = subject.value === 'all' || card.dataset.subjects.split('|').includes(subject.value);
      const visible = normalize(card.dataset.search).includes(query) && subjectMatches && ratingMatches && (shelf === 'all' || card.dataset.status === shelf);
      card.hidden = !visible;
      if (visible) matches += 1;
      grid.appendChild(card);
    });
    shelves.forEach(button => { button.setAttribute('aria-pressed', String(button.dataset.shelf === shelf)); });
    empty.hidden = matches !== 0;
    result.textContent = `${matches} ${matches === 1 ? 'book' : 'books'}${matches !== cards.length ? ` of ${cards.length}` : ''}`;
    if (updateUrl) updateLocation();
  }

  function reset() {
    search.value = '';
    subject.value = 'all';
    rating.value = 'all';
    sort.value = 'title';
    shelf = 'all';
    render();
  }
  form.addEventListener('submit', event => { event.preventDefault(); render(); });
  search.addEventListener('input', () => render());
  for (const control of [subject, rating, sort]) control.addEventListener('change', () => render());
  shelves.forEach(button => button.addEventListener('click', () => { shelf = button.dataset.shelf; render(); }));
  library.querySelectorAll('[data-reset-filters]').forEach(button => button.addEventListener('click', reset));
  window.addEventListener('popstate', () => { readLocation(); render(false); });
  readLocation();
  render(false);
})();
