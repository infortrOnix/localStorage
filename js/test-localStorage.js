function guardar(){
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let email = document.getElementById('e-mail').value;

    usuario=[{nombre: nombre,
                apellido: apellido,
            email: email}];


    localStorage.setItem('formulario', JSON.stringify(usuario));
    console.log(localStorage.getItem('formulario'));


}

function guardarOtro(){

//almacenamos el contenido del ls
let usuario = JSON.parse(localStorage.getItem('formulario'));
console.log(usuario);

    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let email = document.getElementById('e-mail').value;

    //usuario.push=({nombre, apellido, email});
    usuario.push({nombre: nombre,
        apellido: apellido,
    email: email});

    console.log(usuario);
    
    


    localStorage.setItem('formulario', JSON.stringify(usuario));
    console.log(localStorage.getItem('formulario'));


}


function mostrar(){

    if(localStorage.getItem != null){

       let datos = JSON.parse(localStorage.getItem('formulario'));
       console.log(datos);
       console.log(datos.nombre);
       console.log(datos.apellido);

       document.getElementById('apellidoP').innerHTML= datos.apellido;
       document.getElementById('nombreP').innerText = datos.nombre;
       document.getElementById('emailP').innerText = datos.email;

    }  


}

function buscarIndice(clave){

  
   
 
  return clave == prompt("ingresa el valor a buscar el indice :");
    

}

function mostrarIndice(){
    let usuario = JSON.parse(localStorage.getItem('formulario'));   
    console.log(usuario.findIndex(buscarIndice));

}

