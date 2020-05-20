import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'
import { PublicacaoService } from '../publicacao.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ PublicacaoService ]
})
export class HomeComponent implements OnInit {

  constructor(
    private authService: AuthService 
  ) { }

  ngOnInit(): void {
  }

  public sair(): void {
    this.authService.sair()
  }

}
