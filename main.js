let color = [ "#d62424", "#d64824", "#d6ac24" , "#98d624", "#33d624", "#24d674", "#2495d6", "#3624d6", "#9e24d6", 
"#d6249b", "#222831", "#B83B5E", "#FF2E63", "#112D4E", "#E84545", "#E84545", "#99DDCC", "#FF9A00", "#1FAB89", "#52057B",
"#155263" ];
let btn = document.querySelector('.conteudo__botao');
let corNumero = document.querySelector('.corNumero');


function getRandomNumber() {
    return Math.floor(Math.random() * color.length);
}



btn.addEventListener('click', () => {

    const sorteiaCor = getRandomNumber()
    document.body.style.backgroundColor = color[sorteiaCor];
    corNumero.textContent = color[sorteiaCor];
})
