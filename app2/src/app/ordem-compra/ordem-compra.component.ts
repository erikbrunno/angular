import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service'
import { Pedido } from '../shared/pedido.model'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CarrinhoService } from '../carrinho.service';
import ItemCarinho from '../shared/item-carrinho.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  public idPedidoCompra: number
  public itensCarrinho: Array<ItemCarinho>

  public formulario: FormGroup = new FormGroup({
    'endereco': new FormControl(null, [ Validators.required, Validators.minLength(3), Validators.maxLength(120) ]),
    'numero': new FormControl(null, [ Validators.required, Validators.minLength(1), Validators.maxLength(20) ]),
    'complemento': new FormControl(null),
    'formaPagamento': new FormControl(null, [ Validators.required ])
  })

  constructor(
    private ordemCompraService: OrdemCompraService,
    public carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
    console.log('Chegou')
    this.itensCarrinho = this.carrinhoService.exibirItens()
  }

  confirmarCompra(): void {
    if (this.formulario.status == 'INVALID') {
      this.formulario.get('endereco').markAsTouched()
      this.formulario.get('numero').markAsTouched()
      this.formulario.get('complemento').markAsTouched()
      this.formulario.get('formaPagamento').markAsTouched()
    } else {

      if (this.carrinhoService.exibirItens().length === 0) {
        alert('Você não selecionou nenhum item')
      } else {

        let pedido: Pedido = new Pedido(
            this.formulario.value.endereco,
            this.formulario.value.numero,
            this.formulario.value.complemento,
            this.formulario.value.formaPagamento
        )

        this.ordemCompraService.efetivarCompra(pedido)
          .subscribe((idPedidoCompra: number) => {
            this.idPedidoCompra = idPedidoCompra
        })
      }
    }
  }

  adicionar(item: ItemCarinho): void {
    this.carrinhoService.adicionarQuantidade(item)
  }

  diminuir(item: ItemCarinho): void {
    this.carrinhoService.diminuirQuantidade(item)
  }
}
