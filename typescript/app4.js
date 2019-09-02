"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ConcessionariaDAO_1 = require("./ConcessionariaDAO");
var Concessionaria_1 = require("./Concessionaria");
var PessoaDAO_1 = require("./PessoaDAO");
var Pessoa_1 = require("./Pessoa");
var Carro_1 = __importDefault(require("./Carro"));
var GenericDAO_1 = require("./GenericDAO");
var dao = new ConcessionariaDAO_1.ConcessionariaDAO();
var concessionaria = new Concessionaria_1.Concessionaria('', []);
dao.inserir(concessionaria);
var pessoaDAO = new PessoaDAO_1.PessoaDAO;
var pessoa = new Pessoa_1.Pessoa('Nome', new Carro_1.default('Camaro', 4));
pessoaDAO.inserir(pessoa);
var genericDAO = new GenericDAO_1.GenericDAO;
genericDAO.inserir(concessionaria);
