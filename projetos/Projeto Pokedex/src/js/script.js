// CONSTANTES GLOVALES
let cont;


const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonName = document.querySelector('.pokemon__name');
const pokemonImg = document.querySelector('.pogemon__imagem');
const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');
// const pokemonSkills = document.querySelector('.skills');

// RECEBER RESPOSTA DA API
const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (APIResponse.status === 200) {
        const data = await APIResponse.json();
        return data;
    }
};

// REENDERISAÇÃO DO POKEMON
const renderPokemon = async (pokemon) => {
    pokemonName.textContent = "Cargando...";
    pokemonImg.src = ("https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif")
    const data = await fetchPokemon(pokemon);
    if (data) {
        pokemonNumber.textContent = data.id;
        pokemonName.textContent = data.name;
        pokemonImg.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default;
        input.value = "";
        cont = data.id;
        // pokemonSkills.textContent = data.abilities.length;
        console.log(data);
    } else {
        pokemonName.textContent = "Não encontrado😭";
        pokemonNumber.textContent = "";
        pokemonImg.src = ("https://media4.giphy.com/media/8L0Pky6C83SzkzU55a/200w.gif?cid=6c09b952fshjtclozfsr13wbzb0i7mu1vt9k2g66qrbtzd3n&ep=v1_gifs_search&rid=200w.gif&ct=g")
    }
};

// TOMADA DE INFORMAÇÃO DE INPUT
form.addEventListener("submit", (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
});

// LOGICA DOS BOTONES

buttonPrev.addEventListener("click", () => {
    if (cont > 1) {
        cont -= 1;
        renderPokemon(cont);
    }
});

buttonNext.addEventListener("click", () => {
    cont += 1;
    renderPokemon(cont);
});

renderPokemon(1);