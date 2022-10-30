import IMask from "imask";

let number = parseInt(Math.random() * 11);
console.log(number);

let contador = 3;
let respostaNaTela = document.querySelector("#resposta");

enviar.addEventListener("click", () => {
  var campoDeBusca = document.querySelector("#number");
  var campoDeBuscaV = campoDeBusca.value;
  var sequenceMask = IMask(campoDeBusca, {
    mask: Number,
    min: 0,
    max: 10,
  });
  document.getElementById('chutar').innerHTML = null

  console.log(campoDeBuscaV);

  if (number == campoDeBuscaV) {

    respostaNaTela.innerHTML = "Parabéns, você acabou de acertar o número!";
    document.getElementById("tentativas").innerHTML =
      'Para jogar novamente clique em "Novo Jogo"';
    document.getElementById("enviar").disabled = true;
    document.getElementById(
      "button"
    ).innerHTML = `<button type=submit id="reiniciar" onclick="reiniciar()">Novo Jogo</button>`;
  } 
  
  if (campoDeBuscaV > number) {
    respostaNaTela.innerHTML = `Errado! O número é menor que ${campoDeBuscaV}`;
    contador = contador - 1;
    document.getElementById(
      "tentativas"
    ).innerHTML = `Você tem mais ${contador} tentativas.`;
  }
  
  if (campoDeBuscaV < number) {
    respostaNaTela.innerHTML = `Errado! O número é maior que ${campoDeBuscaV}`;
    contador = contador - 1;
  } 

  if (contador < 1) {
    respostaNaTela.innerHTML = `Infelizmente, você não conseguiu acertar, mas o número era o ${number}`;
    document.getElementById("tentativas").innerHTML =
      "Suas chances acabaram, mas agora você pode jogar novamente, ja estou pensando em outro número aqui.";
    document.getElementById(
      "button"
    ).innerHTML = `<button type=submit id="reiniciar">Novo Jogo</button>`;
    document.getElementById("enviar").disabled = true;
  }
});

let reiniciar = document.querySelector("#button");
reiniciar.addEventListener("click", () => {
  document.getElementById("enviar").disabled = false;
  number = parseInt(Math.random() * 11);
  console.log(number);
  contador = 3;
  document.getElementById("button").innerHTML = "";
  document.getElementById("tentativas").innerHTML = "";
  document.getElementById('chutar').innerHTML = 'Chute um novo número'
  document.getElementById("resposta").innerHTML = "Você tem 3 tentativas";
});