import { Pedido } from './shared/pedido.model'
import { Injectable } from '@angular/core'
import { Http, RequestOptions, Headers, Response } from '@angular/http'
import { Observable } from 'rxjs'
import { URL } from './app.api'
import { map } from 'rxjs/operators';

@Injectable()
export class OrdemCompraService {

    constructor(private http: Http) { }

    efetivarCompra(pedido: Pedido): Observable<number> {

        let headers: Headers = new Headers
        headers.append('Content-type', 'application/json')

        console.log('Chegamos ate aqui: ', pedido)
        return this.http.post(
            `${URL}/pedidos`, 
            JSON.stringify(pedido),
            new RequestOptions({ headers: headers })
        ).pipe(map((resposta: Response) => resposta.json().id ))
    }
}