/*
 * CIRAS-AI page interactions
 * Shared by the Spanish and English landing pages.
 */
(function () {
  var navLinks = document.querySelectorAll('#nav a[href^="#"], .hero-actions a[href^="#"]');

  if (window.jQuery) {
    window.jQuery('#nav a[href^="#"]').off('click.scrolly');
  }

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function scrollToTarget(target) {
    var nav = document.getElementById('nav');
    var navHeight = nav ? nav.getBoundingClientRect().height : 0;
    var destination = Math.max(
      0,
      target.getBoundingClientRect().top + window.pageYOffset - navHeight - 8
    );

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.scrollTo(0, destination);
      return;
    }

    var start = window.pageYOffset;
    var distance = destination - start;
    var duration = Math.min(420, Math.max(260, Math.abs(distance) * 0.18));
    var startTime = null;

    function step(timestamp) {
      if (startTime === null) startTime = timestamp;
      var progress = Math.min(1, (timestamp - startTime) / duration);
      window.scrollTo(0, start + distance * easeOutCubic(progress));
      if (progress < 1) window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
  }

  navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      var selector = link.getAttribute('href');
      if (!selector || selector.charAt(0) !== '#') return;
      var target = document.querySelector(selector);
      if (!target) return;
      event.preventDefault();
      scrollToTarget(target);
      if (history.replaceState) history.replaceState(null, '', selector);
    });
  });
})();
