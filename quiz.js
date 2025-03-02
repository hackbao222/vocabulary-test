// Lấy dữ liệu từ URL
const urlParams = new URLSearchParams(window.location.search);
const vocabList = JSON.parse(decodeURIComponent(urlParams.get('vocab')));

let currentQuestionIndex = 0;
let correctAnswers = 0;

const questionContainer = document.getElementById('question');
const answerInput = document.getElementById('answer');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');

// Hiển thị câu hỏi đầu tiên
function showQuestion() {
    if (currentQuestionIndex < vocabList.length) {
        const currentVocab = vocabList[currentQuestionIndex];
        questionContainer.textContent = `Từ vựng: ${currentVocab.word}`;
        answerInput.value = '';
        answerInput.focus();
    } else {
        showResult();
    }
}

// Kiểm tra câu trả lời của học sinh
nextButton.addEventListener('click', () => {
    const currentVocab = vocabList[currentQuestionIndex];
    const answer = answerInput.value.trim().toLowerCase();

    if (answer === currentVocab.meaning.toLowerCase()) {
        correctAnswers++;
    }

    currentQuestionIndex++;
    showQuestion();
});

// Hiển thị kết quả
function showResult() {
    resultContainer.style.display = 'block';
    const score = (correctAnswers / vocabList.length) * 100;
    scoreElement.textContent = `Điểm của bạn: ${score.toFixed(2)}%`;
}

showQuestion();
