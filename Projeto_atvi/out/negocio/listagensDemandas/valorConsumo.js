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
var ValorConsumo = /** @class */ (function (_super) {
    __extends(ValorConsumo, _super);
    function ValorConsumo(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        return _this;
    }
    ValorConsumo.prototype.listar = function () {
        var quantidade_consumo = [];
        this.clientes.forEach(function (cliente) {
            var cpf = cliente.getCpf.getValor;
            var nome = cliente.nome;
            var nomeSocial = cliente.nomeSocial;
            var consumo_Total = 0;
            cliente.getProdutosConsumidos.forEach(function (produto) {
                consumo_Total = consumo_Total + produto.getPreco;
            });
            cliente.getServicosConsumidos.forEach(function (servico) {
                consumo_Total = consumo_Total + servico.getCusto;
            });
            quantidade_consumo.push({
                nome: nome,
                cpf: cpf,
                nomeSocial: nomeSocial,
                quantidade: consumo_Total
            });
        });
        quantidade_consumo = quantidade_consumo.sort(function (a, b) {
            return b.quantidade - a.quantidade;
        });
        quantidade_consumo = quantidade_consumo.slice(0, 5);
        console.log("5 clientes que mais consumiram em valor");
        quantidade_consumo.forEach(function (cliente) {
            console.log("\n-------------------------------------------------------\n");
            console.log("CPF: " + cliente.cpf);
            console.log("Nome: " + cliente.nome);
            console.log("Valor Total: R$ ".concat(cliente.quantidade));
        });
    };
    return ValorConsumo;
}(listagem_1.default));
exports.default = ValorConsumo;
