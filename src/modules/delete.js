const taskElement = document.querySelectorAll('.task');

const todos = JSON.parse(localStorage.getItem('todo-list')) || [];

const deleteTask = () => {
  taskElement.forEach((task) => {
    task.addEventListener('click', (e) => {
      if (e.target.classList.contains('delete') || e.target.classList.contains('delete-icon')) {
        todos.splice(task.id, 1);
        localStorage.setItem('todo-list', JSON.stringify(todos));
        window.location.reload();
      }
    });
  });
  todos.map((task) => {
    task.index = todos.indexOf(task);
    localStorage.setItem('todo-list', JSON.stringify(todos));
    return task;
  });
};

export default deleteTask;