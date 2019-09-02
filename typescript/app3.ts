import Carro from './Carro'
import Moto from './Moto'
import { Concessionaria } from './Concessionaria';

let carro = new Carro('Veloste', 3)

let moto = new Moto();
moto.acelerar()

let concessionaria = new Concessionaria('', [])

console.log(carro)
console.log(moto)
console.log(concessionaria.fornecerHorariosDeFuncionamento())