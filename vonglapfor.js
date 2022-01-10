let i;
let text = "";
let N = Number(document.getElementById("input1").value);
function lap(){
    for (i = 0; i < N; i++) {
        text += i;
        document.getElementById("kq").innerHTML = text
    }

}
