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

const questionEl = document.getElementById('question')
const a_text=document.getElementById('a_text')
const b_text=document.getElementById('b_text')
const c_text=document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuestion = 0;

loadQuiz();


function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
    
    // currentQuestion++;

}

submitBtn.addEventListener("click", () => {

    // if (currentQuestion.correct===)

    currentQuestion++;
    loadQuiz();
    
})