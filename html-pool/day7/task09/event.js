let button = document.querySelector('button')
let paragraph = document.querySelector('p')

button.addEventListener('click', function (){
    paragraph.forEach(element => {
        element.style.display = 'none'
    });
})