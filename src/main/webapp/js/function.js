export function gestionFormulario() {

  document.getElementById("formularioUsuario").addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const email = document.getElementById("email").value;
    const nombre = document.getElementById("nombre").value;
    const horario = document.querySelector('input[name="horario"]:checked').value;
    const notificaciones = document.getElementById("notificaciones").checked ? "Sí" : "No";

    const nuevaFila = document.createElement("tr");

    const correoCelda = document.createElement("td");
    correoCelda.textContent = email;
    nuevaFila.appendChild(correoCelda);

    const nombreCelda = document.createElement("td");
    nombreCelda.textContent = nombre;
    nuevaFila.appendChild(nombreCelda);

    const horarioCelda = document.createElement("td");
    horarioCelda.textContent = horario;
    nuevaFila.appendChild(horarioCelda);

    const notificacionesCelda = document.createElement("td");
    notificacionesCelda.textContent = notificaciones;
    nuevaFila.appendChild(notificacionesCelda);

    document.getElementById("tablaDatos").appendChild(nuevaFila);

    document.getElementById("formularioUsuario").reset();
  });

}

