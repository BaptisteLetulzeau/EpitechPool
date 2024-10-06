document.getElementById('taskForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const taskDescription = document.getElementById('listItem').value;
  const category = document.getElementById('category').value;
  const tagsInput = document.getElementById('tags').value;
  const tags = tagsInput.split(',').map(tag => tag.trim()).filter(tag => tag);
  const listItem = document.createElement('li');

  listItem.textContent = taskDescription;
  listItem.classList.add(category);

  const tagSpan = document.createElement('span');
  tagSpan.classList.add('tags');
  tagSpan.textContent = ' => Tags: ' + tags.join(', ');

  listItem.dataset.tags = tags.join(',');

  listItem.appendChild(tagSpan);

  document.getElementById('taskList').appendChild(listItem);

  document.getElementById('listItem').value = '';
  document.getElementById('tags').value = '';
});

document.getElementById('searchBtn').addEventListener('click', function() {
  const searchCategory = document.getElementById('searchCategory').value;
  const searchString = document.getElementById('searchString').value.toLowerCase();
  const searchTags = document.getElementById('searchTags').value.split(',').map(tag => tag.trim().toLowerCase());

  const tasks = document.querySelectorAll('#taskList li');

  tasks.forEach(task => {
      const taskText = task.textContent.toLowerCase();
      const taskTags = task.dataset.tags.toLowerCase().split(',');

      const matchesCategory = (searchCategory === 'all') || task.classList.contains(searchCategory);
      const matchesString = (searchString === '') || taskText.includes(searchString);
      const matchesTags = searchTags.every(tag => tag === '' || taskTags.includes(tag));

      if (matchesCategory && matchesString && matchesTags) {
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
  document.getElementById('searchString').value = '';
  document.getElementById('searchTags').value = '';
});
