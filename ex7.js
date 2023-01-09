function calcsum(){
    var num1=document.getElementById('no1').value;
    var num2=document.getElementById('no2').value;

    var total= parseInt(num1) + parseInt(num2);
    document.getElementById("result").innerHTML=total;

}

function calcmin(){
    var num1=document.getElementById('no1').value;
    var num2=document.getElementById('no2').value;

    var subs = parseInt(num1) - parseInt(num2);
    document.getElementById("result").innerHTML = subs;
}