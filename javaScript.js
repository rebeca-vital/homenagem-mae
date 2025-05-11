const mensagens = [
    "Mãe, teu amor é o jardim mais bonito do meu coração.",
    "Você é a flor mais rara e preciosa da minha vida.",
    "Seu abraço é o meu porto seguro, hoje e sempre.",
    "Te amo além das palavras, feliz Dia das Mães!",
    "Gratidão por ser luz, força e carinho todos os dias.",
    "Meu maior presente é ser sua filha."
];
const msgEl = document.getElementById('mensagem');
const audio = document.getElementById('musica');
audio.volume = 0.5;

let ultimoIndex = -1;
function mostrarMensagem() {
    let index;
    do {
        index = Math.floor(Math.random() * mensagens.length);
    } while (index === ultimoIndex);
    ultimoIndex = index;
    msgEl.textContent = mensagens[index];

    if (audio.paused) {
        audio.play();
    }

}
function criarFlor() {
    const flor = document.createElement('span');
    const flores = ['🌸', '🌺', '🌷', '🌼', '🌻'];
    flor.textContent = flores[Math.floor(Math.random() * flores.length)];
    flor.style.position = 'fixed';
    flor.style.left = Math.random() * 100 + 'vw';
    flor.style.top = '-5vh';
    flor.style.fontSize = (Math.random() * 24 + 24) + 'px';
    flor.style.opacity = Math.random() * 0.5 + 0.5;
    flor.style.pointerEvents = 'none';
    flor.style.transition = `transform 5s linear, opacity 1s`;
    document.body.appendChild(flor);

    setTimeout(() => {
        flor.style.transform = `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg)`;
        flor.style.opacity = 0;
    }, 100);

    setTimeout(() => {
        flor.remove();
    }, 5200);
}

// Cria flores continuamente enquanto a música toca
setInterval(criarFlor, 500);