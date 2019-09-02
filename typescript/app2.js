"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Concessionaria_1 = require("./Concessionaria");
var Pessoa_1 = require("./Pessoa");
var carroA = new Carro_1.default('Dodge', 4);
var carroB = new Carro_1.default('veloster', 3);
var carroC = new Carro_1.default('cerato', 4);
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.Concessionaria('Av. Paulista', listaDeCarros);
var cliente = new Pessoa_1.Pessoa('João', carroB);
concessionaria.mostrarListaDeCarros().filter(function (carro) {
    if (carro == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
        console.log('Comprado: ', cliente.dizerCarroQueTem());
    }
});
