let botao = document.querySelector(".adicionar");
let apagar = document.querySelector(".apagar");
let redefinir = document.querySelector(".redefinir");
let tipo = document.querySelector(".tipo");

let numero = document.querySelector(".numeros");
let meuBotao = document.getElementById("meuBotao");
let meuInput;

meuBotao.addEventListener("click", function () {
  meuInput = document.getElementById("meuInput");
  let soma = parseInt(meuInput.value);
  console.log(soma);
});

let number1 = 0;

function soma() {
  let cal = parseInt(meuInput.value);
  let num = parseInt(numero.innerText);
  let result = num + cal;
  numero.innerText = result;
  botao.innerText = "Adicionar" + " + " + cal;
  verificarParOuImpar(result); // Chama a função para verificar se o número é par ou ímpar
}

function zerar() {
  numero.innerText = number1;
}

function apaga() {
  let num = parseInt(numero.innerText);
  if (num > 0) {
    let result = num - 1;
    numero.innerText = result;
  }
}

botao.addEventListener("click", soma);
redefinir.addEventListener("click", zerar);
apagar.addEventListener("click", apaga);
