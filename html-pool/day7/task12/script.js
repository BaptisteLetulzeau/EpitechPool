document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const taskDescription = document.getElementById('listItem').value;
    const category = document.getElementById('category').value;
    const listItem = document.createElement('li');
    
    listItem.textContent = taskDescription;

    listItem.classList.add(category);

    document.getElementById('taskList').appendChild(listItem);

    document.getElementById('listItem').value = '';
});
