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
var atualizaProduto_1 = __importDefault(require("../../negocio/crudProduto.ts/atualizaProduto"));
var cadastroProduto_1 = __importDefault(require("../../negocio/crudProduto.ts/cadastroProduto"));
var deletaProduto_1 = __importDefault(require("../../negocio/crudProduto.ts/deletaProduto"));
var listagemProdutos_1 = __importDefault(require("../../negocio/crudProduto.ts/listagemProdutos"));
var listagem_1 = __importDefault(require("../../negocio/metodos/listagem"));
var MenuProduto = /** @class */ (function (_super) {
    __extends(MenuProduto, _super);
    function MenuProduto(empresa) {
        var _this = _super.call(this) || this;
        _this.empresa = empresa;
        return _this;
    }
    MenuProduto.prototype.menuProduto = function (empresa) {
        var chave = true;
        console.log("Menu do Produto");
        while (chave) {
            console.log("Opções gerais para produtos:\n");
            console.log("1 - Cadastrar produto");
            if (empresa.getClientes.length) {
                console.log("2 - Atualizar cadastro de produto");
                console.log("3 - Deletar cadastro de produto");
                console.log("4 - Consultar produtos cadastrados");
            }
            console.log("0 - Voltar para o menu principal\n");
            var entrada = new entrada_1.default();
            var opcao = entrada.receberNumero("Escolha uma opção: ");
            switch (opcao) {
                case 1:
                    var cadastro = new cadastroProduto_1.default(empresa.getProdutos);
                    cadastro.cadastrar();
                    break;
                case 2:
                    var atualiza = new atualizaProduto_1.default(empresa.getProdutos);
                    atualiza.atualiza();
                    break;
                case 3:
                    var deletar = new deletaProduto_1.default(empresa.getProdutos);
                    deletar.deletar();
                    break;
                case 4:
                    var listagem = new listagemProdutos_1.default(empresa.getProdutos);
                    listagem.listar();
                    break;
                case 0:
                    return;
                default:
                    console.log("\nInsira uma opção válida ");
            }
        }
    };
    MenuProduto.prototype.listar = function () {
        this.menuProduto(this.empresa);
    };
    return MenuProduto;
}(listagem_1.default));
exports.default = MenuProduto;
