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
var atualiza_1 = __importDefault(require("../metodos/atualiza"));
var listagemProdutos_1 = __importDefault(require("./listagemProdutos"));
var AtualizaProduto = /** @class */ (function (_super) {
    __extends(AtualizaProduto, _super);
    function AtualizaProduto(produtos) {
        var _this = _super.call(this) || this;
        _this.produtos = produtos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    AtualizaProduto.prototype.atualiza = function () {
        var _this = this;
        console.log("Atualização de Produtos");
        var listProd = new listagemProdutos_1.default(this.produtos);
        listProd.listar();
        var id = this.entrada.receberTexto("Informe o código de identificação do produto que deseja atualizar: ");
        this.produtos.forEach(function (produto) {
            if (id === produto.getId) {
                var validacao = true;
                while (validacao) {
                    console.log("Selecione uma opção para atualizar: ");
                    console.log("--------------------------------------");
                    console.log("Dados para atualização: ");
                    console.log("[1] Nome do Produto");
                    console.log("[2] Preço");
                    console.log("[0] Sair");
                    console.log("--------------------------------------");
                    var entrada = new entrada_1.default();
                    var opcao = entrada.receberNumero("Escolha uma opção: ");
                    switch (opcao) {
                        case 1:
                            var nome = _this.entrada.receberTexto("Informe o novo nome do Produto: ");
                            produto.nome = nome;
                            console.log("Nome atualizado com Sucesso!\n");
                            console.log("--------------------------------------");
                            console.log("\n");
                            break;
                        case 2:
                            var preco = _this.entrada.receberNumero("Informe o novo preço do produto R$: ");
                            produto.setPreco(preco);
                            console.log("Preço atualizado com Sucesso!\n");
                            console.log("--------------------------------------");
                            console.log("\n");
                            break;
                        case 0:
                            validacao = false;
                            console.log(" Saindo.");
                            break;
                        default:
                            console.log("Para realizar a atualização informe uma opção válida!");
                            break;
                    }
                }
            }
        });
    };
    return AtualizaProduto;
}(atualiza_1.default));
exports.default = AtualizaProduto;
