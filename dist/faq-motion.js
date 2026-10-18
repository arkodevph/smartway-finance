(() => {
  const page = document.querySelector('[data-page="/faqs"]');
  if (!page) return;
  page.querySelectorAll('.faq-item').forEach((item) => {
    item.addEventListener('toggle', () => {
      if (!item.open) return;
      item.closest('.content-container > div')?.querySelectorAll('.faq-item[open]').forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });
})();
