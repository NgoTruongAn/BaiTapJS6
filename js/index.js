//Bài 1
function handleTim() {
  // B1: xác định input
  var sum = 0;
  var n = 0;
  // B2: xử lý
  while (sum < 10000) {
    n++;
    sum = sum + n;
  }
  // B3: hiển thị
  document.getElementById("resultBai1").innerHTML = `
  Số nguyên dương nhỏ nhất thỏa điều kiện là : ${n}
`;
}
//Bài 2
function handleTinhTong() {
  // B1: xác định input
  var x = +document.getElementById("x").value;
  var n = +document.getElementById("n").value;
  var luyThua = 1;
  var tong = 0;
  // B2: xử lý
  for (var i = 1; i <= n; i++) {
    luyThua *= x;
    tong += luyThua;
  }
  // B3: hiển thị
  document.getElementById("resultBai2").innerHTML = `
  Tổng S(n) = ${tong}
  `;
}
//Bài 3
function handleTinhGT() {
  // B1: xác định input
  var n2 = +document.getElementById("n2").value;
  var giaiThua = 1;
  // B2: xử lý
  for (var i = 1; i <= n2; i++) {
    giaiThua *= i;
  }
  // B3: hiển thị
  document.getElementById("resultBai3").innerHTML = `
  Tổng giai thừa = ${giaiThua}
  `;
}
//Bài 4
document.getElementById("createEle").onclick = function () {
  // B1: xác định input
  // B2: xử lý
  for (i = 1; i <= 10; i++) {
  var ele = document.createElement("div");
  ele.innerHTML = "thẻ div vừa tạo";
  ele.style.fontSize = "25px";
  ele.className = "newdiv";
  document.getElementById("content").appendChild(ele);
  }
  // B3: hiển thị
  var div = document.getElementsByClassName("newdiv");
  for (var i = 0; i < div.length; i++) {
    if ((i + 1) % 2 == 0) {
      div[i].style.background = "red";
    } else {
      div[i].style.background = "blue";
    }
  }
};
//Bài 5
function handleTinhSNT() {
  // B1: xác định input
  var n3 = +document.getElementById("n3").value;
  var html = "";
  // B2: xử lý
  for (var i = 2; i <= n3; i++) {
    var flag = 0;
    for (var j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }
    if (i > 1 && flag == 0) html += i + "&nbsp";
  }
  // B3: hiển thị
  document.getElementById("resultBai5").innerHTML = `
  Các số nguyên tố từ 1 đến n : ${html}
  `;
}
