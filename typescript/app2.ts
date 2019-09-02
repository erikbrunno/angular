import Carro, {qualquer_coisa as x} from './Carro'
import {Concessionaria} from './Concessionaria'
import {Pessoa} from './Pessoa'

let carroA = new Carro('Dodge', 4)
let carroB = new Carro('veloster', 3)
let carroC = new Carro('cerato', 4)

let listaDeCarros: Array<Carro> = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Av. Paulista', listaDeCarros)

let cliente = new Pessoa('João', carroB)

concessionaria.mostrarListaDeCarros().filter((carro: Carro) => {

    if(carro == cliente.dizerCarroPreferido()) {

        cliente.comprarCarro(carro)
        console.log('Comprado: ', cliente.dizerCarroQueTem())
    }
})