const btn = document.getElementById('button');

btn.addEventListener('click', change);

function change() {
    document.getElementById('demo').innerHTML = "Hello world";

}