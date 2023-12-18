let amigo = {nome: `Gabriel`, sexo: `M`, peso: 65.5,
engordar(p=0){
    console.log(`Engordou`)
    this.peso += p
}}
amigo.engordar(4.5)
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)