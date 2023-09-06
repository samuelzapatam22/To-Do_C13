
function activateCheckboxListenershipCheck() {
    const checkboxes = document.querySelectorAll('.toggle');
    checkboxes.forEach((ch, i) => {
      ch.addEventListener('click', () => {
        arregloTareas[i].complete = ch.checked;
        localStorage.setItem('items', JSON.stringify(arregloTareas));
        contadorPendientes();
      });
    });
  }
  
  window.addEventListener('load', () => {
    contadorPendientes();
    activateCheckboxListenershipCheck(); // Llamado de la función después de cargar la página
  });