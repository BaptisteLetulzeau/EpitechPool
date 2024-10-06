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

document.getElementById('searchBtn').addEventListener('click', function() {
    const searchCategory = document.getElementById('searchCategory').value;
    const tasks = document.querySelectorAll('#taskList li');
    
    tasks.forEach(task => {
        if (searchCategory === 'all') {
            task.style.display = 'list-item';
        } else if (task.classList.contains(searchCategory)) {
            task.style.display = 'list-item';
        } else {
            task.style.display = 'none';
        }
    });
});

document.getElementById('resetBtn').addEventListener('click', function() {
    const tasks = document.querySelectorAll('#taskList li');
    
    tasks.forEach(task => {
        task.style.display = 'list-item';
    });
    
    document.getElementById('searchCategory').value = 'all';
});
