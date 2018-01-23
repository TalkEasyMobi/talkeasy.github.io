function printNumber(number){
    var placeholder = document.getElementById("holder");
    holder.innerHTML = number;
}
var button = document.getElementById("button");
button.onclick = function(){
    var result = dice.roll();
    printNumber(result);
}