const buttons = document.getElementsByTagName('button');

const btnPlus = buttons[0]
const btnMinus = buttons[1]

const dropdown = document.querySelector('select')

btnPlus.addEventListener('click', function() {
    const fontSize = window.getComputedStyle(document.body).fontSize;

    let fontSizeValue = parseFloat(fontSize);
  
    fontSizeValue *= 1.1;
  
    document.body.style.fontSize = fontSizeValue + 'px';
})

btnMinus.addEventListener('click', function() {
    const fontSize = window.getComputedStyle(document.body).fontSize;

    let value = parseFloat(fontSize);
  
    value *= 0.9;
  
    document.body.style.fontSize = value + 'px';
})

dropdown.addEventListener('change', function () {
    const color = dropdown.value;

    document.body.style.backgroundColor = color;
})

