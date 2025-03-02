// Lưu trữ từ vựng trong một mảng
let vocabList = [];

// Lấy các phần tử DOM
const wordInput = document.getElementById('word');
const meaningInput = document.getElementById('meaning');
const addButton = document.getElementById('add-word');
const vocabListElement = document.getElementById('vocab-list');
const generateLinkButton = document.getElementById('generate-link');
const linkUrlElement = document.getElementById('link-url');

// Hàm thêm từ vựng vào danh sách
addButton.addEventListener('click', () => {
    const word = wordInput.value.trim();
    const meaning = meaningInput.value.trim();

    if (word && meaning) {
        vocabList.push({ word, meaning });
        updateVocabList();
        wordInput.value = '';
        meaningInput.value = '';
    } else {
        alert('Vui lòng nhập cả từ vựng và nghĩa!');
    }
});

// Cập nhật danh sách từ vựng
function updateVocabList() {
    vocabListElement.innerHTML = '';
    vocabList.forEach((vocab, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${vocab.word} - ${vocab.meaning} 
                        <button onclick="removeVocab(${index})">Xóa</button>`;
        vocabListElement.appendChild(li);
    });
}

// Hàm xóa từ vựng khỏi danh sách
function removeVocab(index) {
    vocabList.splice(index, 1);
    updateVocabList();
}

// Tạo link kiểm tra cho học sinh
generateLinkButton.addEventListener('click', () => {
    if (vocabList.length === 0) {
        alert('Vui lòng thêm ít nhất một từ vựng!');
        return;
    }

    const url = `https://yourusername.github.io/vocabulary-test/quiz.html?vocab=${encodeURIComponent(JSON.stringify(vocabList))}`;
    linkUrlElement.textContent = `Link kiểm tra: ${url}`;
});
