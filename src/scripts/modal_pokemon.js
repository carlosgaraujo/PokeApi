function renderModalPOkemon() {
    const body = document.querySelector('body')
    const sectionModal = document.querySelector('.infoModal__container')

    const infoPokemons = document.querySelectorAll('.info')


    for (let i = 0; i <= 1; i++) {
        const btn = id[i]
        console.log(btn[i])
        btn.addEventListener('click', (event) => {
            const modalContent = creatModalPOkemon()

            sectionModal.append(modalContent)

        })
    }

}



function creatModalPokemon() {
    const sectionModal = document.querySelector('.infoModal__container')

    const span = document.createElement('span')
    span.innerText = X
    span.classList.add('close')

    const divImg = document.createElement('div')

    const imgPokemon = document.createElement('img')
    imgPokemon.src = "https://raw.githubusercontent.com/RafaelSilva2k22/PokemonImages/main/images/1.png"


    sectionModal.append(span, divImg)
    divImg.appendChild(imgPokemon)

    return sectionModal
}



renderModalPokemon()