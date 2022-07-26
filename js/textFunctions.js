function encriptar() {
    var texto = document.getElementById("textInto").value.toLowerCase();

    var textCifrado = texto.replace(/e/igm,"enter");
    var textCifrado = textCifrado.replace(/o/igm,"ober");
    var textCifrado = textCifrado.replace(/i/igm,"imes");
    var textCifrado = textCifrado.replace(/a/igm,"ai");
    var textCifrado = textCifrado.replace(/u/igm,"ufat");

    document.getElementById("text-result").innerHTML = textCifrado;
}

function desencriptar() {
    var texto = document.getElementById("textInto").value.toLowerCase();

    var textCifrado = texto.replace(/enter/igm,"e");
    var textCifrado = textCifrado.replace(/ober/igm,"o");
    var textCifrado = textCifrado.replace(/imes/igm,"i");
    var textCifrado = textCifrado.replace(/ai/igm,"a");
    var textCifrado = textCifrado.replace(/ufat/igm,"u");

    document.getElementById("text-result").innerHTML = textCifrado;
}

function copy(){
    const resultText = document.querySelector("#text-result");
    navigator.clipboard.writeText(resultText.textContent);
}