let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let result = document.getElementById("result")
let plus1 = document.getElementById("plus1")

let plusOne = 1

function add1() {
    console.log("add clicked")
    let sum = num1 + plusOne
    result.textContent = "result:" + sum
}

let plus2 = document.getElementById("plus2")
let plusTwo = 2

function add2() {
    let sum = num1 + plusTwo
    result.textContent = "result:" + sum
}

let minus3 = document.getElementById("minus3")
let minusThree = 3

function min3() {
    let sum = num1 - minusThree
    result.textContent = "result:" + sum
}


let plus4 = document.getElementById("plus4")

let plusFour = 4

function add4() {
    
    let sum = num2 + plusFour
    result.textContent = "result:" + sum
}

let plus5 = document.getElementById("plus5")
let plusFive = 5

function add5() {
    let sum = num2 + plusFive
    result.textContent = "result:" + sum
} 

let minus1 = document.getElementById("minus1")
let minusOne = 1

function min1() {
    let sum = num2 - minusOne
    result.textContent = "result:" + sum
}


add1()
add2()
min3()
add4()
add5()
min1()