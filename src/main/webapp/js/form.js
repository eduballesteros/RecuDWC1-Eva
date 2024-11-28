document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');
    const dataTable = document.getElementById('dataTable');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Obtener datos del formulario
      const email = document.getElementById('email').value;
      const nombre = document.getElementById('nombre').value;
      const horario = document.querySelector('input[name="horario"]:checked').value;
      const notificaciones = document.getElementById('notificaciones').checked ? 'Sí' : 'No';
  
      // Crear una nueva fila
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${email}</td>
        <td>${nombre}</td>
        <td>${horario}</td>
        <td>${notificaciones}</td>
      `;
  
      // Agregar la fila a la tabla
      dataTable.appendChild(newRow);
  
      // Limpiar el formulario
      form.reset();
      document.getElementById('mañana').checked = true;
    });
  });
  