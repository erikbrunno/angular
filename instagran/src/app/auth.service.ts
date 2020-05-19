import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Usuario } from './acesso/usuario.model';
import * as firebase from 'firebase'

@Injectable()
export class AuthService {

    public token_id: string

    constructor(private router: Router) {}

    public cadastrarUsuario(usuario: Usuario): Promise<any> {
        console.log('Chegamos ate o serviço ', usuario)
        return firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
            .then((resposta: any) => {
                
                //Remove a senha do objeto usuario
                delete usuario.senha
                
                //Registrando dados complementares do usuario no path email da base64
                firebase.database().ref(`usuario_detalhe/${btoa(usuario.email)}`)
                    .set({ usuario })
            })
            .catch((erro: Error) => console.log('Error ', erro))
    }

    public autenticar(email: string, senha: string): void {
        console.log('Tentando se autenticar')
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then((resposta: any) => {
                firebase.auth().currentUser.getIdToken()
                    .then((idToken: string) => {
                        this.token_id = idToken
                        localStorage.setItem('idToken', idToken)
                        this.router.navigate(['/home'])
                    })
            })
            .catch((error: Error) => console.log('Falha ', error))
    }

    public autenticado(): boolean {

        if (this.token_id === undefined && localStorage.getItem('idToken') != null) {
            this.token_id = localStorage.getItem('idToken')
        }

        if (this.token_id === undefined) {
            this.router.navigate(['/'])
        }

        return this.token_id !== undefined
    }

    public sair(): void {
        firebase.auth().signOut()
            .then(() => {
                localStorage.removeItem('idToken')
                this.token_id = undefined
                this.router.navigate(['/'])
            })
    }
}