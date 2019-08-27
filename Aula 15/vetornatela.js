

let valores = [8,2,1,5,2]

console.log('======== for standard =======')
for (var i=0;i<valores.length;i++){
    console.log(`A posição ${i} tem o valor ${valores[i]}`)
}

console.log('======== for + in =======')

for (let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}