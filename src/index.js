import IMask from "imask";
import { NewGame } from "./lib/novoJogo";
import { numeroSorteado, novoNumero } from "./lib/sorteioDoNumero";
import { chances } from "./lib/contador";

let input = document.querySelector("#number");
let respostaNaTela = document.querySelector("#resultadoFinal");
let respostaTentativas = document.querySelector("#tentativas");
let reiniciar = document.querySelector("#button");
let buttonEnviar = document.querySelector("#enviar");
let testeAcerto = document.querySelector("#testeAcerto");

document.getElementById("enviar").disabled = true;

const mask = IMask(input, {
  mask: Number,
  min: 0,
  max: 10,
});

input.addEventListener("input", function () {
  if (this.value.length == '') {
    buttonEnviar.disabled = true;
  } else {
    buttonEnviar.disabled = false;
  }
});

input.addEventListener("click", () => {
  input.value = '';

  mask.updateValue(input, {
    mask: Number,
    min: 0,
    max: 10,
  });
});

let respostaDoUsuario;

enviar.addEventListener("click", () => {
  respostaDoUsuario = input.value;

  if (chances == 0 && numeroSorteado != respostaDoUsuario) {
    document.getElementById("enviar").disabled = true;
    input.disabled = true;
    testeAcerto.innerHTML = `O número sorteado era ${numeroSorteado}`
    respostaTentativas.innerHTML = "Suas tentativas acabaram";
    document.getElementById("button").innerHTML = "<button id='newgame'>Novo jogo</button>";
  } 


  if (numeroSorteado == respostaDoUsuario) {
    testeAcerto.innerHTML = "Parabéns, você acabou de acertar o número!";
    document.getElementById("tentativas").innerHTML =
      'Para jogar novamente clique em "Novo Jogo"';
    document.getElementById("enviar").disabled = true;
    document.getElementById("button").innerHTML = "<button id='newgame'>New Game</button>";
  } 
  
  if (respostaDoUsuario > numeroSorteado) {
    respostaNaTela.innerHTML = `Errado! O número é  menor que ${respostaDoUsuario}`;
  }
  if (respostaDoUsuario < numeroSorteado) {
    respostaNaTela.innerHTML = `Errado! O número é maior que ${respostaDoUsuario}`;
  }

  if (numeroSorteado == respostaDoUsuario) {
    respostaNaTela.innerHTML = "";
  }
  if (chances == 0 && numeroSorteado != respostaDoUsuario) {
    respostaNaTela.innerHTML = '';
  }
});

reiniciar.addEventListener("click", () => {
  respostaNaTela.innerHTML = ''
  testeAcerto.innerHTML = ''
  document.getElementById("button").innerHTML = "";
  novoNumero()
  input.disabled = false;
});
