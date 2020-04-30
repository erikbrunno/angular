import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Observable, Subject, of } from 'rxjs';
import { Oferta } from '../shared/oferta.model';
import { switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Array<Oferta>>
  //public ofertasEncontradas: Array<Oferta>
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertaService: OfertasService) { }

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((termo: string) => {

          if (termo.trim() === '') {
            console.log('Chegou2')
            return of<Array<Oferta>>([])
          }

          console.log('Requisicao http')
          return this.ofertaService.pesquisaOfertas(termo)
        })
      )

    /*this.ofertas.subscribe((ofertas: Array<Oferta>) => {
      this.ofertasEncontradas = ofertas
    })*/
  }

  pesquisa(termoDaBusca: string): void {
    this.subjectPesquisa.next(termoDaBusca)
    
    /*this.ofertas = this.ofertaService.pesquisaOfertas(termoDaBusca)
   
    this.ofertas.subscribe(
      ((ofertas: Array<Oferta>) => console.log(ofertas)),
      (erro: any) => console.log('Erro aconteceu: ', erro),
      () => console.log('Fluxo de eventos completo')
    )*/
  }

  limpaPesquisa(): void {
    console.log('Chegou')
    this.subjectPesquisa.next('')
  }

}
