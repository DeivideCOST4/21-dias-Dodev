let fome = prompt('Você está com fome ou sem fome???')
let dinheiro = prompt('Você está com dinheiro ou sem dinheiro???')
let restaurante = prompt('está fechado ou aberto???')

if(fome === "sem fome" && dinheiro === "sem dinheiro"){
    console.log("Hoje a janta será em casa")
}
else if(fome==="com fome" && dinheiro === "com dinheiro" && restaurante === "fechado"){
    console.log("Peça um delivery")
}

else if(fome === "coom fome" && dinheiro === "com dinheiro" && restaurante === "aberto"){
    console.log("hoje o jantar será no seu restaurante preferido!!")
}