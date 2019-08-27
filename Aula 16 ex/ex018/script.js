let num = window.document.querySelector('#fnum')
let lista = window.document.querySelector('#flista')
let res = window.document.querySelector('#res')

let valores = []

function isNumero(n){
    return (Number(n) >= 1 && Number(n) <= 100)
}

function inLista(n, l){
    return l.indexOf(Number(n)) != -1
}

function AddNumberOnList(n){
    valores.push(Number(n))        
    let item = document.createElement('option')
    item.text = `Valor ${n}`
    lista.appendChild(item)
}


function Adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        AddNumberOnList(num.value)
        res.innerHTML = ''
        num.value = ''
        num.focus()
    } else {
        window.alert('ERRO')
        num.focus()
    }
}

function Analisar(){
    if (valores.length == 0){
        window.alert('[ERRO] - é necessario minimo um valor na lista')
    } else {
        let numTotal = valores.length
        let numMax = valores[0]
        let numMin = valores[0]
        let soma = 0
        

        for (let pos in valores){
            soma += valores[pos]
            if (valores[pos] > numMax){
                numMax = valores[pos]
            }
            if (valores[pos] < numMin){
                numMin = valores[pos]
            }

        }
        
        let media = soma / numTotal


        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo são ${numTotal} de numeros adicionados na lista</p>`
        res.innerHTML += `<p>O maior numero da lista é ${numMax} </p>`
        res.innerHTML += `<p>O menor numero da lista é ${numMin} </p>`
        res.innerHTML += `<p>O Somatório é ${soma} </p>`
        res.innerHTML += `<p>A média dos numeros é ${media} </p>`
    }
}
