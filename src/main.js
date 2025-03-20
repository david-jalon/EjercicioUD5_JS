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

const title = document.getElementById("title");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

let pos = 0;

function mopstrarQuestion(){
    title.innerHTML = questions[pos].question;
    btn1.innerHTML = questions[pos].answer[0];
    btn2.innerHTML = questions[pos].answer[1];
    btn3.innerHTML = questions[pos].answer[2];
}

function responder(respuesta){
    if(respuesta == questions[pos].correctAnswer){
        alert("Muy bien")
        pos++
        mopstrarQuestion()
    }else{
        alert("Muy mal")
    }
}

mopstrarQuestion()