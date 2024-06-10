let nome = prompt("Digite seu nome:")
let idade = Number(prompt("Digite sua idade"))
let altura = Number(prompt("Digite sua altura"))
let peso = Number(prompt("Digite seu peso"))
let anoNascimento = idade - 2024
let imc

imc = peso / (altura * altura)

console.log("Ola "+nome+" você tem "+idade+"anos, nasceu em "+anoNascimento+", tem "+altura+" de altura, pesa "+peso+"kg seu IMC é "+ imc+"kg/m2.")
