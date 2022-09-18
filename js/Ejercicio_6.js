const formulario = document.getElementById("formulario")
const inputs = document.querySelectorAll("#formulario input")
const expresiones = {
	tDoc: /^[a-zA-ZÀ-ÿ\s]$/,
    nDoc: /^\d{7,10}$/,
    nom: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    ape: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    fNac: /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/,
    cor: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{4,12}$/
}
const campos = {
    tDoc: false,
    nDoc: false,
    nom: false,
    ape: false,
    fNac: false,
    cor: false,
    password: false
}
const validarFormulario = (e) => {
    switch (e.target.name) {
        case "tDoc":
            validarCampo(expresiones.tDoc, e.target, 'tDoc')
            break;
        case "nDoc":
            validarCampo(expresiones.nDoc, e.target, 'nDoc')
            break;
        case "nom":
            validarCampo(expresiones.nom, e.target, 'nom')
            break;
        case "ape":
            validarCampo(expresiones.ape, e.target, 'ape')
            break;
        case "fNac":
            validarCampo(expresiones.fNac, e.target, 'fNac')
            break;
        case "cor":
            validarCampo(expresiones.cor, e.target, 'cor')
            break;
        case "password":
            validarCampo(expresiones.password, e.target, 'password')
            validarPassword2()
            break;
        case "password2":
            validarPassword2()
            break;
    }
}
const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto')
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto')
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle')
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle')
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo')
        campos[campo] = true
    }
    else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto')
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto')
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle')
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle')
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo')
        campos[campo] = false
    }
}
const validarPassword2 = () => {
    const inputPassword1 = document.getElementById("password")
    const inputPassword2 = document.getElementById("password2")
    if (inputPassword1.value !== inputPassword2.value) {
        document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto')
        document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto')
        document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle')
        document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle')
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo')
        campos['password'] = false
    }
    else {
        document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto')
        document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto')
        document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle')
        document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle')
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo')
        campos['password'] = true
    }
}
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
})
formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    const tDeUso = document.getElementById("tDeUso")
    const tDoc = document.getElementById("tDoc")
    if (tDoc.selected && campos.nDoc && campos.nom && campos.ape && campos.fNac && campos.cor && campos.password && tDeUso.checked) {
        formulario.reset()
        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo')
        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo')
        }, 9000)
        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto')
        })
    }
    else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo')
    }
})