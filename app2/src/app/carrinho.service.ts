import  ItemCarrinho from './shared/item-carrinho.model'
import { Oferta } from './shared/oferta.model'

export class CarrinhoService {
    public itens: Array<ItemCarrinho> = new Array<ItemCarrinho>()

    exibirItens(): Array<ItemCarrinho> {
        return this.itens
    }

    incluirItem(oferta: Oferta) {
       let itemCarrinho: ItemCarrinho = new ItemCarrinho(
           oferta.id,
           oferta.imagens[0],
           oferta.titulo,
           oferta.descricao_oferta,
           oferta.valor,
           1
       )
    
       let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)

       if (itemCarrinhoEncontrado) {
            itemCarrinhoEncontrado.quantidade += 1
       } else {
           this.itens.push(itemCarrinho)
       }
    }

    totalCarrinhoCompras(): number {
        let total: number = 0
        
        this.itens.map((item: ItemCarrinho) => {
            total += (item.valor * item.quantidade)
        })

        return total
    }

    adicionarQuantidade(itemCarrinho: ItemCarrinho): void {
        let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)
        
        if (itemCarrinhoEncontrado) {
            itemCarrinhoEncontrado.quantidade += 1
        }

    }

    diminuirQuantidade(itemCarrinho: ItemCarrinho): void {
        let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)
        
        if (itemCarrinhoEncontrado) {
            itemCarrinhoEncontrado.quantidade -= 1

            if (itemCarrinhoEncontrado.quantidade === 0) {
                this.itens.splice(this.itens.indexOf(itemCarrinhoEncontrado), 1)
            }
        }
    }

   limparCarrinho(): void {
       this.itens = new Array<ItemCarrinho>()
   }
}
