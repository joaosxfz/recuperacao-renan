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

    if (a > b) {
        alert("O maior é: " +a)
    } else if (b > a) {
        alert("O maior é: " +b)
    } else {
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

}
else if (escolha == 5) {

}