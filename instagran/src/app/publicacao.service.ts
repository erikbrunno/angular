import * as firebase from 'firebase'
import { Publicacao } from './shared/publicacao.model'
export class PublicacaoService {

    public publicar(publicacao: Publicacao): void {
        console.log('Chegamos ao publicacao: ', publicacao)

        firebase.database().ref(`publicacoes/${btoa(publicacao.email)}`)
            .push({titulo: publicacao.titulo })
    }
}