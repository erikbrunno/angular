import { InterfaceDAO } from "./InterfaceDAO";

export class GenericDAO<T> implements InterfaceDAO<T> {
    nomeTabela: string;    
    
    inserir(Object: T): boolean {
        console.log('Inserindo...')
        return true        
    }
    atualizar(Obtscject: T): boolean {
        console.log('Atualizando...')
        return true
    }
    remover(id: number): T {
        console.log('Removendo')
        return Object()
    }
    selecionar(id: number): T {
        console.log('Selecionando objeto...')
        return Object()
    }
    selecionarTodos(): Array<T> {
        console.log('Selecionando Tudo ...')
        return []
    }
}
