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
    }
]

// Controlamos el funcionamiento del boton del quiz
document.getElementById("inicioboton").addEventListener("click", function(){
    document.getElementById("inicio").classList.add("hidden"); // Esconde el titulo
    document.getElementById("inicioboton").classList.add("hidden"); // Esconde el boton
    document.getElementById("iniciopregunta").classList.remove("hidden"); // Aparece el quiz
})




const pregunta = document.getElementById("pregunta");
const resp1 = document.getElementById("resp1");
const resp2 = document.getElementById("resp2");
const resp3 = document.getElementById("resp3");

let pos = 0;

function mopstrarPregunta(){
    pregunta.innerHTML = questions[pos].question;
    resp1.innerHTML = questions[pos].answer[0];
    resp2.innerHTML = questions[pos].answer[1];
    resp3.innerHTML = questions[pos].answer[2];
}

function responder(respuesta){
    if(respuesta == questions[pos].correctAnswer){
        alert("Muy bien")
        pos++
        mopstrarPregunta()
    }else{
        alert("Muy mal")
    }
}

mopstrarPregunta()

