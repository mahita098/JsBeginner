function calc()
{
    var no1 = document.getElementById("n1").value;
    var no2 = document.getElementById("n2").value;
    

    var total = parseInt(no1) + parseInt(no2);
    document.getElementById("result").innerHTML=total;

}