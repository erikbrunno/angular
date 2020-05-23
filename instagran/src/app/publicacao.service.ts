import * as firebase from 'firebase'
import { Publicacao } from './shared/publicacao.model'
import { Injectable } from '@angular/core'
import { ProgressoService } from './progresso.service'
@Injectable()
export class PublicacaoService {

    constructor(private progresso: ProgressoService) {}

    public publicar(publicacao: Publicacao): void {
        console.log('Chegamos ao publicacao: ', publicacao)

        let nomeImagem = Date.now()

        firebase.database().ref(`publicacoes/${btoa(publicacao.email)}`)
            .push({ titulo: publicacao.titulo })
            .then((resposta: any) => {
                let nomeImagem = resposta.key

                firebase.storage().ref()
                    .child(`imagens/${nomeImagem}`)
                    .put(publicacao.imagem)
                    .on(firebase.storage.TaskEvent.STATE_CHANGED,
                        (snapshot: any) => {
                            this.progresso.status = 'andamento'
                            this.progresso.estado = snapshot
                        },
                        (error) => {
                            this.progresso.status = 'erro'
                        },
                        () => {
                            //Finalização do processo de upload da imagen
                            this.progresso.status = 'concluido'
                        }
                    )
            })
    }

    //Consulta as publicaçoes no firebase
    public consultarPublicacoes(email: string): Promise<Array<Publicacao>> {

        return new Promise((resolve, reject) => {
            firebase.database().ref(`publicacoes/${btoa(email)}`)
            .orderByKey()
            .once('value')
            .then((snapshot: any) => {

                let publicacoes: Array<Publicacao> = new Array<Publicacao>()

                snapshot.forEach((childSnapshot: any) => {

                    let publicacao: Publicacao = childSnapshot.val()
                    publicacao.key = childSnapshot.key
                    publicacoes.push(publicacao)
                })

                //Inverte a ordem do array
                return publicacoes.reverse()
            })
            .then((publicacoes: Array<Publicacao>) => {
                
                publicacoes.forEach((publicacao: Publicacao) => {

                    //Consultar a URL da imagem
                    firebase.storage().ref()
                    .child(`imagens/${publicacao.key}`)
                    .getDownloadURL()
                    .then((url: string) => {
                        publicacao.url_imagem = url

                        firebase.database().ref(`usuario_detalhe/${btoa(email)}`)
                            .once('value')
                            .then((snapshot: any) => {
                                publicacao.nome_usuario = snapshot.val().usuario.nome_usuario
                            })
                    })
                })

                resolve(publicacoes)
            })
        })
    } 
}