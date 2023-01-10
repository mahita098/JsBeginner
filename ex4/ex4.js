const txt = document.getElementById('tname');
const btn1 = document.getElementById('btn1');
const out1 = document.getElementById('output1');

function change() {
    
    out1.innerHTML = 'Hello,' + ' ' + tname.value;
}

btn1.addEventListener('click', change);