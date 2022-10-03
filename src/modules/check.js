let checkbox;
let taskName;

const check = (obj) => {
  checkbox = document.getElementById(`checkbox-${obj.index}`);
  taskName = checkbox.parentElement.lastElementChild;
  checkbox.addEventListener('click', () => {
    const todos = JSON.parse(localStorage.getItem('todo-list'));
    if (checkbox.checked === true) {
      taskName.classList.add('checked');
      todos[obj.index].completed = true;
      localStorage.setItem('todo-list', JSON.stringify(todos));
    } else {
      taskName.classList.remove('checked');
      todos[obj.index].completed = false;
      localStorage.setItem('todo-list', JSON.stringify(todos));
    }
    window.location.reload();
  });
};

const checkUpdate = (obj) => {
  checkbox = document.getElementById(`checkbox-${obj.index}`);
  taskName = document.getElementById(`description-${obj.index}`);
  if (obj.completed === true) {
    checkbox.checked = true;
    taskName.classList.add('checked');
  } else {
    checkbox.checked = false;
    taskName.classList.remove('checked');
  }
};

export { checkUpdate };

export default check;
