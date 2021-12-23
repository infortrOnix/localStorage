 //comprobamos que el navegador soporta LocalStorage

 if(typeof(Storage)!="undefined"){
    alert("Su navegador soporta Local Storage");
}else{
    elert("Su navegador no soporta Local Storage");
}

// crear un elemento ( siempre sera cadenas de string)

localStorage.setItem("miLocal","Merliques");

//consultar o traer un valor de localstoroga

alert(localStorage.getItem("miLocal"));


//borrar un elemento de localstorage

localStorage.removeItem("miLocal");

// borrar todos los elementos de local Storage

localStorage.clear();

//opcion a localStorage es windows.sessionStorage almacena los datos durante una sesion
// si cerramos la ventana o el navegador se borra
