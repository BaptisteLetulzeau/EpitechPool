var nombreClics = 0;

function comptage() {
  nombreClics++;
  document.getElementById("section p").textContent   = nombreClics;
}

const divInFooter = document.querySelector('footer > div');
document.getElementById("footer > div").addEventListener("click", comptage);