(() => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('task-input');
    const list = document.getElementById('task-list');

    // Adds a new task to the list
    function addTask(taskText) {
      if (!taskText.trim()) return;
      const li = document.createElement('li');

      // Checkbox for task completion
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.setAttribute('aria-label', 'Mark task as completed');
      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          li.classList.add('completed');
        } else {
          li.classList.remove('completed');
        }
      });

      // Label for the checkbox and task text
      const label = document.createElement('label');
      label.textContent = taskText;
      label.prepend(checkbox);

      // Delete button
      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('delete-button');
      deleteBtn.setAttribute('aria-label', 'Delete task');
      deleteBtn.innerHTML = '&times;';
      deleteBtn.addEventListener('click', () => {
        li.remove();
      });

      li.appendChild(label);
      li.appendChild(deleteBtn);
      list.appendChild(li);
    }

    // Form submit handler
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (input.value.trim()) {
        addTask(input.value.trim());
        input.value = '';
        input.focus();
      }
    });
  })();                    