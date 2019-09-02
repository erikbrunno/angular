export interface InterfaceDAO<T> {

    nomeTabela: string

    inserir(Object: T): boolean

    atualizar(Object: T): boolean

    remover(id: number): T
    
    selecionar(id: number): T

    selecionarTodos(): Array<T>
}