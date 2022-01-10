
function lap(){
    let text = "";
    let N = Number(document.getElementById("input1").value);
    for (let i = 0; i < N; i++) {
        text += "Số "+i + "<br>" ;
    }
    document.getElementById("kq").innerHTML = text;
    }

    //bài 2
function totting() {
    let N2 = Number(document.getElementById("input2").value);
    total = 0;
    for ( let j = 1; j <= N2 ; j++)
    {
        total = total + j ;
    }
    document.getElementById("Sum").innerText = total;
    }
// tong=0;
// for (let j =5;j<=10;j++){
//     tong=tong+j;
// }
// alert ("Tổng các số từ 5 đến 20 là: " + tong);