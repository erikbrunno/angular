import { Oferta } from './shared/oferta.model'
import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { URL } from './app.api'
import { Observable } from 'rxjs'
import { map, retry } from 'rxjs/operators';

@Injectable()
export class OfertasService {

    constructor(private http: Http){}

    public getOfertas(): Promise<Array<Oferta>> {
        return this.http.get(`${URL}/ofertas?destaque=true`)
            .toPromise()
            .then((resposta: any) => resposta.json())
    }
    
    public getOfertasPorCategoria(categoria: string): Promise<Array<Oferta>> {
        return this.http.get(`${URL}/ofertas?categoria=${categoria}`)
            .toPromise()
            .then((resposta: any) => resposta.json())
    }

    public getOfertaPorId(id: number): Promise<Oferta> {
        return this.http.get(`${URL}/ofertas?id=${id}`)
            .toPromise()
            .then((resposta: any) => resposta.json().shift())
    }

    public getComoUsarOfertaPorId(id: number): Promise<string> {
        return this.http.get(`${URL}/como-usar?id=${id}`)
            .toPromise()
            .then((resposta: any) => resposta.json()[0].descricao)
    }

    public getOndeFicaOfertaPorId(id: number): Promise<string> {
        return this.http.get(`${URL}/onde-fica?id=${id}`)
            .toPromise()
            .then((resposta: any) => resposta.json()[0].descricao)
    }

    public pesquisaOfertas(termo: string): Observable<Array<Oferta>> {
        return this.http.get(`${URL}/ofertas?descricao_oferta_like=${termo}`)
            .pipe(retry(3), map((response: any) => response.json()));
        
    }
}