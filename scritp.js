let indice = 0;
const player = document.getElementById("player");
const titulo = document.getElementById("titulo");

function tocarMusica(index) {
  const musica = musicas[index];
  player.src = musica.arquivo;
  titulo.textContent = "🎵 Tocando: " + musica.nome;
  player.play().catch((e) => console.error("Erro ao tocar:", e));
}

function proxima() {
  indice = (indice + 1) % musicas.length;
  tocarMusica(indice);
}

function voltar() {
  indice = (indice - 1 + musicas.length) % musicas.length;
  tocarMusica(indice);
}

function tocarOuPausar() {
  if (player.paused) {
    player.play();
  } else {
    player.pause();
  }
}

function tocarAleatorio() {
  let novoIndice;
  do {
    novoIndice = Math.floor(Math.random() * musicas.length);
  } while (novoIndice === indice && musicas.length > 1);
  indice = novoIndice;
  tocarMusica(indice);
}

player.addEventListener("ended", proxima);
window.addEventListener("load", () => tocarMusica(indice));

// LETREIRO (opcional)
const campoMensagem = document.getElementById("mensagem");
if (campoMensagem) {
  const mensagens = [
    "Você é especial pra Deus ✝️✨",
    "Louvores que tocam o coração ❤️",
    "Consagre ao Senhor tudo o que fizer. — Provérbios 16:3",
    "Tudo posso naquele que me fortalece. — Filipenses 4:13"
  ];
  let mensagemAtual = 0;

  function iniciarLetreiro() {
    campoMensagem.style.animation = "none";
    void campoMensagem.offsetWidth;
    campoMensagem.textContent = mensagens[mensagemAtual];
    campoMensagem.style.animation = "deslizarMensagem 60s linear";
    mensagemAtual = (mensagemAtual + 1) % mensagens.length;
    setTimeout(iniciarLetreiro, 60000);
  }

  iniciarLetreiro();
}
