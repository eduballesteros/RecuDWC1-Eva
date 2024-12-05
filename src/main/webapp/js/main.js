
import { manejarFormulario, verEnGrande, cerrarImagen } from './function.js';


// Asociar el evento de envío del formulario con la función manejarFormulario
document.getElementById("formularioUsuario").addEventListener("submit", manejarFormulario);

// Asociar las funciones de visualización de imagen grande
window.verEnGrande = verEnGrande;
window.cerrarImagen = cerrarImagen;
