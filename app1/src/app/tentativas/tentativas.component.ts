import { Component, OnChanges, OnInit, Input } from '@angular/core';
import { Coracao } from '../shared/coracao.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnChanges, OnInit {

  @Input() public tentativas: number
  
  public coracoes: Array<Coracao> = [
    new Coracao(true), new Coracao(true), new Coracao(true)
  ]

  constructor() { 
    console.log(this.coracoes)
  }

  ngOnChanges(): void {

    if (this.tentativas !== this.coracoes.length) {
      let indice = this.coracoes.length - this.tentativas - 1
      this.coracoes[indice].cheio = false
    }

    console.log('Tentativas recebidas do painel: ' + this.tentativas)
  }

  ngOnInit(): void {
   
  }

}
