import { InterfaceDAO } from './InterfaceDAO'
import { Pessoa } from './Pessoa'
import Carro from './Carro'

export class PessoaDAO implements InterfaceDAO<Pessoa> {
    nomeTabela: string = 'tb_pessoa';    
    
    inserir(Object: Pessoa): boolean {

        console.log('Logica de insert Pessoa')
        return true;
    }
    atualizar(Object: Pessoa): boolean {
       
        console.log('Logica de update Pessoa')
        return true;
    }
    remover(id: number): Pessoa {
       
        console.log('Logica de remover Pessoa')
        return new Pessoa('', new Carro('Veloster', 3));
    }
    selecionar(id: number): Pessoa {
        
        console.log('Logica de select by id Pessoa')
        return new Pessoa('', new Carro('Veloster', 3));
    }
    selecionarTodos(): Array<Pessoa> {
        
        console.log('Logica de select all Pessoa')
        return [];
    }



}