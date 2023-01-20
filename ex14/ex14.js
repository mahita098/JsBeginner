
let list = document.getElementById("list");
let text = document.getElementById("input").value;

function addList()  {
    let text = document.getElementById("input").value;
    let li = document.createElement("li");
    li.innerHTML = text;
    list.appendChild(li);

}

