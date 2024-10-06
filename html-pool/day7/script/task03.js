const divInFooter = document.querySelector('footer > div');

let characters = []

document.addEventListener('keydown', function(event) {
    if (event.key.length === 1) {
      characters.push(event.key);
      console.log(event.key)
  
      if (characters.length > 42) {
        characters.shift();
      }
  
      divInFooter.textContent = characters.join('');
    }
  });