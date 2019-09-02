"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = require("./Pessoa");
var Carro_1 = __importDefault(require("./Carro"));
var PessoaDAO = /** @class */ (function () {
    function PessoaDAO() {
        this.nomeTabela = 'tb_pessoa';
    }
    PessoaDAO.prototype.inserir = function (Object) {
        console.log('Logica de insert Pessoa');
        return true;
    };
    PessoaDAO.prototype.atualizar = function (Object) {
        console.log('Logica de update Pessoa');
        return true;
    };
    PessoaDAO.prototype.remover = function (id) {
        console.log('Logica de remover Pessoa');
        return new Pessoa_1.Pessoa('', new Carro_1.default('Veloster', 3));
    };
    PessoaDAO.prototype.selecionar = function (id) {
        console.log('Logica de select by id Pessoa');
        return new Pessoa_1.Pessoa('', new Carro_1.default('Veloster', 3));
    };
    PessoaDAO.prototype.selecionarTodos = function () {
        console.log('Logica de select all Pessoa');
        return [];
    };
    return PessoaDAO;
}());
exports.PessoaDAO = PessoaDAO;
