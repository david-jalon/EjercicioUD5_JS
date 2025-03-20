// Array con todas las preguntas
const questions = [
    {
        question: "Pregunta 1",
        answer: [
            "Respuesta 1.1",
            "Respuesta 1.2",
            "Respuesta 1.3"
        ],
        correctAnswer: 1
    },
    {
        question: "Pregunta 2",
        answer: [
            "Respuesta 2.1",
            "Respuesta 2.2",
            "Respuesta 2.3"
        ],
        correctAnswer: 2
    },
    {
        question: "Pregunta 3",
        answer: [
            "Respuesta 3.1",
            "Respuesta 3.2",
            "Respuesta 3.3"
        ],
        correctAnswer: 3
    },
    {
        question: "Pregunta 4",
        answer: [
            "Respuesta 4.1",
            "Respuesta 4.2",
            "Respuesta 4.3"
        ],
        correctAnswer: 2
    },
    {
        question: "Pregunta 5",
        answer: [
            "Respuesta 5.1",
            "Respuesta 5.2",
            "Respuesta 5.3"
        ],
        correctAnswer: 2
    },
    {
        question: "Pregunta 6",
        answer: [
            "Respuesta 6.1",
            "Respuesta 6.2",
            "Respuesta 6.3"
        ],
        correctAnswer: 2
    },
    {
        question: "Pregunta 7",
        answer: [
            "Respuesta 7.1",
            "Respuesta 7.2",
            "Respuesta 7.3"
        ],
        correctAnswer: 2
    },
    {
        question: "Pregunta 8",
        answer: [
            "Respuesta 8.1",
            "Respuesta 8.2",
            "Respuesta 8.3"
        ],
        correctAnswer: 2
    },
    {
        question: "Pregunta 9",
        answer: [
            "Respuesta 9.1",
            "Respuesta 9.2",
            "Respuesta 9.3"
        ],
        correctAnswer: 2
    },
    {
        question: "Pregunta 10",
        answer: [
            "Respuesta 10.1",
            "Respuesta 10.2",
            "Respuesta 10.3"
        ],
        correctAnswer: 2
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
    } else {
        botones[respuesta - 1].classList.remove("bg-slate-100");
        botones[respuesta - 1].classList.add("bg-red-500", "text-white"); // Fondo rojo para la incorrecta
        botones[questions[pos].correctAnswer - 1].classList.remove("bg-slate-100");
        botones[questions[pos].correctAnswer - 1].classList.add("bg-green-500", "text-white"); // Mostrar la correcta en verde
    }

    // Deshabilitamos los botones para evitar múltiples selecciones
    botones.forEach(boton => boton.disabled = true);

    // Pasamos a la siguiente pregunta después de un pequeño retraso
    setTimeout(() => {
        pos++;
        if (pos < questions.length) {
            mostrarPregunta();
            // Se reestablecen los estilos y habilitar los botones
            botones.forEach(boton => {
                boton.classList.remove("bg-green-500", "bg-red-500", "text-white");
                botones[respuesta - 1].classList.add("bg-slate-100"); // Devolvemos el fondo gris
                boton.disabled = false;
            });
        } else {
            alert("Quiz terminado. Puntos: " + puntos);
        }
    }, 1000); // Esperamos 1 segundo antes de pasar a la siguiente pregunta
}


mostrarPregunta();