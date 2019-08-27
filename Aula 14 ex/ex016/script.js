function Contar(){
    var txtInicio = window.document.getElementById('txtI')
    var txtFim = window.document.getElementById('txtF')
    var txtPasso = window.document.getElementById('txtP')
    var res = window.document.getElementById('res')

    if (txtInicio.value.length==0 || txtFim.value.length==0 || txtPasso.value.length==0){
        res.innerHTML = `\u{1F6D1} Valores invalido, impossivel contar! \u{1F6D1}`
    } else {

        var i = Number(txtInicio.value)
        var f = Number(txtFim.value)
        var p = Number(txtPasso.value)

        if (p <= 0){
            alert(`Ignorando passo ${numPasso}, considerando passo 1`)
            p = 1
        }

        res.innerHTML = 'Contando: </br>'
        if (i < f){
            for (var c=i ; c<=f ; c+=p){
                res.innerHTML += `\u{1F449} ${c}`
            }
        } else {
            for (var c=i ; c>=f ; c-=p){
                res.innerHTML += `\u{1F449} ${c}`
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    
    }
}