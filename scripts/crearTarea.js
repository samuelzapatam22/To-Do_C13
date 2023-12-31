// Codigo DOM #1
let arregloTareas = localStorage.getItem('items')
  ? JSON.parse(localStorage.getItem('items'))
  : [];

document.querySelector('.new-todo').addEventListener('keyup', (event) => {
  if (
    event.keyCode === 13 &&
    document.querySelector('.new-todo').value.length > 0
  ) {
    const nuevaTarea = document.querySelector('.new-todo');
    crearTarea(nuevaTarea);
  }
});

function crearTarea(nuevaTarea) {
  nuevaTarea = {
    thing: nuevaTarea.value,
    complete: false,
    dontComplete: true,
    priority: 'Alta',
    category: 'Casa',
  };
  arregloTareas.push(nuevaTarea);
  localStorage.setItem('items', JSON.stringify(arregloTareas));
  contadorPendientes();
  location.reload();
}

function contadorPendientes() {
  const pendingCount = arregloTareas.filter(task => !task.complete).length;
  const countElement = document.querySelector('.todo-count strong');
  countElement.textContent = pendingCount;
}

window.addEventListener('load', () => {
  contadorPendientes();
});

displayFooter();
displayItems();
