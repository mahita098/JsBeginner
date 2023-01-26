let arr = [];

function clear_input2() {
  let numberToClear = document.getElementById("result");
  arr.pop(numberToClear);

  result.innerHTML = arr.join(" ");
}

function clear_input() {
  let numbersToErase = document.getElementById("result");
  arr.pop(numbersToErase);

  result.innerHTML = " ";
}

let no1 = document.getElementById("input1").value;

function num1() {
  let no1 = 1;
  arr.push(no1);

  result.innerHTML = arr.join(" ");
}

let no2 = document.getElementById("input2").value;

function num2() {
  let no2 = 2;
  arr.push(no2);

  result.innerHTML = arr.join(" ");
}

let no3 = document.getElementById("input3").value;

function num3() {
  let no3 = 3;
  arr.push(no3);

  result.innerHTML = arr.join(" ");
}

let no4 = document.getElementById("input4").value;

function num4() {
  let no4 = 4;
  arr.push(no4);

  result.innerHTML = arr.join(" ");
}

let no5 = document.getElementById("input5").value;

function num5() {
  let no5 = 5;
  arr.push(no5);

  result.innerHTML = arr.join(" ");
}

let no6 = document.getElementById("input6").value;

function num6() {
  let no6 = 6;
  arr.push(no6);

  result.innerHTML = arr.join(" ");
}

let no7 = document.getElementById("input7").value;

function num7() {
  let no7 = 7;
  arr.push(no7);

  result.innerHTML = arr.join(" ");
}

let no8 = document.getElementById("input8").value;

function num8() {
  let no8 = 8;
  arr.push(no8);

  result.innerHTML = arr.join(" ");
}

let no9 = document.getElementById("input9").value;

function num9() {
  let no9 = 9;
  arr.push(no9);

  result.innerHTML = arr.join(" ");
}

let no0 = document.getElementById("input0").value;

function num0() {
  let no0 = 0;
  arr.push(no0);

  result.innerHTML = arr.join(" ");
}

// let no00 = document.getElementById("input00").value;

// function num00() {
//   let no00 = 100;
//   arr.push(no00);

//   result.innerHTML = arr.join(" ");
// }

// let result = document.getElementById("result");

function calcsum() {
  let total = 0;

  arr.map(function (item1) {
    total = parseInt(arr[0]) + parseInt(arr[1]);
    result.innerHTML = arr.join(" ") + " " + "=" + " " + total;
  });
}

function calcmin() {
  let substraction = 0;

  arr.map(function (item2) {
    substraction = parseInt(arr[0]) - parseInt(arr[1]);
    result.innerHTML = arr.join(" ") + " " + "=" + " " + substraction;
  });
}

function calcmul() {
  let multiply = 0;

  arr.map(function (item3) {
    multiply = parseInt(arr[0]) * parseInt(arr[1]);
    result.innerHTML = arr.join(" ") + " " + "=" + " " + multiply;
  });
}

function calcdiv() {
  let division = 0;

  arr.map(function (item4) {
    division = parseInt(arr[0]) / parseInt(arr[1]);
    result.innerHTML = arr.join(" ") + " " + "=" + " " + division;
  });
}

function calcperc() {
  let percentage = 0;

  arr.map(function (item5) {
    percentage = parseInt(arr[0]) / 100;
    result.innerHTML = arr.join(" ") + " " + "=" + " " + percentage;
  });
}
