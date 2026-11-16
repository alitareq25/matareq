const search = document.querySelector('.catalog-search');
const input = document.querySelector('#catalog-query');
const status = search.querySelector('[role="status"]');
const groups = [...document.querySelectorAll('.catalog-group')].map((section) => ({
  section,
  link: document.querySelector(`.catalog-links a[href="#${section.id}"]`).parentElement,
  entries: [...section.querySelectorAll('li')].map((item) => ({
    item,
    citation: item.textContent.toLowerCase(),
  })),
}));

search.hidden = false;
input.addEventListener('input', () => {
  const terms = input.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
  let total = 0;
  for (const { section, link, entries } of groups) {
    let matches = 0;
    for (const { item, citation } of entries) {
      item.hidden = !terms.every((term) => citation.includes(term));
      if (!item.hidden) matches += 1;
    }
    section.hidden = link.hidden = matches === 0;
    total += matches;
  }
  status.textContent = terms.length ? `${total} matching entries` : '';
});
