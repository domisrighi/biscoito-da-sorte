import { gerarSorte } from "./server.js";

let sorteExibida = false;

botaoSorte.addEventListener("click", () => {
    if (!sorteExibida && gerarSorte()){
        botaoSorte.textContent = "Tirar outra sorte";
        sorteExibida = true;
    } else {
        reiniciarBiscoito();
        botaoSorte.textContent = "Abrir sorte";
        sorteExibida = false;
    }
});

function reiniciarBiscoito(){
    const elementoH3 = document.querySelector("h3");
    if (elementoH3){
        elementoH3.textContent = ".";
        elementoH3.style.opacity = "0";
    }
    const imagemBiscoitoFechado = document.querySelector(".area-imagem img");
    if (imagemBiscoitoFechado){
        imagemBiscoitoFechado.src = "./assets/images/biscoito-fechado.jpg";
    }
}
