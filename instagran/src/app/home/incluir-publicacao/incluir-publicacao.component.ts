import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { PublicacaoService } from '../../publicacao.service'
import { Publicacao } from '../../shared/publicacao.model'
import * as firebase from 'firebase'

@Component({
  selector: 'app-incluir-publicacao',
  templateUrl: './incluir-publicacao.component.html',
  styleUrls: ['./incluir-publicacao.component.css']
})
export class IncluirPublicacaoComponent implements OnInit {

  public email: string

  public formulario: FormGroup = new FormGroup({
    'titulo': new FormControl(null)
  })

  constructor(
    private publicacaoService: PublicacaoService
  ) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged((user) => {
      this.email = user.email
    })
  }

  public publicar(): void {
    let publicacao: Publicacao = new Publicacao(
      this.formulario.value.titulo,
      this.email
    )

    this.publicacaoService.publicar(publicacao)
  }

}
