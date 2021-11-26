const email = document.getElementById('email-form')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let = messages []
    if (email-form.valeu === '' || email-form.value == null) {
        messages.push('É necessário inserir um e-mail')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(',')
    }
})