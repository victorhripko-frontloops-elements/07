import './style.scss';

(() => {
  const options = {
    threshold: 0.2,
  };
  const observer = new IntersectionObserver(scrollCallback, options);
  const scrollingBlocks = document.querySelectorAll('.block');

  scrollingBlocks.forEach((el) => {
    observer.observe(el);
  });

  function scrollCallback(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;

        target.classList.add('is-visible');
        observer.unobserve(target);
      }
    });
  }
})();
