var estado = document.getElementById("estados");
var imagem = document.getElementById("img");
var h3 = document.getElementById("h3");
estado.addEventListener("change",function() {
    h3.innerText = estado.options[estado.selectedIndex].text;
    imagem.src = estado.value + ".png";
});


var planeta = document.getElementById("planetas");
var peso = document.getElementById("peso");
var resultado = document.getElementById("resultado");
var calcular = document.getElementById("calcular");
var cancelar = document.getElementById("cancelar");
calcular.addEventListener("click",function() {
    resultado.innerText = (parseFloat(peso.value)/10) * parseFloat(planeta.value);
});