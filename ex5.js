let txt = document.getElementById('tname');
let btn1 = document.getElementById('btn1');
let out1 = document.getElementById('output1');


function change() {
   const li = document.createElement('li');
   li.appendChild(document.createTextNode(`Hello, ${txt.value}`));
   out1.appendChild(li);
   txt.value = '';
}

// use ul to list them