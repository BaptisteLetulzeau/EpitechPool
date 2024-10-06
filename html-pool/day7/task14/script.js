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

document.getElementById("searchBtn").addEventListener("click", function () {
    const searchText = document.getElementById("searchString").value;
    const searchType = document.getElementById("searchCategory").value;
    const items = document.querySelectorAll("#taskList li");
  
    items.forEach((item) => {
      const itemText = item.textContent.toLowerCase();
      const itemType = item.classList.contains(searchType);
      const isSameType = searchType === "all" || itemType;
      const isSameText = searchText === "" || itemText.includes(searchText);
  
      if (isSameType && isSameText) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
});

document.getElementById('resetBtn').addEventListener('click', function() {
    const tasks = document.querySelectorAll('#taskList li');
    
    tasks.forEach(task => {
        task.style.display = 'list-item';
    });

    document.getElementById('searchForm').reset();
});
