let list = document.getElementById("list");
let result = document.getElementById("result");
let num = document.getElementById("input").value;

function addlist() 
{
    let num = document.getElementById("input").value;
  let myLi = document.createElement("li");
  myLi.innerHTML = num;
  list.appendChild(myLi);
}

function calcsum(){
  let num1 = document.querySelector("#list li:first-child").innerHTML
  let num2 = document.querySelector("#list li:nth-child(2)").innerHTML
  
  let sum = parseInt(num1) + parseInt(num2)
  result.innerHTML = sum

}

function calcmin(){
  let num1 = document.querySelector("#list li:first-child").innerHTML
  let num2 = document.querySelector("#list li:nth-child(2)").innerHTML

  var subs = parseInt(num1) - parseInt(num2);
  result.innerHTML = subs;
}

function calcmul(){
  let num1 = document.querySelector("#list li:first-child").innerHTML
  let num2 = document.querySelector("#list li:nth-child(2)").innerHTML

  var mul = parseInt(num1) * parseInt(num2);
  result.innerHTML = mul;
}

function calcdiv(){
  let num1 = document.querySelector("#list li:first-child").innerHTML
  let num2 = document.querySelector("#list li:nth-child(2)").innerHTML

  var div = parseInt(num1) / parseInt(num2);
  result.innerHTML = div;
}