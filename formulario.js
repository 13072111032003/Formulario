document.getElementById('clienteForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que se envíe el formulario

    // Obtener los valores ingresados por el usuario
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const cedula = document.getElementById('cedula').value;
    const ruc = document.getElementById('ruc').value;
    const email = document.getElementById('email').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;

    // Aquí puedes realizar acciones como enviar los datos a un servidor o guardarlos en una base de datos
    console.log('Datos del cliente:');
    console.log('Nombre:', nombre);
    console.log('Edad:', edad);
    console.log('Cedula:', cedula);
    console.log('Email:', email);
    console.log('Direccion:', direccion);
    console.log('Teléfono:', telefono);

    // Limpiar el formulario después de enviar los datos
    document.getElementById('cliente-form').reset();
});


    
