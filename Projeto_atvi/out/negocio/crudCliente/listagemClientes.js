"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var listagem_1 = __importDefault(require("../metodos/listagem"));
var ListagemClientes = /** @class */ (function (_super) {
    __extends(ListagemClientes, _super);
    function ListagemClientes(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        return _this;
    }
    ListagemClientes.prototype.listar = function () {
        console.log("\nLista de todos os clientes:");
        this.clientes.forEach(function (cliente) {
            console.log("Nome: " + cliente.nome);
            console.log("Nome social: " + cliente.nomeSocial);
            console.log("G\u00EAnero: " + cliente.genero);
            console.log("CPF: " + cliente.getCpf.getValor);
            var dataCpf = cliente.getCpf.getDataEmissao;
            console.log("Data de emiss\u00E3o CPF: " + dataCpf.toLocaleDateString());
            var rgs = cliente.getRgs;
            for (var i = 0; i < rgs.length; i++) {
                console.log("Rg: " + rgs[i].getValor);
                var dataRg = rgs[i].getDataEmissao;
                console.log("Data Emiss\u00E3o RG: " + dataRg.toLocaleDateString());
            }
            var telefones = cliente.getTelefones;
            for (var i = 0; i < telefones.length; i++) {
                console.log('Telefone: (' + telefones[i].getDdd + ')' + telefones[i].getNumero);
            }
            console.log("--------------------------------------");
        });
        console.log("\n");
    };
    return ListagemClientes;
}(listagem_1.default));
exports.default = ListagemClientes;
