import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { Observable, Observer, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit, OnDestroy {

  private tempoObservableSubscription: Subscription
  private meuObservableSubscription: Subscription

  public oferta: Oferta;

  constructor(
    private route: ActivatedRoute, 
    private ofertasService: OfertasService
  ) {}

  ngOnInit(): void {
  
    this.route.params.subscribe((parametro: Params) => {
      this.ofertasService.getOfertaPorId(parametro.id)
        .then((oferta: Oferta) => this.oferta = oferta)
    })
      
     /* this.route.params.subscribe(
        (parametro: any) => console.log(parametro),
        (erro: any) => console.log('erro: ', erro),
        () => console.log('Processado com exito')
      )*/
      
    //this.route.params.subscribe((parametro: any) => {
      //console.log(parametro.id)
    //})

    /*let tempo = interval(500)
    this.tempoObservableSubscription = tempo.subscribe((intervalo: number) => {
      console.log(intervalo)
    })

    //Observable - Observavel
    let meuObservableTeste = Observable.create((observe: Observer<number>) => {
      observe.next(1)
      observe.next(3)
      observe.complete()
      observe.next(3)
    })

    //Observable - Observador
    this.meuObservableSubscription = meuObservableTeste.subscribe(
      (resultado: any) => console.log(resultado + 10),
      (erro: any) => console.log(erro),
      () => console.log('Stream de eventos finalizada')
    )*/
  }

  ngOnDestroy(): void {

    //Precisamos fazer o unsubscribe para eliminar as memory leak
    //this.tempoObservableSubscription.unsubscribe()
    //this.meuObservableSubscription.unsubscribe()
  }

}
