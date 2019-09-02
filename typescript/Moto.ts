import Veiculo from './Veiculo'

class Moto extends Veiculo {

    public acelerar(): void {
        
        this.velocidade += 20 
    }

}

export default Moto