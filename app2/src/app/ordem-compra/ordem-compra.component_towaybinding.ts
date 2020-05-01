import { Component, OnInit, Provider } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../shared/pedido.model'

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  public idPedidoCompra: number

  public endereco: string = ''
  public numero: number = null
  public complemento: string = ''
  public formaPagamento: string = ''

  //controle de validacao dos campos
  public enderecoValido: boolean
  public numeroValido: boolean
  public complementoValido: boolean
  public formaPagamentoValido: boolean

  //atribuitos primitivos de campos (pristine)
  public enderecoEstadoPrimitivo: boolean = true
  public numeroEstadoPrimitivo: boolean = true
  public complementoEstadoPrimitivo: boolean = true
  public formaPagamentoEstadoPrimitivo: boolean = true


  //Controlar visibilidade do botao confirmar comprar
  public formEstado: string = 'disabled'; 

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit(): void {
  }

  atualizaEndereco(endereco: string): void {
    this.endereco = endereco
    this.enderecoValido = (this.endereco.length > 3) ? true : false;
    this.enderecoEstadoPrimitivo = false

    this.habilitaForm()
  }

  atualizaNumero(numero: number): void {
    this.numero = numero
    this.numeroValido = numero > 0 ? true : false
    this.numeroEstadoPrimitivo =  false

    this.habilitaForm()
  }

  atualizaComplemento(complemento: string): void {
    this.complemento = complemento
    this.complementoValido = complemento.length > 0 ? true : false
    this.complementoEstadoPrimitivo = false

    this.habilitaForm()
  }

  atualizaFormaPagamento(formaPagamento: string): void {
    this.formaPagamento = formaPagamento
    this.formaPagamentoValido = formaPagamento.length > 0 ? true : false
    this.formaPagamentoEstadoPrimitivo = false

    this.habilitaForm()
  }

  habilitaForm(): void {
    
    if (this.enderecoValido && this.numeroValido && this.formaPagamentoValido) {
      this.formEstado = ''
    } else {
      this.formEstado = 'disabled'
    }
  }

  confirmarCompra(): void {

    let pedido: Pedido = new Pedido(this.endereco, this.numero, this.complemento, this.formaPagamento);
    this.ordemCompraService.efetivarCompra(pedido)
      .subscribe((idPedido: number) => {
        this.idPedidoCompra = idPedido
      })
  }
}
