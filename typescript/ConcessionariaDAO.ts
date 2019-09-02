import { InterfaceDAO } from './InterfaceDAO'
import { Concessionaria } from './Concessionaria'

export class ConcessionariaDAO implements InterfaceDAO<Concessionaria> {
    nomeTabela: string = 'tb_concessionaria';    
    
    inserir(Object: Concessionaria): boolean {

        console.log('Logica de insert Concessionaria')
        return true;
    }
    atualizar(Object: Concessionaria): boolean {
       
        console.log('Logica de update Concessionaria')
        return true;
    }
    remover(id: number): Concessionaria {
       
        console.log('Logica de remover Concessionaria')
        return new Concessionaria('', []);
    }
    selecionar(id: number): Concessionaria {
        
        console.log('Logica de select by id Concessionaria')
        return new Concessionaria('', []);
    }
    selecionarTodos(): Array<Concessionaria> {
        
        console.log('Logica de select all Concessionaria')
        return [];
    }



}