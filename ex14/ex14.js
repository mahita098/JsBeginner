let arr = [];

function add_element_to_array() {
  let numberToAdd = Math.random(0, 10); //document.getElementById("input").value;
  arr.push(numberToAdd);

  let result = document.getElementById("Result");
  let total = 0;

  arr.map(function (item) {
    total = total + parseFloat(item);
  });

  result.innerHTML = total;
}
