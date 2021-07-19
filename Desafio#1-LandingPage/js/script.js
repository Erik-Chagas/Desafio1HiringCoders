const form = document.getElementById('formulario')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let data = {
        nome,
        email
    }

    let dadosJSON = JSON.stringify(data)

    localStorage.setItem('lead', dadosJSON)
})