// Datos del lugar
const validarLugares =()=>{
    const datosLugar = {
        name: document.querySelector('#nombreLugar').value,
        description: document.querySelector('#desLugar').value,
        address: document.querySelector('#direccionLugar').value,
        phone: document.querySelector('#telLugar').value,
      };
      
      fetch('http://localhost:4000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosLugar)
      })
        .then(response => response.json())
        .then(data => {
          // Manejar la respuesta de la solicitud POST
          console.log('Respuesta:', data);
        })
        .catch(error => {
          // Manejar cualquier error de la solicitud POST
          console.error('Error:', error);
        });
      
}

