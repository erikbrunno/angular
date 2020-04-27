import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Frase } from '../shared/frase.model'
import { FRASES } from './frase.mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public instrucao: string = 'Traduza a frase'
  public frases: Array<Frase> = FRASES
  public resposta: string = ''
  public rodada: number = 0
  public rodadaFrase: Frase
  public progresso: number = 0
  public tentativas: number = 3

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() { 
    this.atualizarRodada()
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log('Componente painel foi Destruido')
  }

  public atualizarResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  public verificarResposta(): void {

    if (this.rodadaFrase.frasePtBr == this.resposta) {
      
      this.rodada++
      this.progresso += (100 / this.frases.length)
      
      if(this.rodada === this.frases.length) {
        
          this.encerrarJogo.emit('vitoria')
      }
      
      this.atualizarRodada()
    } else {

      this.tentativas--

      if (this.tentativas === -1) {
        console.log('Chegou')
        this.encerrarJogo.emit('derrota')
      }
    }
  }

  public atualizarRodada(): void {
    this.rodadaFrase = this.frases[this.rodada]
    this.resposta = ''
  }
}
