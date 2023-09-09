
function activateCheckboxListenershipCheck() {
  const checkboxes = document.querySelectorAll('.toggle');
  checkboxes.forEach((ch, i) => {
    ch.addEventListener('click', () => {
      arregloTareas[i].complete = ch.checked;
      arregloTareas[i].dontComplete = !ch.checked;
      localStorage.setItem('items', JSON.stringify(arregloTareas));
      contadorPendientes();
    });
  });
}

window.addEventListener('load', () => {
  contadorPendientes();
  activateCheckboxListenershipCheck();
});