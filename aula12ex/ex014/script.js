function carregar() {
    var msg = document.querySelector('#mensagem')
    var img = document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha.png'
        document.body.style.background = '#E6BF9F'
        msg.innerHTML += '<p>Bom dia!</p>'
    } else if (hora >= 12 && hora < 19) {
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#5C3828'
        msg.innerHTML += '<p>Boa tarde!</p>'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#0D3340'
        msg.innerHTML += '<p>Boa noite!</p>'
    }
}