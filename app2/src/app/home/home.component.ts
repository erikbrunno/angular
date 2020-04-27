import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service'
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertasService ]
})
export class HomeComponent implements OnInit {

  public ofertas: Array<Oferta>

  constructor(private ofertaService: OfertasService) { }

  
  ngOnInit(): void {
    this.carregar()
  }

  carregar(): void {
    this.ofertaService.getOfertas()
      .then((ofertas: Array<Oferta>) =>  {     
        this.ofertas = ofertas
      })
      .catch((param : any) => console.log(param))
  }

}
