// Obtener referencia al formulario
var form = document.querySelector('form');

// Agregar evento de envío del formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir envío del formulario por defecto

  // Obtener valores de los campos del formulario
  var nombre = document.querySelector('#nombre').value;
  var correo = document.querySelector('#correo').value;
  var mensaje = document.querySelector('#mensaje').value;

  // Validar los campos
  if (nombre === '' || correo === '' || mensaje === '') {
    alert('Por favor, complete todos los campos del formulario.');
  } else {
    // Enviar el formulario o realizar acciones adicionales aquí
    alert('¡Gracias por realizar tu compra!');
    form.reset(); // Reiniciar el formulario
  }
});

