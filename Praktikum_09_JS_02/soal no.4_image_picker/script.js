const pth = document.getElementById("poto");
function gambarBinatang() {
    if (binatang.value == "dandi") {
        return pth.src = "img/0110221134-Dandi Rasyid.png"
    } else if (binatang.value == "bison") {
        return pth.src = "img/bison.png"
    } else if (binatang.value == "buaya") {
        return pth.src = "img/buaya.png"
    } else if (binatang.value == "gajah") {
        return pth.src = "img/gajah.png"
    } else if (binatang.value == "kucing") {
        return pth.src = "img/kucing.png"
    } else {
        return poto.src = "img/kura-kura.png";   
    }
}
function gambarHewan() {
    alert(pth.src);
}