// pegando valores do range

let rangeInput = document.getElementById('length')
let lengthSpan = document.querySelector('.var-length')

lengthSpan.innerHTML = rangeInput.value

rangeInput.addEventListener('input', () => {
    lengthSpan.innerHTML = rangeInput.value
})

// pegando valores do checkbox

function getCheckbox() {
    let checked = document.querySelectorAll('input[type=checkbox]:checked')
    return Array.from(checked).map(cb => cb.value)
}

// função para gerar a senha

let passwordText = document.querySelector('.password')

document.getElementById('btn-generate').addEventListener('click', () => {

    passwordText.style.border = '1px solid #7754e1'

    let passLength = rangeInput.value
    let checkbox = getCheckbox()

    let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let lowerCase = 'abcdefghijklmnopqrstuvwxyz'
    let numbers = '12345678901234567890'
    let symbols = '!@#$%&*!@#$%&*!@#$%&*'
    let charSet = ''

    for (let i = 0; i <= checkbox.length; i++) {
        if (checkbox[i] === 'uppercase') {
            charSet += upperCase
        }
        if (checkbox[i] === 'symbols') {
            charSet += symbols
        }
        if (checkbox[i] === 'numbers') {
            charSet += numbers
        }
        if (checkbox[i] === 'lowcase') {
            charSet += lowerCase
        }
    }

    let password = []

    for (let i = 0; i < passLength; i++) {
        let num = Math.floor(Math.random() * charSet.length)
        password.push(charSet[num])
    }

    let passwordString = password.join('')
    passwordText.innerHTML = passwordString

})

// botão para copiar a senha

let btnCopy = document.getElementById('btn-copy')

btnCopy.addEventListener('click', () => {

    if (passwordText.textContent === '') {
        alert('Gere a senha para copiar!')
    } else {
        navigator.clipboard.writeText(passwordText.textContent)

            .then(() => {
                alert('Senha copiada')
                passwordText.style.border = '2px solid green'
            })
            .catch(() => {
                alert('Erro ao copiar')
                passwordText.style.border = '2px solid red'
            })
    }
})