/* 
El siguiente código lo podrás usar para renderizar en tu front el panel de 
cada tarea de tu aplicación
*/
function displayItems() {
  let items = ''
  for (let i = 0; i < arregloTareas.length; i++) {
    items += `    <div class="item">
                    <div class="input-controller">
                      <input class="toggle" type="checkbox" id="check_${i}" ${
      arregloTareas[i].complete ? 'checked' : ''
    } />
                      <textarea disabled>${arregloTareas[i].thing}</textarea>
                      <div class="edit-controller">
                        <div>
                          Prioridad
                          <select id="priority">
                            <option ${
                              arregloTareas[i].priority === 'Alta'
                                ? 'selected'
                                : ''
                            }>Alta</option>
                            <option ${
                              arregloTareas[i].priority === 'Media'
                                ? 'selected'
                                : ''
                            }>Media</option> 
                            <option ${
                              arregloTareas[i].priority === 'Baja'
                                ? 'selected'
                                : ''
                            }>Baja</option> 
                          </select>
                        </div>
                        <div>
                          Categorías
                          <select id="category">
                              <option ${
                                arregloTareas[i].category === 'Casa'
                                  ? 'selected'
                                  : ''
                              }>Casa</option>
                              <option ${
                                arregloTareas[i].category === 'Trabajo'
                                  ? 'selected'
                                  : ''
                              }>Trabajo</option>
                              <option ${
                                arregloTareas[i].category === 'Universidad'
                                  ? 'selected'
                                  : ''
                              }>Universidad</option> 
                              <option ${
                                arregloTareas[i].category === 'CodigoC13'
                                  ? 'selected'
                                  : ''
                              }>CodigoC13</option> 
                            </select>
                        </div>
                        <i class="fa-solid fa-pen-to-square editBtn"></i>
                        <i class="fa-solid fa-x deleteBtn"></i>
                      </div>
                    </div>
                    <div class="update-controller">
                    <button class="saveBtn">Save</button>
                     <button class="cancelBtn">Cancel</button>
                    </div>
                  </div>`
  }
  document.querySelector('.todo-list').innerHTML = items
  activateCheckboxListeners()
  activateDeleteListeners()
  activateEditListeners()
  activateSaveListeners()
  activateCancelListeners()
}
