const escolha = Number(prompt("Digite 1, 2, 3, 4 ou 5"))

if (escolha == 1) {
//FUP que converte celsiu para fahrenheit
const num1 = 1.8
const num2 = prompt("Digite um número")
const num3 = 32
const resultado = num1*num2+num3

alert("a conversão do " +num2+ " em celsius pra fahrenheit é " +resultado)
}

else if (escolha == 2) {
const num1 = Number(prompt("Primeiro numero"))
const num2 = Number(prompt("Segundo numero"))

if (num1 > num2) {
    alert("O maior é: " +num1)
} 
else if (num2 > num1) {
    alert("O maior é: " +num2)
} 
else {
    alert("Os dois são iguains")
}
}
else if (escolha == 3) {
let soma = 0

for (let i = 1; i <= 5; i++) {
const peso = Number(prompt("Peso do infeliz " +i+ ":"))
soma = soma + peso
}
const media = soma / 5
alert("Média dos pesos dos infelizes: " +media)
}
else if (escolha == 4) {
const num1 = Number(prompt("Primeiro numero"))
const num2 = Number(prompt("Segundo numero"))
const num3 = Number(prompt("Terceiro numero"))

let menorzin = num1

if(num2 < menorzin) {
    menorzin = num2
} if (num3 < menorzin) {
    menorzin = num3
}
alert("O menor número é: " +menorzin)

} else if (escolha == 5)
    alert("Nadinha")