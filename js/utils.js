//Variables globales
const urlDestinoPlaces = "http://localhost:4000/places.html";

const urlDestinoListPlaces = "http://localhost:4000/listPlaces.html"; //cambiar por proxima pagina principal

//validar Formularios

const validarFormulario= () => {
    movil = document.querySelector('#login-tel');
    password = document.querySelector('##login-tel');
    let arrErores = [];

    if (movil === "") {
        window.alert('Ingrese un numero de telefono');
        arrErores.push('Sin numero de telefon');
    }
    if(movil.length < 10){
        window.alert('Ingrese un numero con 10 digitos');
        arrErores.push('Numero menor a 10 digitos')
    }
    if(movil.length > 10){
        window.alert('El numero ingresado tiene mas de 10 digitos');
        arrErores.alert('Numero mayor a 10 digitos');
    }
    if(password < 7){
        window.alert('La contraseña es demasiado corta');
    }
    if(password === ""){
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
        movil: document.querySelector('#login-tel').value,
        password: document.querySelector("#login-pass").value
    };
    return datosFormulario;
}

const guardatBtn = () => {
    let $formulario = document.querySelector('#btn-Login');
    $formulario.onclick = function boton(){

        let login_valido = validarFormulario();
        if (login_valido) {
            const temp = guardarFormulario();
            console.log(temp);   
        }
    }
}


//sign-in
const guardarFormularioSignIn = () => {
    let datos_Sign_in = {
        movil: document.querySelector("#sign-in-tel"),
        password: document.querySelector('sing-in-pass')
    }
    return datos_Sign_in;
}

const guardarBtnSignIn = () =>{
    let $formulario_sign_in = document.querySelector('btn-Sign-in');
    $formulario_sign_in.onclick = function btn(){
        let sign_in_valido = validarFormulario();
        if (sign_in_valido) {
            const temp = guardarFormularioSignIn();
            guardarUsuario(temp);
        }
    }

}

//Redirecciones
const redireccion = () =>{
    window.location.href = urlDestinoListPlaces;
}

//Manjo de datos
const guardarUsuario = (datos) =>{
    fetch('http://localhost:4000/api/auth/new',{
        metod: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(datos)
    }).then(function(response){
        if(response.ok){
            window.alert('Se registro de manera correcta');
            redireccion();
            return response.json();
        }
        throw new Error('No se pudo guardar sus datos')
    }).catch(function(error){
        console.log('Error: ', error.message);
    })
}
