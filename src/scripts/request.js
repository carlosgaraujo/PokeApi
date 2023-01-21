//forma diferente de trazer uma lista de oikemins vinda do Youtube - estudar a e explortar


const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

//array vai ate o 904 de ID
const generetePOkemonPromisses = () => Array(904).fill().map((_, index) =>
    fetch(getPokemonUrl(index + 1)).then(res => res.json()))

const genereteHTML = pokemons => pokemons.reduce((acumulator, pokemon) => {
    const types = pokemon.types.map(typeInfo => typeInfo.type.name)

    acumulator += `
        <li class=${types[0]}>
            <img src="https://raw.githubusercontent.com/RafaelSilva2k22/PokemonImages/main/images/${pokemon.id}.png" alt=${pokemon.name}>
            <h3>${pokemon.name}</h3>
            <span class="info" id="${pokemon.id}">info</span>
            <button data-id="${pokemon.id}" class="cart"></button>
            </li>
            `
            return acumulator
        },'')  

        const insertPOkemons = pokemons =>{
            const ulTag = document.querySelector('.main__list')
    ulTag.innerHTML = pokemons
}

const pokemonPromisses = generetePOkemonPromisses()

Promise.all(pokemonPromisses)
.then(genereteHTML)
.then(insertPOkemons)




// const generetePOkemonPromisses = () => Array(150).fill().map((_, index) =>
// fetch(getPokemonUrl(index + 1)).then(res => res.json()))

// const pokemonsArray = []

// for (let a = 1; a <= 150; a++ ) {
    //     pokemonsArray.push(fetch)
// }


// async function consomePokeApi() {
    //     const loading = document.querySelector('#loading')
    

    
    //     const pokemoByApi = await fetch(`https://pokeapi.co/api/v2/pokemon/`, {
        //         method: 'GET',
        //         'content-type': 'applicatrion/json'
        //     })
        //         .then((res) => {
            //             return res.json();
//         })
//         .catch(
    //             error => console.log(error)
    //         )
//     loading.classList.add('hidden')
//     console.log(pokemoByApi)
//     return pokemoByApi
// }
// consomePokeApi()


// async function renderizaPokemons() {
//     const ulTag = document.querySelector('.main__list')

//     const listaDePokemons = await consomePokeApi()

//     console.log(listaDePokemons.id)


//     listaDePokemons.results.forEach(pokemon => {
    //         const numeroNaPokedex = pokemon.url.slice(34, -1)

    //         ulTag.insertAdjacentHTML('beforeend', `
    //         <li>
    //         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroNaPokedex}.png" alt=${pokemon.name}>
    //         <h3>${pokemon.name}</h3>
    //         <span>info</span>
    //         <button id="cart"></button>
//         </li>`
//         )
//     })
// }
// renderizaPokemons()


    



//imagem Com gifs
//<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif" alt=${pokemon.name}>