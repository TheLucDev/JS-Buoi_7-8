var soNguyen = [];

function themVao() {
    var add = document.getElementById("themSo").value*1;
    soNguyen.push(add);
    document.getElementById("txtMang").innerText = "[" + soNguyen + "]";
    document.getElementById("themSo").value = '';
    // console.log(soNguyen);
}
function bai1() {
    var bai1Number = 0 ;
    for(var i = 0;i<soNguyen.length;i++){
        if (soNguyen[i]>0) {
            bai1Number += soNguyen[i];
        }
    }
    document.getElementById("bai1Kq").innerText = bai1Number;
}
function bai2() {
    var bai2Number = 0 ;
    for(var i = 0;i<soNguyen.length;i++){
        if (soNguyen[i]>0) {
            bai2Number++;
        }
    }
    document.getElementById("bai2Kq").innerText = bai2Number;
}
function bai3() {
    var bai3Number = soNguyen[0];
    for (let i = 0; i < soNguyen.length; i++) {
        if (bai3Number > soNguyen[i]) {
            bai3Number = soNguyen[i];
        }
    }
    document.getElementById("bai3Kq").innerText = bai3Number;
}
function bai4() {
    var bai4Number = soNguyen[0];
    for (let i = 0; i < soNguyen.length; i++) {
        if (bai4Number > soNguyen[i] && soNguyen[i] > 0) {
            bai4Number = soNguyen[i];
        }
    }
    document.getElementById("bai4Kq").innerText = bai4Number;
}
function bai5() {
    var bai5Number = soNguyen[0];
    for (let i = 0; i < soNguyen.length; i++) {
        if(soNguyen[i] % 2 === 0) {
            bai5Number = soNguyen[i];
        }
        else bai5Number = -1 ;
    }
    document.getElementById("bai5Kq").innerText = bai5Number;
}
function bai6() {
    var doiCho ;
    var viTriDau = document.getElementById("viTri1").value;
    var viTriSau = document.getElementById("viTri2").value;
    doiCho = soNguyen[viTriDau];
    soNguyen[viTriDau] = soNguyen[viTriSau];
    soNguyen[viTriSau] = doiCho;
    document.getElementById("bai6Kq").innerText = "[" + soNguyen + "]" ;
}
function bai7() {
    var bai7Array = soNguyen;
    bai7Array.sort();
    document.getElementById("bai7Kq").innerText = "[" + bai7Array + "]";
}
function kiemTraSNT(n) {
    //flag = 0 => không phải số nguyên tố
    //flag = 1 => số nguyên tố
    let flag = 1;
    if (n <2) return flag = 0; /*Số nhỏ hơn 2 không phải số nguyên tố => trả về 0*/
    /*Sử dụng vòng lặp while để kiểm tra có tồn tại ước số nào khác không*/
    let i = 2;
    while(i < n){
        if( n%i==0 ) {
            flag = 0;
            break; /*Chỉ cần tìm thấy 1 ước số là đủ và thoát vòng lặp*/
        }
        i++;
    }
    return flag;
}
function bai8() {
    var bai8Number = -1;
    for (let i = 0; i < soNguyen.length; i++){
        if (kiemTraSNT(soNguyen[i]) == 1) {
            bai8Number = soNguyen[i];
            break;
        }
    }
    document.getElementById("bai8Kq").innerText = bai8Number;
}
function bai10() {
    var a = 0 ;
    var b = 0;
    for (let i = 0; i < soNguyen.length; i++) {
        if (soNguyen[i] < 0) {
            a++;
        }
        if (soNguyen[i] > 0) {
            b++;
        }
    }
    if (a - b === 0) {
        document.getElementById("bai10Kq").innerText = "Bằng nhau!"
    }
    else if ( a - b > 0){
        document.getElementById("bai10Kq").innerText = "Số âm nhiều hơn!"
    }
    else {
        document.getElementById("bai10Kq").innerText = "Số dương nhiều hơn!"
    }
}
var soThuc = [];
function themFloat() {
    var addFloat = document.getElementById("themSoThuc").value*1;
    soThuc.push(addFloat);
    document.getElementById("txtMangfloat").innerText = "[" + soThuc + "]";
    document.getElementById("themSoThuc").value = '';
}
function bai9() {
    var count = 0;
    var newString = soNguyen.concat(soThuc);
    for (let index = 0; index < newString.length; index++) {
        if (newString[index] % 1 === 0) {
            count++;
        }
    }
    document.getElementById("bai9Kq").innerText = count;
}