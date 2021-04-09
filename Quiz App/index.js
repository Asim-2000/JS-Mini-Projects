const quizData = [
    {
        question: "How old is Asim",
        a: '10',
        b: '16',
        c: '21',
        d: '55',
        correct:'c'

    },

    {
        question: 'What is the most used programming language in 2020',
        a: 'Java',
        b: 'Python',
        c: 'JavScript',
        d: 'Go',
        correct: 'a'
    },

    {
        question: 'Who is the Prime Minister of Pakistan?',
        a: 'Asim',
        b: 'Nawaz',
        c: 'Zardari',
        d: 'Imran Khan',
        correct: 'd'
    },

    {
        question: 'Who is the President of Pakistan?',
        a: 'Asim',
        b: 'Nawaz',
        c: 'Zardari',
        d: 'Arif Ali',
        correct: 'd'
    },
]
const answers = document.querySelectorAll(".answers");
const questionEl = document.getElementById('question')
const a_text=document.getElementById('a_text')
const b_text=document.getElementById('b_text')
const c_text=document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const quiz = document.getElementById('quiz')

let currentQuestion = 0;
let score = 0;

loadQuiz();


function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;
    answers.forEach((answerEl)=> {
        if (answerEl.checked) {
            answer= answerEl.id
        }
    })
    return answer;
}

function deselectAnswers() {
    answers.forEach((answerEl) => {
      if (answerEl.checked) {
        answerEl.checked=false;
      }
    });
}

submitBtn.addEventListener("click", () => {

    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuestion].correct) {
        
            score++;
            
        } 
        currentQuestion++
        if (currentQuestion < quizData.length) {
          loadQuiz();
        } else {
            quiz.innerHTML =
                `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2><button onclick="location.reload()">Reload</button>`;
        }

    }
    deselectAnswers(); 
})
