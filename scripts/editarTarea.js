document.querySelector('.todo-list').addEventListener('click', (event) => {
  if (event.target.classList.contains('editBtn')) {
    activarEdit();
    activateCancelListeners();
    activateSaveListeners();
  }
});

const activarEdit = function() {
  const editarBtn = document.querySelectorAll('.editBtn');
  const controladorActualizacion = document.querySelectorAll('.update-controller');
  const input = document.querySelectorAll('.input-controller textarea');
  const seleccionarPrioridad = document.querySelectorAll('.edit-controller select')[0];
  const seleccionarCategoria = document.querySelectorAll('.edit-controller select')[1];

  editarBtn.forEach((eb, i) => {
      controladorActualizacion[i].style.display = 'block';
      input[i].disabled = false;
      seleccionarPrioridad.value = arregloTareas[i].priority;
      seleccionarCategoria.value = arregloTareas[i].category;
      
  });

  const prioridad = document.querySelectorAll('#priority');
  prioridad.forEach((s, i) => {
    s.addEventListener('change', (event) => {
      arregloTareas[i].priority = event.target.value;
      localStorage.setItem('items', JSON.stringify(arregloTareas));
    });
  });

  const categoria = document.querySelectorAll('#category');
  categoria.forEach((s, i) => {
    s.addEventListener('change', (event) => {
      arregloTareas[i].category = event.target.value;
      localStorage.setItem('items', JSON.stringify(arregloTareas));
    });
  });
};

// Darle vida a los botones "Guardar" y "Cancelar" para un índice específico
// Permite que la acción guardar el nuevo nombre de la tarea cuando decides editar y que impacte el DOM del HTML, acá debes agegar algoritmo de actualizar tarea
function activateSaveListeners() {
  const saveBtn = document.querySelectorAll('.saveBtn')
  const inputs = document.querySelectorAll('.input-controller textarea')
  saveBtn.forEach((saveBtn, index) => {
    saveBtn.addEventListener('click', () => {
      // Llamar la función que guarda la actualización la tarea
      console.log(arregloTareas[index].thing)
      const textareaValue = inputs[index].value;
      console.log(textareaValue)
      arregloTareas[index].thing = textareaValue;
      localStorage.setItem('items',JSON.stringify(arregloTareas))
      location.reload()
    })
  })
}
 
function activateCancelListeners() {
  const cancelarBtn = document.querySelectorAll('.cancelBtn');
  const controladorActualizacion = document.querySelectorAll('.update-controller');
  const inputs = document.querySelectorAll('.input-controller textarea');

  cancelarBtn.forEach((btnCancel, index) => {
    btnCancel.addEventListener('click', () => { 
      controladorActualizacion[index].style.display = 'none';
      inputs[index].disabled = true;
      inputs[index].style.border = 'none';
      location.reload();
    });
  });
}

// Llamar a la función para activar los listeners de cancelación
activateCancelListeners();
