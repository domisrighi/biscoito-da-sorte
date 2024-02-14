export async function gerarSorte(){
    try{
        const response = await fetch('http://localhost:3000/frases');
        const data = await response.json();
        const randomFrase = Math.floor(Math.random() * data.length);
        const randomSorte = data[randomFrase].texto;
        exibirSorte(randomSorte);
    }catch(error){
        alert("Erro ao carregar sorte. Verifique o servidor ou tente mais tarde!");
        console.error("Erro ao obter frases: ", error);
    }
};

function exibirSorte(message){
    const elementoH3 = document.querySelector("h3");
    if (elementoH3){
        elementoH3.textContent = message;
        elementoH3.style.opacity="100%";
    }
    const imagemBiscoitoAberto = document.querySelector(".area-imagem img");
    if (imagemBiscoitoAberto){
        imagemBiscoitoAberto.src = "./assets/images/biscoito-aberto.jpg";
    }
}