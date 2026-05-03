
const galinhas = ["Dalvinha","Maria Rosa","Merilyn","Teresa","Flávia","Alvinha"];
let quantidade = galinhas.length;
let texto = "";
for (let i = 0; i < quantidade; i++){
    texto += galinhas[i] + "<br>";
}
document.getElementById("demonstracao").innerHTML = texto;
        const paragrafo = document.createElement("p");
        paragrafo.innerHTML = galinhas.length +" galinhas";
        document.body.appendChild(paragrafo);
        // alterando o css do parágrafo criado dinamicamente a partir do JavaScript
        paragrafo.style="color: red; font-size: 2em;";  
