function showModal() {
    const body = document.querySelector('body')
    const recuperarSenha = document.querySelector('#recSenha')

    recuperarSenha.addEventListener('click', (event) => {
        const modal = creatModal()

        body.appendChild(modal)
    })

}


function creatModal() {
    const section = document.createElement('section')
    const form = document.createElement('form')
    const h2 = document.createElement('h2')
    const close = document.createElement('span')
    const label = document.createElement('label')
    const emailInput = document.createElement('input')
    const enviarBtn = document.createElement('button')

    section.classList.add('modal__conteiner')

    form.classList.add('modal__form')

    h2.innerText = 'Digite seu Email'

    close.innerText = 'X'
    close.id = 'close'

    close.addEventListener('click', () =>{
        section.remove()
    } )

    label.htmlfor = 'email'
    label.innerText = 'Email'

    emailInput.name = 'email'
    emailInput.id = 'email'
    emailInput.type = 'email'
    emailInput.placeholder = 'Digite Seu Email'

    enviarBtn.type = 'submit'
    enviarBtn.id = 'enviarBtn'
    enviarBtn.innerText = 'Enviar'

    form.append(h2, close, label, emailInput, enviarBtn)

    section.appendChild(form)

    return section

}


function closeModal(){
    const modalConteiner = document.querySelector('.modal__conteiner')
    const closeModalBtn = document.querySelector('#close')

    closeModalBtn.addEventListener('click', () => {
    modalConteiner.remove();

    })
}

showModal()