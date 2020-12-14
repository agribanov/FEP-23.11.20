const quizQuestions = [
    {
        text: 'Сколько будет 2+2?',
        answer: '4',
        type: 'prompt',
    },
    {
        text: 'Солнце встает на востоке?',
        answer: 'true',
        type: 'confirm',
    },
    {
        text: 'Сколько будет 5 / 0?',
        answer: 'infinity',
        type: 'prompt',
    },
    {
        text: 'Какого цвета небо?',
        answer: 'голубой',
        type: 'prompt',
    },
    {
        text:
            'Какой правильный ответ на главный вопрос жизни, вселенной и всего такого?',
        answer: '42',
        type: 'prompt',
    },
];

startQuiz(quizQuestions);

function startQuiz(questions) {
    let score = 0;

    questions.forEach((question) => (score += askQuestion(question) ? 10 : 0));

    showResult(score);
}

function askQuestion(question) {
    const answer = getUserAnswer(question);

    return answer.toLowerCase() === question.answer;
}

function getUserAnswer({ type, text }) {
    let answer = '';
    switch (type) {
        case 'prompt':
            answer = prompt(text);
            break;
        case 'confirm':
            answer = confirm(text);
            break;
    }

    return String(answer);
}

function showResult(score) {
    console.log(`Вы набрали ${score} очков`);
}
