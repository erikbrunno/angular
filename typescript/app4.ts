import { ConcessionariaDAO } from './ConcessionariaDAO'
import { Concessionaria } from './Concessionaria'
import { PessoaDAO } from './PessoaDAO'
import { Pessoa } from './Pessoa'
import Carro  from './Carro'
import { GenericDAO } from './GenericDAO';

let dao:ConcessionariaDAO = new ConcessionariaDAO()
let concessionaria: Concessionaria = new Concessionaria('', [])

dao.inserir(concessionaria)

let pessoaDAO: PessoaDAO = new PessoaDAO
let pessoa: Pessoa = new Pessoa('Nome', new Carro('Camaro', 4))

pessoaDAO.inserir(pessoa)

let genericDAO: GenericDAO<Concessionaria> = new GenericDAO
genericDAO.inserir(concessionaria)


