function editarTarea(){
  document.querySelector('.todo-list').addEventListener('click', (event) => {
    if (event.target.classList.contains('editBtn')){ 
      activarEdit()
      activateSaveListeners()
      activateCancelListeners()
    }
  })
 };
const activarEdit = function() {
  const editarBtn = document.querySelectorAll('.editBtn')
  const controladorActualizacion = document.querySelectorAll('.update-controller')
  const input = document.querySelectorAll('.input-controller textarea')
  const seleccionarPrioridad = document.querySelectorAll(
    '.edit-controller select'
  )[0]
  const seleccionarCategoria = document.querySelectorAll(
    '.edit-controller select'
  )[1]

  editarBtn.forEach((eb, i) => {
    eb.addEventListener('click', () => {
      controladorActualizacion[i].style.display = 'block'
      input[i].disabled = false

      seleccionarPrioridad.value = arregloTareas[i].priority
      seleccionarCategoria.value = arregloTareas[i].category
    })
  })

  const prioridad = document.querySelectorAll('#priority')
  prioridad.forEach((s, i) => {
    s.addEventListener('change', (event) => {
      arregloTareas[i].priority = event.target.value
      localStorage.setItem('items', JSON.stringify(arregloTareas))
    })
  })

  const categoria = document.querySelectorAll('#category')
  categoria.forEach((s, i) => {
    s.addEventListener('change', (event) => {
      arregloTareas[i].category = event.target.value
      localStorage.setItem('items', JSON.stringify(arregloTareas))
    })
  })
};


function activateSaveListeners() {
  const guardarBtn = document.querySelectorAll('.saveBtn')
  const input = document.querySelectorAll('.input-controller textarea')
  guardarBtn.forEach((gB, i) => {
    gB.addEventListener('click', () => {
      updateItem(input[i].value, i)
    })
  })
};

function activateCancelListeners() {
  const cancelarBtn = document.querySelectorAll('.cancelBtn')
  const controladorActualizacion = document.querySelectorAll('.update-controller')
  const inputs = document.querySelectorAll('.input-controller textarea')
  
  cancelarBtn.forEach((cB, i) => {
    cB.addEventListener('click', () => {
      updateController[i].style.display = 'none'
      inputs[i].disabled = true
      inputs[i].style.border = 'none'
    })
  })
};
