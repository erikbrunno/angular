import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Observable } from 'rxjs';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Array<Oferta>>

  constructor(private ofertaService: OfertasService) { }

  ngOnInit(): void {
  }

  pesquisa(termoDaBusca: string): void {
    this.ofertas = this.ofertaService.pesquisaOfertas(termoDaBusca)
   
    this.ofertas.subscribe(
      ((ofertas: Array<Oferta>) => console.log(ofertas)),
      (erro: any) => console.log('Erro aconteceu: ', erro)
    )
  }

}
