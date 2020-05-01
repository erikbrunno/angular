import { Pedido } from './shared/pedido.model'

export class OrdemCompraService {

    efetivarCompra(pedido: Pedido): void {
        console.log('Chegamos ate aqui: ', pedido)
    }
}