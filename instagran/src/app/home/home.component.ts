import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service'
import { PublicacaoService } from '../publicacao.service'
import { ProgressoService } from '../progresso.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ PublicacaoService, ProgressoService ]
})
export class HomeComponent implements OnInit {

  @ViewChild('publicacoes') public publicacoes: any

  constructor(
    private authService: AuthService 
  ) { }

  ngOnInit(): void {
  }

  public sair(): void {
    this.authService.sair()
  }

  public atualizarTimeLine(): void {
    console.log('Chegamos no home ')
    this.publicacoes.atualizarTimeline()
  }
}
