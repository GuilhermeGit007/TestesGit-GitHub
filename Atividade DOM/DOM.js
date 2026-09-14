let formulario = document.getElementById("formulario");

let resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();
    let nome = document.getElementById("nome").value;
    let curso = document.getElementById("curso").value;
    let idade = document.getElementById("idade").value;
    resultado.textContent = "Olá, " + nome + "! Você tem " + idade + " anos " + "! E você está matriculado no curso de " + curso + ".";

})