"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GenericDAO = /** @class */ (function () {
    function GenericDAO() {
    }
    GenericDAO.prototype.inserir = function (Object) {
        console.log('Inserindo...');
        return true;
    };
    GenericDAO.prototype.atualizar = function (Obtscject) {
        console.log('Atualizando...');
        return true;
    };
    GenericDAO.prototype.remover = function (id) {
        console.log('Removendo');
        return Object();
    };
    GenericDAO.prototype.selecionar = function (id) {
        console.log('Selecionando objeto...');
        return Object();
    };
    GenericDAO.prototype.selecionarTodos = function () {
        console.log('Selecionando Tudo ...');
        return [];
    };
    return GenericDAO;
}());
exports.GenericDAO = GenericDAO;
