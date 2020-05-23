import { Component, OnInit } from '@angular/core';
import { PublicacaoService } from '../../publicacao.service'
import { Publicacao } from '../../shared/publicacao.model'
import * as firebase from 'firebase'

@Component({
  selector: 'app-publicacoes',
  templateUrl: './publicacoes.component.html',
  styleUrls: ['./publicacoes.component.css']
})
export class PublicacoesComponent implements OnInit {

  private email: string
  public publicacoes: Array<Publicacao>

  constructor(
    private publicacaoService: PublicacaoService
  ) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged((user: any) => {
      this.email = user.email

      this.atualizarTimeline()
    })
  }

  public atualizarTimeline(): void {
      this.publicacaoService.consultarPublicacoes(this.email)
        .then((publicacoes: Array<Publicacao>) => {
          this.publicacoes = publicacoes
        })
  }

}
