/*

Crie um objeto que possuirá 2 propriedades, ambas do tipo
array:
    * receitas []
    * despesas []

Agora crie uma função que irá calcular o total de receitas
e despesas e irá mostrar uma mensagem se a familia está com saldo
positivo ou negativo, seguido do valor do saldo

*/

let family = {
    incomes: [2087.39, 1612.43, 354.12, 180.21],
    expenses: [167.32, 320.98, 568.14, 423.64]
}

function sum(array) {
    let total = 0;

    for (let value of array) {
        total += value
    }


    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0

    let balanceText = 'negativo'

    if (itsOk) {
        balanceText = 'positivo'
    }

    console.log(`Seu saldo é ${balanceText}: R$ ${total.toFixed(2)}`)
}

calculateBalance()