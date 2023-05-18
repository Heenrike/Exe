let botao = document.querySelector(".adicionar");
let apagar = document.querySelector(".apagar");
let redefinir = document.querySelector(".redefinir");

const numero = document.querySelector(".numeros");
const body = document.querySelector("body");

let number1 = 0;

function soma() {
  let num = parseInt(numero.innerText);
  let number1 = num + 1;
  numero.innerText = number1;

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