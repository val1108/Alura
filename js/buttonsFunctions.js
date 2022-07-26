var buttonEncrypt = document.getElementById("encrypt");
var buttonDesencrypt = document.getElementById("desencrypt");
var buttonCopy = document.getElementById("copy");

buttonCopy.addEventListener("click", function (event) {
    copy();
    alert("Se copio correctamente!");
})

buttonEncrypt.addEventListener("click", function(event){
    event.preventDefault();
    encriptar();
    document.getElementById("img-default").style.display = "none";
    document.getElementById("mensaje-1").style.display = "none";
    document.getElementById("mensaje-2").style.display = "none";
})

buttonDesencrypt.addEventListener("click", function(event){
    desencriptar();
    document.getElementById("img-default").style.display = "none";
    document.getElementById("mensaje-1").style.display = "none";
    document.getElementById("mensaje-2").style.display = "none";
})