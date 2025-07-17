const openBtn = document.getElementById('openBtn');
const envelope = document.getElementById('envelope');
const heartContainer = document.getElementById('heartContainer');
const messageElement = document.getElementById('message');
const bgMusic = document.getElementById('bgMusic');

// Sweet apology message
const messageText = 
`Hi Mads 💖

Sorry na kung may nagawa akong mali 😔

Pwede pa ba ako mag-sorry at makabawi sa’yo?
Reply ka naman please 🙏💌`;


// Typing animation
function typeMessage(text, element, speed = 50) {
    let i = 0;
    element.textContent = "";
    const interval = setInterval(() => {
        element.textContent += text.charAt(i);
        i++;
        if (i >= text.length) {
            clearInterval(interval);
        }
    }, speed);
}

// Floating hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '💖';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 10 + 20 + 'px';
    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}


function launchHearts() {
    const heartInterval = setInterval(createHeart, 150);
    setTimeout(() => clearInterval(heartInterval), 4000);
}

openBtn.addEventListener('click', () => {
    envelope.classList.add('open');
    openBtn.style.display = 'none';
    bgMusic.volume = 0.4;
    bgMusic.play();
    launchHearts();
    setTimeout(() => {
        typeMessage(messageText, messageElement, 60);
    }, 1000);
});
