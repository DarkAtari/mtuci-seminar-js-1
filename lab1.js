let Sum = (a, b) => a + b;
console.log(Sum(2, 5))

function SumMas(mas) {
    let sum = 0
    for (let i = 0; i < mas.length; i++) 
        sum += mas[i]
    return sum
}

let mas = [1, 2, 3, 4]
console.log(mas[1])
console.log(SumMas(mas))