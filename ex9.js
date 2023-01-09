let list = document.getElementById("list");
let result = document.getElementById("result");
let num = document.getElementById("input").value;

function addlist() 
{
    let num = document.getElementById("input").value;
  let li = document.createElement("li");
  li.innerHTML = num;
  list.appendChild(li);

  
}

function calcsum(){

    list.dataset.total = parseInt(list.dataset.total) + parseInt(num);
            

    result.innerHTML = list.dataset.total;

}