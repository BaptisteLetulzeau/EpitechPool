const divInFooter = document.querySelector('footer > div');

divInFooter.addEventListener('click', function() {
    let name = '';

    while (!name) {
      name = prompt("What's your name?");
    }

    const isConfirmed = confirm(`Are you sure that "${name}" is your name?`);

    if (isConfirmed) {
        alert(`Hello ${name}!`);
        
        divInFooter.textContent = `Hello ${name}!`;
    }
})