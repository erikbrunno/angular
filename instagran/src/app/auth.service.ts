import { Usuario } from './acesso/usuario.model';
import * as firebase from 'firebase'

export class AuthService {
    public cadastrarUsuario(usuario: Usuario): void {
        console.log('Chegamos ate o serviço ', usuario)
        firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
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
            .then((resposta: any) => console.log('Autenticado'))
            .catch((error: Error) => console.log('Falha ', error))
    }
}