let startQuizBtn = document.getElementById('start-btn');
let displayQuestion = document.getElementById('quiz-questions');
let questionData = document.getElementById('question');
let answerData = document.getElementById('answer-btns');
let presentQuestion;

startQuizBtn.addEventListener('click', startQuiz);

function startQuiz() {
    console.log('Started Country Quiz');
    startQuizBtn.style.display = "none";
    presentQuestion = questions.sort();
    presentQuestionI = 0;
    displayQuestion.classList.remove('vanish');
    quizQuestion();
}

function quizQuestion() {
    seeableQuestion(presentQuestion[presentQuestionI]);
}

function seeableQuestion(question) {
    questionData.innerText = question.question;
    question.answers.forEach(answer => {
        let btn = document.createElement('btn');
        btn.innerText = answer.text;
        btn.classList.add('btns');
        if (answer.correct ) {
            btn.dataset.correct = answer.correct;
        }
        btn.addEventListener('click', chosenAnswer);
        answerData.appendChild(btn);
    })

}

function chosenAnswer(event) {

}

/* Quiz questions */
let questions = [
    {
        question: '1. What country is the most populated? (from 2024)',
        answers: [
            { text: 'China', correct: false },
            { text: 'India', correct: true },
            { text: 'United States of America', correct: false },
            { text: 'Pakistan', correct: false }
        ]
    },
    {
        question: '2. What animal does Bhutan have on their flag?',
        answers: [
            { text: 'Dragon', correct: true },
            { text: 'Horse', correct: false },
            { text: 'Snake', correct: false },
            { text: 'Kraken', correct: false }
        ]
    },
    {
        question: '3. What is the biggest country by area?',
        answers: [
            { text: 'Canada', correct: false },
            { text: 'Russia', correct: true },
            { text: 'United States of America', correct: false },
            { text: 'China', correct: false }
        ]
    },
    {
        question: '4. What country has never fought in a war?',
        answers: [
            { text: 'Iceland', correct: false },
            { text: 'Sweden', correct: false },
            { text: 'San Marino', correct: true },
            { text: 'Cyprus', correct: false }
        ]
    },
    {
        question: '5. What country has the most colours on their flag?',
        answers: [
            { text: 'South Africa', correct: false },
            { text: 'Central African Republic', correct: false },
            { text: 'Seychelles', correct: false },
            { text: 'Belize', correct: true }
        ]
    },
    {
        question: "6. What is the world's newest country? (recognised independence from inital country)",
        answers: [
            { text: 'Montenegro', correct: false },
            { text: 'Serbia', correct: false },
            { text: 'South Sudan', correct: true },
            { text: 'Kosovo', correct: false }
        ]
    },
    {
        question: '7. What country has the highest female to male ratio? (from 2024)',
        answers: [
            { text: 'Armenia', correct: true },
            { text: 'Ukraine', correct: false },
            { text: 'Belarus', correct: false },
            { text: 'Latvia', correct: false }
        ]
    },
    {
        question: '8. What country has the most islands being over 250,000?',
        answers: [
            { text: 'Sweden', correct: true },
            { text: 'Philippines', correct: false },
            { text: 'Indonesia', correct: false },
            { text: 'Norway', correct: false }
        ]
    },
    {
        question: '9. What country has the longest coastline?',
        answers: [
            { text: 'Croatia', correct: false },
            { text: 'Canada', correct: true },
            { text: 'Singapore', correct: false },
            { text: 'Japan', correct: false }
        ]
    },
    {
        question: '10. What country is the most visited in the world? (from 2024)',
        answers: [
            { text: 'Mexico', correct: false },
            { text: 'Turkey', correct: false },
            { text: 'Spain', correct: true },
            { text: 'France', correct: false }
        ]
    }
]