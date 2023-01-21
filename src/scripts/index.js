function login(array) {
    const email = document.querySelector('#user')
    const senha = document.querySelector('#senha')
    const loginBtn = document.querySelector('#loginBtn')

    loginBtn.addEventListener('click', (event) => {
        event.preventDefault()
        console.log(123)
        if (email.value === '' || senha.value === '') {
            alert('digite seu Email e Senha')
        }

        const loginUser = array.find(user => {
            return user.email === email.value
        })

        if (!loginUser) {
            alert('Usuário nao cadastrado')
        }

        if (loginUser.password != senha.value) {
            alert('Verifique seus dados')
        }

        if (loginUser && loginUser.password === senha.value) {
            localStorage.setItem('@PokeApi:username', loginUser.name)
            location.replace('src/pages/pokedex.html')
        }

    })
}

login(users)