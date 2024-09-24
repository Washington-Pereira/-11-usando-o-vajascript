console.log("olá mundo!")
// Criando um novo elemento 
let novoElemento = document.createElement('h1');
// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
// Selecionando o elemento body
let elementoBody = document.body;
// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);
novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';

const canvas = document.createElement('canvas');
canvas.width = 400;
canvas.height = 400;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

// Função para desenhar a joaninha
function desenharJoaninha() {
    // Corpo da joaninha
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.ellipse(200, 200, 100, 150, Math.PI / 2, 0, Math.PI * 2);
    ctx.fill();

    // Pontos pretos na joaninha
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(150, 150, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(250, 150, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(200, 200, 20, 0, Math.PI * 2);
    ctx.fill();

    // Cabeça da joaninha
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(200, 75, 40, 0, Math.PI * 2);
    ctx.fill();

    // Olhos
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(185, 70, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(215, 70, 10, 0, Math.PI * 2);
    ctx.fill();

    // Pupilas
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(185, 70, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(215, 70, 5, 0, Math.PI * 2);
    ctx.fill();

    // Antenas
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(200, 55);
    ctx.lineTo(160, 30);
    ctx.moveTo(200, 55);
    ctx.lineTo(240, 30);
    ctx.stroke();
}

// Desenha a joaninha
desenharJoaninha();