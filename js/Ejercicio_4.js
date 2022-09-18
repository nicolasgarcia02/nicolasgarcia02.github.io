let boton=document.getElementById("boton");
function ejercicio4(){
    let nom=document.getElementById("nom").value
    let ape=document.getElementById("ape").value
    let mate=document.getElementById("mate").value
    if  (nom == 1 && ape== 1 && mate==1){
        alert(`Es correcto`)
    }
    else if  (nom == 1 && ape== 1 && mate==8){
        alert(`Es correcto`)
    }
    else if  (nom == 2 && ape== 2 && mate==2){
        alert(`Es correcto`)
    }
    else if  (nom == 3 && ape== 3 && mate==3){
        alert(`Es correcto`)
    }
    else if  (nom == 4 && ape== 4 && mate==4){
        alert(`Es correcto`)
    }
    else if  (nom == 5 && ape== 5 && mate==5){
        alert(`Es correcto`)
    }
    else if  (nom == 5 && ape== 5 && mate==5){
        alert(`Es correcto`)
    }
    else if  (nom == 6 && ape== 6 && mate==6){
        alert(`Es correcto`)
    }
    else if  (nom == 7 && ape== 7 && mate==7){
        alert(`Es correcto`)
    }
    else{
        alert(`Es incorrecto`)
    }
}
boton.addEventListener('click', ejercicio4)