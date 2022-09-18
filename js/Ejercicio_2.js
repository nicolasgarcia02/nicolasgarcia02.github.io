let boton = document.getElementById("boton")
function ejercicio2(){
    let tempe = parseInt(document.getElementById("temp").value)
    let vas = document.getElementById("vas").value
    let desea = document.getElementById("desea").value
    if(vas==1 && desea==1){
        alert(`No se puede convertir, por que son del mismo tipo`)
    }
    else if(vas==2 && desea==2){
        alert(`No se puede convertir, por que son del mismo tipo`)
    }
    else if(vas==3 && desea==3){
        alert(`No se puede convertir, por que son del mismo tipo`)
    }
    else if(vas==1 && desea==2){
        let temp=((tempe-32)/1.8);
        alert(`La convercion de Fahrenheit a Celsius es de: ${temp}`)
    }
    else if(vas==1 && desea==3){
        let temp=((tempe-32)*5/9)+273.15
        alert(`La convercion de Fahrenheit a Kelvin es de: ${temp}`)
    }
    else if(vas==2 && desea==1){
        let temp=(tempe*9/5)+32;
        alert(`La convercion de Celsius a Fahrenheit es de: ${temp}`)
    }
    else if(vas==2 && desea==3){
        let temp=tempe+273.15;
        alert(`la convercion de Celsius a kelvin es de: ${temp}`)
    }
    else if(vas==3 && desea==1){
        let temp=((tempe-273.15)*9/5+32)+32
        alert(`la convercion de kelvin a Fahrenheit es de: ${temp}`)
    }
    else if(vas==3 && desea==2){
        let temp=tempe-273.15
        alert(`la convercion de kelvin a Celsius es de:  ${temp}`)
    }
}
boton.addEventListener('click', ejercicio2)