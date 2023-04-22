import { novoNumero } from "./sorteioDoNumero";
let input = document.getElementById("#number")

function NewGame() {
  let reiniciar = document.querySelector("#button");

  const input = document.querySelector("#number");

  reiniciar.addEventListener("click", () => {

    input.value = null;

    document.getElementById("enviar").disabled = true;

    input.length >= 1
      ? (document.getElementById("enviar").disabled = false)
      : (document.getElementById("enviar").disabled = true);

    document.getElementById("chutar").innerHTML = "Chute um novo número";
  }); 

  input.addEventListener("click", () => {
    input = '';
  }) 
}

export { NewGame };