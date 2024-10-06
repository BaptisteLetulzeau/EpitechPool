let anchors = document.querySelector('a:not([target="_blank"])')

anchors.forEach(link => {
    link.style.opacity = '0.5';
  });