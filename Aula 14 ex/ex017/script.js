function Calcular(){
    var num = window.document.getElementById('txtN')
    var tab = window.document.getElementById('selTab')


    if (num.value.length ==0){
        alert('DIGITE UM NUMERO')
    
    } else {

        var n = Number(num.value)

        tab.innerHTML = ''

        for(var c=1 ; c<=10 ; c++){
            console.log(c)
            
            var item = window.document.createElement('option')
            item.innerHTML = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }


    }



}