
let formulario = document.querySelector(".formulario")
let mascaraForms = document.querySelector(".mascara-formulario")

function mostrarFormulario(){
    formulario.style.left = "50%"
    formulario.style.transform = "translateX(-50%)"
    mascaraForms.style.visibility = "visible"
    
}

function esconderFormulario(){
    formulario.style.left = "-235px"
    formulario.style.transform = "translateX(0)"
    mascaraForms.style.visibility = "hidden"
}