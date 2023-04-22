let enviar = document.querySelector("#enviar");
let input = document.querySelector("#number");
let respostaNaTela = document.querySelector("#resposta");
let respostaTentativas = document.querySelector("#tentativas");
let reiniciar = document.querySelector("#button");
let chances = 3;

enviar.addEventListener("click", () => {
  chances = chances - 1;
  respostaTentativas.innerHTML = `Você tem ${chances} chances`;
});

reiniciar.addEventListener("click", () => {
  chances = 3;
  respostaTentativas.innerHTML = `Você tem ${chances} chances`;
});

respostaTentativas.innerHTML = `Você tem ${chances} chances`;

export { chances };