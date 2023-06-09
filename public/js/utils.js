//Variables globales
const urlDestinoPlaces = "http://localhost:4000/places.html";

const urlDestinoListPlaces = "http://localhost:4000/"; //cambiar por proxima pagina principal



//validar Formularios

const validarFormulario= () => {
    let name = document.querySelector('#sign-in-name');
    let phone = document.querySelector('#sign-in-tel');
    let password = document.querySelector('#sing-in-pass');
    let arrErores = [];

    if (name.value ==="") {
        window.alert('Ingrese su nombre');
        arrErores.push('Nombre esta vacio')
    }
    if (phone.value === "") {
        window.alert('Ingrese un numero de telefono');
        arrErores.push('Sin numero de telefon');
    }
    if(phone.value.length < 10){
        window.alert('Ingrese un numero con 10 digitos');
        arrErores.push('Numero menor a 10 digitos')
    }
    if(phone.value.length > 10){
        window.alert('El numero ingresado tiene mas de 10 digitos');
        arrErores.alert('Numero mayor a 10 digitos');
    }
    if(password.value.length < 6){
        window.alert('La contraseña es demasiado corta');
    }
    if(password.value === ""){
        window.alert('Ingrese su contraseña')
    }
    if (arrErores.length > 0) {
        return false
    } else {
        return true;
    }

}

//login
const guardarFormulario = () => {
    let datosFormulario = {
      phone: document.querySelector('#login-tel').value,
      password: document.querySelector("#login-pass").value
    };
    return datosFormulario;
  }
  
  const guardarBtn = () => {
    let $formulario = document.querySelector('#btn-Login');
    $formulario.onclick = function boton() {
      let login_valido = validarFormulario();
      if (login_valido) {
        const temp = guardarFormulario();
        console.log(temp);
        realizarSolicitudGet();
      }
    }
  }
  
  const realizarSolicitudGet = () => {
    const id = '1'; // Reemplaza con el ID correspondiente
    const url = `http://localhost:4000/user/${id}`;
  
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        // Manejar la respuesta de la solicitud GET
        console.log('Respuesta:', data);
      })
      .catch(error => {
        // Manejar cualquier error de la solicitud GET
        console.error('Error:', error);
      });
  }
  
  // Llamar a la función para guardar el formulario y realizar la solicitud GET
  guardarBtn();
  


//sign-in
const guardarFormularioSignIn = () => {
    let datos_Sign_in = {
        name: document.querySelector('#sign-in-name').value,
        phone: document.querySelector("#sign-in-tel").value,
        password: document.querySelector('#sing-in-pass').value,
        img: document.querySelector('#sing-in-img').value,
        age: document.querySelector('#sing-in-edad').value,
        owner: 1
    }
    return datos_Sign_in;
}

const guardarBtnSignIn = () =>{
    let $formulario_sign_in = document.querySelector('#btn-Sign-in');
    $formulario_sign_in.onclick = function boton(){
        let sign_in_valido = validarFormulario();
        if (sign_in_valido) {
            const temp = guardarFormularioSignIn();
            console.log(temp);
            guardarUsuario(temp);
        }
    }

}

//Redirecciones
function redireccion(){
    window.location.href = urlDestinoPlaces;
}
function redireccion2(){
    window.location.href = urlDestinoListPlaces;
}

//Manjo de datos
const guardarUsuario = (datos) =>{

    datos['age'] = "23"

    const data = {
        "name": "Ejemplo 1",
        "phone": "9984947281",
        "password": "1234567",
        "img": "123",
        "age": "23",
        "owner": 1
    }

    fetch('http://localhost:4000/api/auth/new',{
        method: 'POST',
        body: JSON.stringify(datos),
        headers:{
          'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
    // Maneja la respuesta de la solicitud POST
    console.log('Respuesta:', data);
    }).catch(function(error){
        console.log('Error: ', error.message);
    })
}

guardarBtnSignIn();