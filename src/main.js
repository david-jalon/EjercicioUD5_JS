// Array con todas las preguntas
const questions = [
    {
        question: "1. ¿Cuántos puntos de vida tiene un jugador al comienzo de la partida?",
        answer: [
            "A) 10",
            "B) 30",
            "C) 20"
        ],
        correctAnswer: 3
    },
    {
        question: "2. ¿Cuántos tipos de cartas existen en Magic: The Gathering?",
        answer: [
            "A) Criatura, Magia, Conjuro, Encantamiento, Equipamiento y Tierras",
            "B) Criatura, Instantáneo, Conjuro, Encantamiento, Artefacto, Planeswalker y Tierra",
            "C) Criatura, Hechizo, Equipo, Artefacto, Encantamiento, Planeswalker y Tierras"
        ],
        correctAnswer: 2
    },
    {
        question: "3. ¿Cuántas cartas roba cada jugador en su turno inicial (en una partida normal de 1 vs 1)?",
        answer: [
            "A) 9",
            "B) 7",
            "C) 5"
        ],
        correctAnswer: 2
    },
    {
        question: "4. ¿Qué tipo de carta se usa para generar maná en la mayoría de los casos?",
        answer: [
            "A) Criaturas",
            "B) Tierras",
            "C) Encantamientos"
        ],
        correctAnswer: 2
    },
    {
        question: "5. ¿En qué fase se pueden lanzar instantáneos?",
        answer: [
            "A) Solo en la fase de combate",
            "B) Solo en la fase principal",
            "C) En cualquier fase del turno y en respuesta a otras acciones"
        ],
        correctAnswer: 3
    },
    {
        question: "6. ¿Qué pasa si una criatura tiene más resistencia que el daño recibido en un turno?",
        answer: [
            "A) Sobrevive y se cura al final del turno",
            "B) Pierde puntos de resistencia permanentemente",
            "C) Se destruye si recibe cualquier cantidad de daño"
        ],
        correctAnswer: 1
    },
    {
        question: "7. ¿Qué significa la palabra clave \"Vínculo Vital?\"?",
        answer: [
            "A) La criatura solo puede ser bloqueada por criaturas con la misma habilidad",
            "B) Cuando una criatura con esta habilidad hace daño, el controlador gana esa cantidad de vida",
            "C) La criatura puede ser regenerada una vez por turno"
        ],
        correctAnswer: 2
    },
    {
        question: "8. ¿Qué condición debe cumplirse para que un jugador pierda la partida?",
        answer: [
            "A) No poder lanzar hechizos durante 3 turnos consecutivos",
            "B) Tener 5 tierras en el campo",
            "C) Tener 0 o menos puntos de vida"
        ],
        correctAnswer: 3
    },
    {
        question: "9. ¿Cuántas tierras puede jugar un jugador por turno, salvo efectos adicionales?",
        answer: [
            "A) 1",
            "B) 3",
            "C) 2"
        ],
        correctAnswer: 1
    },
    {
        question: "10. ¿Qué significa la habilidad \"Arrollar\"?",
        answer: [
            "A) La criatura gana +1/+1 por cada criatura que controle su oponente",
            "B) La criatura puede atacar en el turno en que entra al campo de batalla",
            "C) Si una criatura con esta habilidad hace más daño del necesario para destruir a un bloqueador, el daño sobrante se asigna al jugador o planeswalker defensor"
        ],
        correctAnswer: 3
    }
]

// Controlamos el funcionamiento del boton de inicio del quiz
document.getElementById("inicioboton").addEventListener("click", function(){
    document.getElementById("inicio").classList.add("hidden"); // Esconde el titulo
    document.getElementById("inicioboton").classList.add("hidden"); // Esconde el boton
    document.getElementById("iniciopregunta").classList.remove("hidden"); // Aparece el quiz
})

// Modificamos por id las prreguntas
const pregunta = document.getElementById("pregunta");
const resp1 = document.getElementById("resp1");
const resp2 = document.getElementById("resp2");
const resp3 = document.getElementById("resp3");
const resultado = document.getElementById("resultado");
const mensajeresultado = document.getElementById("mensajeresultado");
const barraprogreso = document.getElementById("barraprogreso");

// Posicion y puntos
let pos = 0;
let puntos = 0;

// Mostrar la pregunta
function mostrarPregunta(){
    pregunta.innerHTML = questions[pos].question;
    resp1.innerHTML = questions[pos].answer[0];
    resp2.innerHTML = questions[pos].answer[1];
    resp3.innerHTML = questions[pos].answer[2];
}

function responder(respuesta) {
    // Todos los botones de respuesta
    let botones = [resp1, resp2, resp3];

    // Comprobamos si la respuesta es correcta
    if (respuesta == questions[pos].correctAnswer) {
        botones[respuesta - 1].classList.remove("bg-slate-100");
        botones[respuesta - 1].classList.add("bg-green-500", "text-white"); // Fondo verde para la respuesta correcta
        puntos++;
        console.log("Posicion: " + pos);
    } else {
        botones[respuesta - 1].classList.remove("bg-slate-100");
        botones[respuesta - 1].classList.add("bg-red-500", "text-white"); // Fondo rojo para la incorrecta
        botones[questions[pos].correctAnswer - 1].classList.remove("bg-slate-100");
        botones[questions[pos].correctAnswer - 1].classList.add("bg-green-500", "text-white"); // Mostrar la correcta en verde
        console.log("Posicion: " + pos);
    }

    // Deshabilitamos los botones para evitar múltiples selecciones
    botones.forEach(boton => boton.disabled = true);

    // Pasamos a la siguiente pregunta después de un pequeño retraso
    setTimeout(() => {
        pos++;

        // Aumenta la barra de puntuación
        let aumentoBarra = (pos / questions.length) * 100; // Porcentaje basado en total de preguntas
        barraprogreso.style.width = `${aumentoBarra}%`; // Style para el aumento de la barra, con tailwind da problemas raros

        if (pos < questions.length) {
            mostrarPregunta();
            // Se reestablecen los estilos y habilitar los botones
            botones.forEach(boton => {
                boton.classList.remove("bg-green-500", "bg-red-500", "text-white"); // Quitamoss el color
                boton.classList.add("bg-slate-100"); // Devolvemos el fondo gris
                boton.disabled = false; // Volvemos a activar el boton
            });
        } else {
            alert("Quiz terminado. Puntos: " + puntos);
            document.getElementById("iniciopregunta").classList.add("hidden"); // Desaparece el quiz

            
            // Aparece la puntuación
            document.getElementById("puntuacion").classList.remove("hidden");
            resultado.innerHTML = puntos;

            //Mensaje sobre la puntuacion
            if(puntos < 5){
                mensajeresultado.innerHTML = "Puedes hacerlo mejor.";
            }else if(puntos >= 5 && puntos <= 7){
                mensajeresultado.innerHTML = "No está nada mal.";
            }else{
                mensajeresultado.innerHTML = "¡Lo has hecho genial!";
            }
        }
    }, 1000); // Esperamos 1 segundo antes de pasar a la siguiente pregunta

}


mostrarPregunta();