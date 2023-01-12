let list = document.getElementById("list");
let result = document.getElementById("result");

let no0 = document.getElementById("input0").value;


function num0(){
    let no0 = 0;
    let myLi = document.createElement("li");
    myLi.innerHTML = no0;
    list.appendChild(myLi);
}

let no1 = document.getElementById("input1").value;

function num1(){
    let no1 = 1;
    let myLi = document.createElement("li");
    myLi.innerHTML = no1;
    list.appendChild(myLi);
}

let no2 = document.getElementById("input2").value;


function num2(){
    let no2 = 2;
    let myLi = document.createElement("li");
    myLi.innerHTML = no2;
    list.appendChild(myLi);
}

let no3 = document.getElementById("input3").value;


function num3(){
    let no3 = 3;
    let myLi = document.createElement("li");
    myLi.innerHTML = no3;
    list.appendChild(myLi);
}

let no4 = document.getElementById("input4").value;


function num4(){
    let no4 = 4;
    let myLi = document.createElement("li");
    myLi.innerHTML = no4;
    list.appendChild(myLi);
}

let no5 = document.getElementById("input5").value;


function num5(){
    let no5 = 5;
    let myLi = document.createElement("li");
    myLi.innerHTML = no5;
    list.appendChild(myLi);
}

let no6 = document.getElementById("input6").value;


function num6(){
    let no6 = 6;
    let myLi = document.createElement("li");
    myLi.innerHTML = no6;
    list.appendChild(myLi);
}

let no7 = document.getElementById("input7").value;


function num7(){
    let no7 = 7;
    let myLi = document.createElement("li");
    myLi.innerHTML = no7;
    list.appendChild(myLi);
}

let no8 = document.getElementById("input8").value;


function num8(){
    let no8 = 8;
    let myLi = document.createElement("li");
    myLi.innerHTML = no8;
    list.appendChild(myLi);
}

let no9 = document.getElementById("input9").value;


function num9(){
    let no9 = 9;
    let myLi = document.createElement("li");
    myLi.innerHTML = no9;
    list.appendChild(myLi);
}






function calcsum() {
    let number1 = document.querySelector("#list li:first-child").innerHTML
    let number2 = document.querySelector("#list li:nth-child(2)").innerHTML

    var sum = parseInt(number1) + parseInt(number2);
    result.innerHTML = sum;


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