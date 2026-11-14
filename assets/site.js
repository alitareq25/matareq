const filters = document.querySelector('#publication-filters');
const papers = [...document.querySelectorAll('.papers li')];
const status = document.querySelector('#filter-status');

filters.hidden = false;
filters.addEventListener('click', (event) => {
  const selected = event.target.closest('button[data-filter]');
  if (!selected) return;

  const topic = selected.dataset.filter;
  for (const button of filters.querySelectorAll('button')) {
    button.setAttribute('aria-pressed', String(button === selected));
  }

  let visibleCount = 0;
  for (const paper of papers) {
    paper.hidden = topic !== 'all' && !paper.dataset.topic.split(' ').includes(topic);
    if (!paper.hidden) visibleCount += 1;
  }
  status.textContent = visibleCount === 1 ? '1 publication shown.' : `${visibleCount} publications shown.`;
});
