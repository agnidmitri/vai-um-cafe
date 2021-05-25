let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let sobrenome = document.getElementById('#sobrenome')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let sm1 = document.querySelector('#sm1')
let sm2 = document.querySelector('#sm2')
let sm1c = document.querySelector('#sm1c')
let sm2c = document.querySelector('#sm2c')
/*script da página index.html*/

function zoomPic() {
    profile.style.width = '450px'
    profile.style.height = '450px'
}

function outPic() {
    profile.style.width = '350px'
    profile.style.height = '350px'
}

function zoomSm1() {
    sm1.style.width = '100px'
    sm1.style.height = '100px'
}

function outSm1() {
    sm1.style.width = '50px'
    sm1.style.height = '50px'
}

function zoomSm2() {
    sm2.style.width = '100px'
    sm2.style.height = '100px'
}

function outSm2() {
    sm2.style.width = '50px'
    sm2.style.height = '50px'
}

nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')

    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido"
    } else {
        txtNome.innerHTML = ''
        nomeOk = true
    }
}

function validaSobrenome() {
    let txtSobrenome = document.querySelector('#txtSobrenome')

    if (nome.value.length < 3) {
        txtSobrenome.innerHTML = "Sobrenome inválido"
    } else {
        txtSobrenome.innerHTML = ''
        sobrenomeOk = true
    }
}


function validaAss() {
    let txtAss = document.querySelector('#txtAss')

    if (assunto.value.length <= 100) {
        txtAss.innerHTML = "Mínimo de 100 caractéres."
        txtAssunto.style.display = 'block'
    } else {
        txtAss.innerHTML = ''
        assuntoOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ) {
        txtEmail.innerHTML = 'E-mail inválido'
    } else {
        txtEmail.innerHTML = ''
        emailOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ('Mensagem enviada com sucesso! Obrigade pelo contato.')
    }
    else {
        alert ('Preencha o formulário corretamente antes de enviar.')
    }
}

