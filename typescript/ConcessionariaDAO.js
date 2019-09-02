"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = require("./Concessionaria");
var ConcessionariaDAO = /** @class */ (function () {
    function ConcessionariaDAO() {
        this.nomeTabela = 'tb_concessionaria';
    }
    ConcessionariaDAO.prototype.inserir = function (Object) {
        console.log('Logica de insert Concessionaria');
        return true;
    };
    ConcessionariaDAO.prototype.atualizar = function (Object) {
        console.log('Logica de update Concessionaria');
        return true;
    };
    ConcessionariaDAO.prototype.remover = function (id) {
        console.log('Logica de remover Concessionaria');
        return new Concessionaria_1.Concessionaria('', []);
    };
    ConcessionariaDAO.prototype.selecionar = function (id) {
        console.log('Logica de select by id Concessionaria');
        return new Concessionaria_1.Concessionaria('', []);
    };
    ConcessionariaDAO.prototype.selecionarTodos = function () {
        console.log('Logica de select all Concessionaria');
        return [];
    };
    return ConcessionariaDAO;
}());
exports.ConcessionariaDAO = ConcessionariaDAO;
