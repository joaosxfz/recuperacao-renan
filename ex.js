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