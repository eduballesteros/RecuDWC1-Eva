// Función para manejar el envío del formulario y agregar los datos a la tabla
export function manejarFormulario(event) {
  event.preventDefault(); // Prevenir el comportamiento por defecto del formulario (que recargue la página)

  // Obtener los valores del formulario
  const email = document.getElementById("email").value;
  const nombre = document.getElementById("nombre").value;
  const horario = document.querySelector('input[name="horario"]:checked').value;
  const notificaciones = document.getElementById("notificaciones").checked ? 'Sí' : 'No';

  // Crear una nueva fila en la tabla con los datos
  const tabla = document.getElementById("tablaDatos");
  const fila = document.createElement("tr");
  fila.innerHTML = `
    <td>${email}</td>
    <td>${nombre}</td>
    <td>${horario}</td>
    <td>${notificaciones}</td>
  `;
  
  // Agregar la nueva fila a la tabla
  tabla.appendChild(fila);

  // Limpiar el formulario
  document.getElementById("formularioUsuario").reset();
}
// Función para mostrar la imagen en grande en el div
export function verEnGrande(imagen) {
  const imagenUrl = imagen.src;
  const imagenGrande = document.getElementById("imagenGrande");
  imagenGrande.src = imagenUrl;
  document.getElementById("imagenGrandeContenedor").style.display = "block";
  
  // Ocultar todas las imágenes pequeñas
  const imagenes = document.querySelectorAll(".imagen-galeria");
  imagenes.forEach(imagen => imagen.classList.add("imagen-oculta"));
}

// Función para cerrar la imagen grande
export function cerrarImagen() {
  document.getElementById("imagenGrandeContenedor").style.display = "none";
  
  // Mostrar nuevamente las imágenes pequeñas
  const imagenes = document.querySelectorAll(".imagen-galeria");
  imagenes.forEach(imagen => imagen.classList.remove("imagen-oculta"));
}
