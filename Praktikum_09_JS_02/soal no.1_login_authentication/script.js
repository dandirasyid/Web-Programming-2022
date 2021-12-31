function login() {
    let nama = "ahmad2017";
    let katasandi = "integrity";
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username == "ahmad2017" && password == "integrity"){
        alert("Login Sukses");
        location.href = "loginberhasil.html";
    }
    else {
        alert("Username dan Password Salah");
    }
}