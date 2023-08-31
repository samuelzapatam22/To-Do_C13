
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
