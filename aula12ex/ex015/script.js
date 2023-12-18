function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.querySelector('#txtano')
    var res = document.querySelector('#res')
    if (nasc.value.length == 0 || Number(nasc.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(nasc.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked) {
            gênero = 'homem'
            if (idade >= 0 && idade < 16) {
                img.setAttribute('src', 'imagens/kid-m.jpg')
            } else if (idade < 61) {
                img.setAttribute('src', 'imagens/m.jpg')
            } else {
                img.setAttribute('src', 'imagens/old-m.jpg')
            }
        } else {
            gênero = 'mulher'
            if (idade >= 0 && idade < 16) {
                img.setAttribute('src', 'imagens/kid-f.jpg')
            } else if (idade < 61) {
                img.setAttribute('src', 'imagens/f.jpg')
            } else {
                img.setAttribute('src', 'imagens/old-f.jpg')
            }
        }
        res.innerHTML = `Você é ${gênero} e tem ${idade} anos!`
        res.appendChild(img)
    }
}