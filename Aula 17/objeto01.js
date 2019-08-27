let amigo = {
    nome: 'Dionei',
    sexo: 'M',
    peso: 85.4,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}
console.log(typeof amigo)

console.log(`${amigo.nome} pesa ${amigo.peso}`)
amigo.engordar(4)
console.log(`${amigo.nome} pesa ${amigo.peso}`)
