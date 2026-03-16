// Lilibeth Vera Ramirez

document.getElementById('btnCalcular').addEventListener('click', calcularRiesgo);

function calcularRiesgo(){
    const edad = parseInt(document.getElementById('edad').value);
    const presion = parseInt(document.getElementById('presion').value);
    const colesterol = parseInt(document.getElementById('colesterol').value);
    const fumador = document.getElementById('fumador').value;

    if (isNaN(edad) || isNaN(presion) || isNaN(colesterol) || fumador === "") {
        alert('Por favor, completar todos los campos.');
        return;
    }

    let puntos = 0;

    if (edad >= 45){
        puntos +=2;
    } else if (edad >= 35){
        puntos +=1;
    }
/**
 * 100
 */
    if (presion >= 140 ) {
        puntos +=3;
    } else if (presion >= 120) {
        puntos +=1;
    }

    if (colesterol >= 240){
        puntos +=3;
    } else if (colesterol >= 200){
        puntos +=1;
    }

    if (fumador == "si"){
        puntos +=3;
    }

    let nivel = "";
    let fondo = "";
    let recomendaciones = [];

    if (puntos <= 2){
        nivel = "Riesgo bajo";
        fondo = "green"
        recomendaciones = ["Sigue así 👍"]
    } else if (puntos >2 && puntos <= 5) {
        nivel = "Riesgo moderado";
        fondo = "yellow";
        recomendaciones = ["Considera cambios en el estilo de vida 🏃‍♂️"];
    } else {
        nivel = "Riesgo alto";
        fondo = "red";
        recomendaciones = ["Consulta a un médico 🩺"];
    }

    document.getElementById('resultado').style.backgroundColor = fondo;
    textoResultado.textContent = "Tu nivel de riesgo es: " + nivel + " | Puntos optenidos: " + puntos;

    const btnLimpiar = document.getElementById('btnLimpiar');
     btnLimpiar.addEventListener('click', function() {
        document.getElementById('edad').value = '';
        document.getElementById('presion').value = '';
        document.getElementById('colesterol').value = '';
        document.getElementById('fumador').value = '';
        textoResultado.textContent = '';
    });
}