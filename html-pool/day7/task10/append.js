function addItem() {
    const inputValue = document.getElementById("listItem").value;
    const newDiv = document.createElement("div");
    const button = document.querySelector('button');

    newDiv.textContent = inputValue;

    button.insertAdjacentElement('afterend', newDiv);
}