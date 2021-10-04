window.onload=function(){

}
function place(element){
    var box = document.getElementById('box-'+element);
    box.innerHTML="O";
}
function play(){
     b1 = document.getElementById("box-1").value;
    var b2 = document.getElementById("box-2").value;
    var b3 = document.getElementById("box-3").value;
    var b4 = document.getElementById("box-4").value;
    var b5 = document.getElementById("box-5").value;
    var b6 = document.getElementById("box-6").value;
    var b7 = document.getElementById("box-7").value;
    var b8 = document.getElementById("box-8").value;
    var b9 = document.getElementById("box-9").value;
    const board = [
        [b1, b2, b3],
        [b4, b5, b6],
        [b7, b8, b9]
    ]
}
