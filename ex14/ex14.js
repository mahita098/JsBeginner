let arr = [];

function add_element_to_array() {
  let numberToAdd = document.getElementById("input").value;
  arr.push(numberToAdd);

  let result = document.getElementById("Result");
  // let total = 0;

  // arr.map(function (item) {
  //   total = total + parseFloat(item);
  // });

  // result.innerHTML = total;
  result.innerHTML = arr;
}
