import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'src/app/ofertas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {

  public ondeFica: string

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.ofertasService.getOndeFicaOfertaPorId(this.route.parent.snapshot.params['id'])
      .then((descricao: string) => {
        this.ondeFica = descricao
        
      })
  }

}
