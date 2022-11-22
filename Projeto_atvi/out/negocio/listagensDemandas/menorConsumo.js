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
var MenorConsumo = /** @class */ (function (_super) {
    __extends(MenorConsumo, _super);
    function MenorConsumo(empresa) {
        var _this = _super.call(this) || this;
        _this.clientes = empresa.getClientes,
            _this.produtos = empresa.getProdutos,
            _this.servicos = empresa.getServicos;
        return _this;
    }
    MenorConsumo.prototype.listar = function () {
        var nome;
        var cpf;
        var consumo_Total;
        var ordenacao = [];
        var quantidade_consumo = [];
        var i = 1;
        this.clientes.forEach(function (cliente) {
            nome = cliente.nome;
            cpf = cliente.getCpf.getValor;
            consumo_Total = cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length;
            quantidade_consumo.push({
                nome: nome,
                cpf: cpf,
                quantidade: consumo_Total,
                posicao: i
            });
            i = i + 1;
        });
        ordenacao = quantidade_consumo.sort(function (x, y) {
            return y.quantidade - x.quantidade;
        });
        ordenacao.reverse();
        ordenacao = ordenacao.slice(0, 10);
        console.log("10 Clientes que menos consumiram produtos ou servicos em quantidade");
        ordenacao.forEach(function (cliente) {
            console.log("\n-------------------------------------------\n");
            console.log("Nome: ".concat(cliente.nome));
            console.log("CPF: ".concat(cliente.cpf));
            console.log("Quantidade de produtos e servicos consumidos: ".concat(cliente.quantidade));
            console.log("\n-------------------------------------------\n");
        });
    };
    return MenorConsumo;
}(listagem_1.default));
exports.default = MenorConsumo;
