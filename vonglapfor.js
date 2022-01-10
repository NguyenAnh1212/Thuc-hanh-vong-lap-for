
function lap(){
    let text = "";
    let N = Number(document.getElementById("input1").value);
    for (let i = 0; i < N; i++) {
        text += i;
    }
    document.getElementById("kq").innerHTML = text;
    console.log(text);
}
