
function sendLove() {
    const response = document.getElementById('response');
    if (response) {
        response.innerText = "🤗 Hays, I love you so much, lemme gib u a hug and a mwa!😘";
    }
}

function toggleLetter() {
    const envelope = document.querySelector('.envelope');
    if (envelope) {
        envelope.classList.toggle('open');
    }
}
