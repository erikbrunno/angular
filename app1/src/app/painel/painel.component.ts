import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model'
import { FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

    public instrucao: string = 'Traduza a frase:'
    public frases: Array<Frase> = FRASES
    public resposta: string = ''

    public rodada: number = 0
    public rodadaFrase: Frase
    public progresso: number = 0
    public tentativas: number = 3

    constructor() { 
        this.atualizarRodada()
    }

    ngOnInit() {
    }

    public atualizaResposta(resposta: Event): void {
        
        this.resposta = (<HTMLInputElement> resposta.target).value
    }

    public verificarResposta(): void {

        if (this.rodadaFrase.frasePt == this.resposta) {

            this.rodada++
            this.progresso += (100 / this.frases.length)
            
            this.atualizarRodada()
        } else {
            alert('A tradução está errada')
            this.tentativas--

            if (this.tentativas < 0) {
                alert('Você perdeu')
            }
        }
    }

    public atualizarRodada(): void {

        this.rodadaFrase = this.frases[this.rodada]
        this.resposta = ''
    }

}
