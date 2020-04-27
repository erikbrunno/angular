import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    //this.route.params.subscribe((parametro: any) => {
      //console.log(parametro.id)
    //})

    console.log('Parametros: ', this.route.snapshot.params['id'])
  }

}