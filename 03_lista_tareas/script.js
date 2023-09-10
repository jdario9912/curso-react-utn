const btn = document.querySelector('[data="btn_guardar"]');

const capturar_tarea = (e) => {
  const tarea = document.querySelector('[data="tarea"]');
  const lista = document.querySelector('[data="lista_tareas"]');

  if (tarea.value !== "") {
    const item = document.createElement("li");
    const btn_eliminar = document.createElement("button");

    btn_eliminar.textContent = "eliminar";
    btn_eliminar.className = "btn_eliminar";

    item.className = "tarea";
    item.innerHTML = tarea.value.trim();
    item.appendChild(btn_eliminar);

    lista.appendChild(item);
    tarea.value = "";
    tarea.focus();
  }
};

btn.addEventListener("click", capturar_tarea);
