let boton = document.getElementById("boton")
function ejercicio1(){
    let palabra = document.getElementById("pal").value
    let opcion = document.getElementById("op").value
if(opcion==1){
    let long = palabra.length
    alert(`La longitud de la palabra es: ${long}`)
}
else if(opcion==2){
    let may = palabra.toUpperCase()
    alert(`La palabra en mayusculas es: ${may}`)
}
else if(opcion==3){
    let min = palabra.toLowerCase()
    alert(`La palabra en mayusculas es: ${min}`)
}
else if(opcion==4){
    let caracter = palabra.charAt(0)
    alert(`La primera letra es: ${caracter}`)
}
}
boton.addEventListener('click', ejercicio1)