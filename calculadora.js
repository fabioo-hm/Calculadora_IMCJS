function CalculoIMC(){
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;

    if (!nombre || !edad || isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, completa todos los campos correctamente.");
        Reiniciar();
        return;
    }

    const imc = (peso / (altura ** 2)).toFixed(2);
    let imagen = '';
    let mensaje ='';

    if (imc < 18.5) {
        mensaje = "Bajo peso";
        imagen = "img/imc_1.jpg";
    } else if (imc >= 18.5 && imc <= 24.9) {
        mensaje = "Peso normal";
        imagen = "img/imc_2.webp";
    } else if (imc >= 25 && imc <= 29.9) {
        mensaje = "Sobrepeso";
        imagen = "img/imc_3.webp";
    } else {
        mensaje = "Obesidad";
        imagen = "img/imc_4.webp";
    }

    document.getElementById("resultado").innerHTML = `
        <p>${nombre}, tu IMC es <strong>${imc}</strong> — ${mensaje}</p>
    `;
    const imgElement = document.getElementById("imagenResultado");
    imgElement.src = imagen;
    imgElement.style.display = "block";

    document.getElementById("btnNuevo").style.display = "block";
}
function Reiniciar() {
    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";

    document.getElementById("resultado").innerHTML = "";
    document.getElementById("imagenResultado").src = "";
    document.getElementById("imagenResultado").style.display = "none";
    document.getElementById("btnNuevo").style.display = "none";

}
