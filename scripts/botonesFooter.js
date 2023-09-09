// Función para mostrar tareas pendientes
function showPendientes() {
    const pendientes = document.querySelectorAll('.item');
    pendientes.forEach((element) => {
      const checkbox = element.querySelector('.toggle');
      if (checkbox.checked) {
        element.style.display = 'none';
      } else {
        element.style.display = 'block';
      }
    });
  }
  
  // Función para mostrar tareas completadas
  function showCompletadas() {
    const completadas = document.querySelectorAll('.item');
    completadas.forEach((element) => {
      const checkbox = element.querySelector('.toggle');
      if (!checkbox.checked) {
        element.style.display = 'none';
      } else {
        element.style.display = 'block';
      }
    });
  }
  function showAll() {
    const tasks = document.querySelectorAll('.item');
    tasks.forEach((element) => {
      element.style.display = 'block';
    });
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

