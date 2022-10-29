import IMask from './node_modules/imask'

var campoDeBusca = document.querySelector('#number')
var sequenceMask = IMask(campoDeBusca, {
  mask: Number,
  min: 0,
  max: 10
})

console.log(sequenceMask);

let number = parseInt(Math.random() * 11);
console.log(number);

let contador = 3;

function enviar() {
  let respostaNaTela = document.querySelector("#resposta");
  let enviar = document.querySelector("button");

  if (number == sequenceMask) {
    respostaNaTela.innerHTML = "Parabéns, você acabou de acertar o número!";
    document.getElementById("tentativas").innerHTML =
      'Para jogar novamente clique em "Novo Jogo"';
    document.getElementById("enviar").disabled = true;
    document.getElementById(
      "button"
    ).innerHTML = `<button type=submit onclick="reiniciar()">Novo Jogo</button>`;
  }
  
  else if (sequenceMask > 10 || sequenceMask < 0) {
    alert("Digite um número válido, entre 0 e 10");
    document.getElementById("tentativas").innerHTML =
      "Escreva um número novamente";
    contador = contador;
  }

  if (sequenceMask > number) {
    respostaNaTela.innerHTML = `Errado! O número é menor que ${sequenceMask}`;
    contador = contador - 1;
    document.getElementById(
      "tentativas"
    ).innerHTML = `Você tem mais ${contador} tentativas.`;
  } 
  
  else if (sequenceMask > 10 || sequenceMask < 0) {
    alert("Digite um número válido, entre 0 e 10");
    document.getElementById("tentativas").innerHTML =
      "Escreva um número novamente";
    contador = contador;
  }

  if (sequenceMask < number) {
    respostaNaTela.innerHTML = `Errado! O número é maior que ${sequenceMask}`;
    contador = contador - 1;
  } 
  
  else if (sequenceMask > 10 || sequenceMask < 0) {
    alert("Digite um número válido, entre 0 e 10");
    document.getElementById("tentativas").innerHTML =
      "Escreva um número novamente";
  }

  if (contador < 1) {
    respostaNaTela.innerHTML = `Infelizmente, você não conseguiu acertar, mas o número era o ${number}`;
    document.getElementById("tentativas").innerHTML =
      "Suas chances acabaram, mas agora você pode jogar novamente, ja estou pensando em outro número aqui.";
    document.getElementById(
      "button"
    ).innerHTML = `<button type=submit onclick="reiniciar()">Novo Jogo</button>`;
    document.getElementById("enviar").disabled = true;
  }
  console.log(contador);
}


function reiniciar() {
  document.getElementById("enviar").disabled = false;
  number = parseInt(Math.random() * 11);
  console.log(number);
  contador = 3;
  document.getElementById("button").innerHTML = "";
  document.getElementById("tentativas").innerHTML = "";
  document.getElementById("resposta").innerHTML = "Você tem 3 tentativas";
}