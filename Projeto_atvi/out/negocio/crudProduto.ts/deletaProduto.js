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
var entrada_1 = __importDefault(require("../../io/entrada"));
var deleta_1 = __importDefault(require("../metodos/deleta"));
var listagemProdutos_1 = __importDefault(require("./listagemProdutos"));
var DeletaProduto = /** @class */ (function (_super) {
    __extends(DeletaProduto, _super);
    function DeletaProduto(produtos) {
        var _this = _super.call(this) || this;
        _this.produtos = produtos;
        return _this;
    }
    DeletaProduto.prototype.listarProdutos = function () {
        var listaProdutos = new listagemProdutos_1.default(this.produtos);
        listaProdutos.listar();
        var entrada = new entrada_1.default();
        var id = entrada.receberTexto("Informe o código de identificaçõ do produto: ");
        var indice = this.produtos.findIndex(function (i) { return i.getId === id; });
        this.produtos.splice(indice, 1);
        return;
    };
    DeletaProduto.prototype.deletar = function () {
        this.listarProdutos();
        console.log("Produto removido com sucesso!");
        console.log("--------------------------------------");
        console.log("\n");
    };
    return DeletaProduto;
}(deleta_1.default));
exports.default = DeletaProduto;
