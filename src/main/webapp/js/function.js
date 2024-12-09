// Función para manejar el envío del formulario y agregar los datos a la tabla
export function manejarFormulario(event) {
  event.preventDefault(); // Prevenir que se recargue la página al darle a enviar.

  const email = document.getElementById("email").value;
  const nombre = document.getElementById("nombre").value;
  const horario = document.querySelector('input[name="horario"]:checked').value;
  const notificaciones = document.getElementById("notificaciones").checked ? 'Sí' : 'No';

  const tabla = document.getElementById("tablaDatos");
  const fila = document.createElement("tr");
  fila.innerHTML = `
    <td>${email}</td>
    <td>${nombre}</td>
    <td>${horario}</td>
    <td>${notificaciones}</td>
  `;
  
  tabla.appendChild(fila);

  document.getElementById("formularioUsuario").reset();
}
 // Función para ampliar la imagen
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
