function displayFooter() {
  let page = `
      <footer class="footer">
        <ul class="filters">
          <li>
          <span class="todo-count""><strong></strong> pendiente(s)</span>
          </li>
          <li>
            <a class="selected filtro" href="#/" onclick="showAll()">Todos</a>
          </li>
          <li>
            <a class="filtro" href="#/active" onclick="showPendientes()">Pendientes</a>
          </li>
          <li>
            <a class="filtro" href="#/completed" onclick="showCompletadas()">Completadas</a>
          </li>
          <li>
          <button class="clear-completed">Borrar completados</button>
          </li>
        </ul>
        
      </footer>
    `;
  document.querySelector('.footer').innerHTML = page;
}

