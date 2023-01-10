let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let result = document.getElementById("result")
let plus1 = document.getElementById("plus1")

let plusOne = 1

function add1() {
    console.log("add clcked")
    let sum = num1 + plusOne
    result.textContent = "result:" + sum
}

let plus2 = document.getElementById("plus2")
let plusTwo = 2

function add2() {
    let sum = num1 + plusTwo
    result.textContent = "result:" + sum
}


add1()
add2()