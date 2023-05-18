let botao = document.querySelector(".adicionar");
let apagar = document.querySelector(".apagar");
let redefinir = document.querySelector(".redefinir");

let numero = document.querySelector(".numeros");
let body = document.querySelector("body");
let meuBotao = document.getElementById("meuBotao");
meuBotao.addEventListener("click", function() {
let meuInput = document.getElementById("meuInput");
  let soma = meuInput.value;
  // Faça algo com o valor do input aqui, como enviá-lo para um servidor
console.log(soma)
 
});

let number1 = 0;

function soma() {
  let cal = parseInt(meuInput.value)
  let num = parseInt(numero.innerText);
  let number1 = num + cal;
  numero.innerText = number1;
  botao.innerText = "Adicionar"+ " + " +cal

}

function zerar() {
  numero.innerText = number1;
}
function apaga (){
  let num = parseInt(numero.innerText);
  if (num >0){ let number1 = num - 1;
  numero.innerText = number1;}
} 

botao.addEventListener("click", soma);
redefinir.addEventListener("click", zerar);
apagar.addEventListener("click", apaga)


