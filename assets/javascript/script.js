const botaoTema = document.querySelector('.tema')
const jogadasDisponiveis = ['pedra', 'papel', 'tesoura'];

let jogadaJogador = document.querySelector('#jogadaJogador');
let jogadaCPU = document.querySelector('#jogadaComputador');

/* Regra do jogo:
regras['pedra'] = 'tesoura' -> pedra vence tesoura
*/
const regras = {
    pedra: 'tesoura',
    papel: 'pedra',
    tesoura: 'papel'
}

const jogadasEmoji = {
    pedra: '👊🏽',
    papel: '🖐🏽',
    tesoura: '✌🏽'
}

let pontosJogador = 0;
let pontosComputador = 0;
let placarJogador = document.querySelector('#jogador');
let placarComputador = document.querySelector('#computador');
let resultado = document.querySelector('.resultado');
let jogadasUI = document.querySelector('.jogadas');
let resultadoContainer = document.querySelector('.resultadoContainer');

// Função para aplicar o tema
function aplicarTema(theme) {
    // Adiciona ou remove a classe 'dark-mode' com base no tema selecionado
    document.body.classList.toggle("dark-mode", theme === "dark");
    // Atualiza o texto do botão de tema
    botaoTema.textContent = theme === "dark" ? '🌙' : '🌞';
}

// Carrega o tema salvo
const temaSalvo = localStorage.getItem("theme") || "light";
aplicarTema(temaSalvo);

botaoTema.addEventListener("click", () => {
    // Alterna o tema e salva a escolha no localStorage
    const temaDark = document.body.classList.toggle('dark-mode');
    // Define o tema com base na presença da classe 'dark-mode'
    const theme = temaDark ? 'dark' : 'light';

    localStorage.setItem("theme", theme);
    aplicarTema(theme);
});


function jogar(escolhaJogador) {
    // Math.floor = arredonda para baixo \\ Math.random = gera um número aleatório entre 0 e 1
    const jogadaAleatoria = Math.floor(Math.random() * jogadasDisponiveis.length);
    const escolhaComputador = jogadasDisponiveis[jogadaAleatoria];

    resultadoContainer.style.display = 'block';
   
    // Exibe as jogadas do jogador e do computador usando emojis
    jogadaJogador.innerText = jogadasEmoji[escolhaJogador];
    jogadaCPU.innerText = jogadasEmoji[escolhaComputador];

   if (escolhaJogador === escolhaComputador) {
    resultado.innerText = `Empate!`;
    resultado.style.color = '#ffcc00';
    }
    
    else if (regras[escolhaJogador] === escolhaComputador) {
        resultado.innerText = `Jogador venceu!`;
        resultado.style.color = '#00ff88';
        pontosJogador++;
    }
    
    else {
        resultado.innerText = `Computador venceu!`;
        resultado.style.color = '#eb4747';
        pontosComputador++;
    }

    placarJogador.innerText = pontosJogador;
    placarComputador.innerText = pontosComputador;
}