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
var ProdutosServicosMaisConsumidos = /** @class */ (function (_super) {
    __extends(ProdutosServicosMaisConsumidos, _super);
    function ProdutosServicosMaisConsumidos(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        return _this;
    }
    ProdutosServicosMaisConsumidos.prototype.listar = function () {
        var produtos_consumidos = [];
        this.clientes.map(function (cliente) {
            cliente.getProdutosConsumidos.forEach(function (produto) {
                var nome = produto.nome;
                var quantidade = produtos_consumidos[produto.nome] = (produtos_consumidos[produto.nome] || 0) + 1;
                produtos_consumidos.push({
                    nome: nome,
                    quantidade: quantidade
                });
            });
        });
        var ordena_produto = produtos_consumidos.sort(function (a, b) {
            return b.quantidade - a.quantidade;
        }).slice(0, 1);
        console.log("\nProduto mais consumido: ");
        ordena_produto.forEach(function (consumidos) {
            console.log("Nome: ".concat(consumidos.nome));
            console.log("Quantidade: ".concat(consumidos.quantidade));
            console.log("\n-------------------------------------------------------\n");
        });
        var servicos_consumidos = [];
        this.clientes.map(function (cliente) {
            cliente.getServicosConsumidos.forEach(function (servico) {
                var nome = servico.nome;
                var quantidade = servicos_consumidos[servico.nome] = (servicos_consumidos[servico.nome] || 0) + 1;
                servicos_consumidos.push({
                    nome: nome,
                    quantidade: quantidade
                });
            });
        });
        var ordena_servico = servicos_consumidos.sort(function (a, b) {
            return b.quantidade - a.quantidade;
        }).slice(0, 1);
        console.log("\nServiço mais consumido:");
        ordena_servico.forEach(function (consumidos) {
            console.log("Nome: ".concat(consumidos.nome));
            console.log("Quantidade: ".concat(consumidos.quantidade));
            console.log("\n-------------------------------------------------------\n");
        });
    };
    return ProdutosServicosMaisConsumidos;
}(listagem_1.default));
exports.default = ProdutosServicosMaisConsumidos;
