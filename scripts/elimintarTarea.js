
document.querySelector('.todo-list').addEventListener('click', (event) => {
    if (event.target.classList.contains('deleteBtn')) {
        const taskContainer = event.target.closest('.item');
        if (taskContainer) {
            eliminarTarea(taskContainer);
        }
    }
});
function eliminarTarea(taskContainer) {
    const taskIndex = obtenerIndiceTarea(taskContainer);
    if (taskIndex !== -1) {
        arregloTareas.splice(taskIndex, 1);
        localStorage.setItem('items', JSON.stringify(arregloTareas));
        contadorPendientes(); //Actualización del contador
        taskContainer.remove();
    }
}
function obtenerIndiceTarea(taskContainer) {
    const taskElements = document.querySelectorAll('.item');
    for (let i = 0; i < taskElements.length; i++) {
        if (taskElements[i] === taskContainer) {
            return i;
        }
    }
    return -1;
}

document.querySelector('.clear-completed').addEventListener('click', () => {
    const completadas = arregloTareas.filter(task => task.complete);
    if (completadas.length > 0) {
      completadas.forEach(completada => {
        const taskContainer = obtenerContenedorDeTarea(completada);
        if (taskContainer) {
          eliminarTarea(taskContainer);
        }
      });
    }
  });
  
  
  function obtenerContenedorDeTarea(tarea) {
    const taskElements = document.querySelectorAll('.item');
    for (let i = 0; i < taskElements.length; i++) {
      const taskIndex = obtenerIndiceTarea(taskElements[i]);
      if (taskIndex !== -1 && arregloTareas[taskIndex] === tarea) {
        return taskElements[i];
      }
    }
    return null;
  }

