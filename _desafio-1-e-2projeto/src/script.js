var valorEmReal;
var nome;
nome = window.prompt("Olá seja muito bem vindo qual é o seu nome?");
var valorEmReal = window.prompt(
  " Olá " + nome + " vc desjaria converter quantos reais em bitcoin?"
);
var cotacaoDoBitcoin = 117082.92;
var valorEmReal = valorEmReal * cotacaoDoBitcoin;
valorEmReal = valorEmReal.toFixed(2);
alert(" UAU!!! O valor convertido de Real para bitcoin deu C " + valorEmReal);
