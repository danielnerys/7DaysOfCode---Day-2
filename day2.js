// definindo variaveis para captura das informações
let nome = prompt("Qual so seu nome?");
let idade = prompt("Qual sua idade?");
let linguagem = prompt("Qual linguagem de programação você está estudando?");

// sentença de codigo para colocar as informações no html
// essa parte do codigo foi comentada pois estava interferindo no exercicio opicional
// if(nome){
//   document.getElementById("box").innerHTML = "Olá " + nome + " , você tem " + idade + " anos e já está aprendendo " + linguagem + "!"
// };

// 
let question = prompt("Você gosta de estudar " + linguagem + " ? responda com 1 para sim, e 2 para não")

if(question == 1) {
 document.getElementById("box").innerHTML = " Ola " + nome+ ", você tem " +idade+" anos e está aprendendo "+linguagem+ " <br>Muito bom! Continue estudando e você terá muito sucesso."
}
  else if (question == 2){
  alert("Ahh que pena... Já tentou aprender outras linguagens?")
  document.getElementById("box").innerHTML = "Olá " + nome + " , você tem " + idade + " anos e já está aprendendo " + linguagem + "!"
  // document.getElementById("box").innerHTML = "Ola " +nome+ ", você tem " +idade+" anos e está aprendendo "+linguagem+" <br>Ahh que pena... Já tentou aprender outras linguagens?"
}