var x = 0;
var array = Array();

function add_element_to_array() {
    array[x] = document.getElementById("input").value;

    let num = document.getElementById("input").value;
    let list = document.getElementById("list");
    let myLi = document.createElement("li");
    myLi.innerHTML = num;
    list.appendChild(myLi);

    var e = "<hr/>";
    for(var y=0; y<array.length; y++) {
        e += "Element " + y + " = " + array[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
}


