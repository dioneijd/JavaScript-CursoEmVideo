function Verificar(){

    var data = new Date()
    var ano = data.getFullYear()

    var fano =  document.getElementById('txtano').value
    var res = document.querySelector('div#res')

    if (fano.length == 0 || fano > ano){
        window.alert('ERRO - Verifique o ano')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano
        var genero = ''
        var img = document.createElement('img')

        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'criancahomem.png')
            } else if (idade < 21){
                img.setAttribute('src', 'jovemhomem.png')
            } else if (idade < 50){
                img.setAttribute('src', 'adultohomem.png')
            } else {
                img.setAttribute('src', 'idosohomem.png')
            }
        } else {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'criancamulher.png')

            } else if (idade < 21){
                img.setAttribute('src', 'jovemmulher.png')

            } else if (idade < 50){
                img.setAttribute('src', 'adultomulher.png')

            } else {
                img.setAttribute('src', 'idosamulher.png')
                
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}