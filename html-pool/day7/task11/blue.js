const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(paragraph => {
    paragraph.addEventListener('mouseover', () => {
        paragraph.classList.add('blue');
    });

    paragraph.addEventListener('mouseout', () => {
        paragraph.classList.remove('blue');
    });

    paragraph.addEventListener('click', () => {
        paragraph.classList.toggle('highlighted');
    });
});