var nombreClics = 0;

const divInFooter = document.querySelector('footer > div');

divInFooter.addEventListener('click', function() {
  nombreClics++;
  divInFooter.innerHTML = nombreClics;
})