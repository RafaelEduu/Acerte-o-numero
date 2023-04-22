let numeroSorteado;
let reiniciar = document.querySelector("#button");

numeroSorteado = parseInt(Math.random() * 11);

export function novoNumero() {
  numeroSorteado = parseInt(Math.random() * 11);
  return numeroSorteado;
}

export { numeroSorteado };
