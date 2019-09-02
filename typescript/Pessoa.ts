import Carro from './Carro'

export class Pessoa {
    private nome: string
    private carroPreferido: Carro
    private carro: Carro

    constructor(nome: string, carroPreferido: Carro) {

        this.nome = nome
        this.carroPreferido = carroPreferido
    }

    public dizerNome(): string {

       return this.nome
    }

    public dizerCarroPreferido(): Carro {

        return this.carroPreferido
    }

    public comprarCarro(carro: Carro): void {

        this.carro = carro
    }

    public dizerCarroQueTem(): Carro {

        return this.carro;
    }
}