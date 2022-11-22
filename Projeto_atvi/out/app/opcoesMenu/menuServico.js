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
var atualizaServico_1 = __importDefault(require("../../negocio/crudServico.ts/atualizaServico"));
var cadastroServico_1 = __importDefault(require("../../negocio/crudServico.ts/cadastroServico"));
var deletaServico_1 = __importDefault(require("../../negocio/crudServico.ts/deletaServico"));
var listagemServico_1 = __importDefault(require("../../negocio/crudServico.ts/listagemServico"));
var listagem_1 = __importDefault(require("../../negocio/metodos/listagem"));
var MenuServico = /** @class */ (function (_super) {
    __extends(MenuServico, _super);
    function MenuServico(empresa) {
        var _this = _super.call(this) || this;
        _this.empresa = empresa;
        return _this;
    }
    MenuServico.prototype.menuCliente = function (empresa) {
        var chave = true;
        console.log("Menu do Cliente");
        while (chave) {
            console.log("Opções gerais para clientes:\n");
            console.log("1 - Cadastrar servi\u00E7o");
            if (empresa.getClientes.length) {
                console.log("2 - Atualizar cadastro de servi\u00E7o");
                console.log("3 - Deletar cadastro de servi\u00E7o");
                console.log("4 - Consultar servi\u00E7os cadastrados");
            }
            console.log("0 - Voltar para o menu principal\n");
            var entrada = new entrada_1.default();
            var opcao = entrada.receberNumero("Escolha uma opção: ");
            switch (opcao) {
                case 1:
                    var cadastro = new cadastroServico_1.default(empresa.getServicos);
                    cadastro.cadastrar();
                    break;
                case 2:
                    var atualiza = new atualizaServico_1.default(empresa.getServicos);
                    atualiza.atualiza();
                    break;
                case 3:
                    var deleta = new deletaServico_1.default(empresa.getServicos);
                    deleta.deletar();
                    break;
                case 4:
                    var listagem = new listagemServico_1.default(empresa.getServicos);
                    listagem.listar();
                    break;
                case 0:
                    return;
                default:
                    console.log("\nInsira uma opção válida ");
            }
        }
    };
    MenuServico.prototype.listar = function () {
        this.menuCliente(this.empresa);
    };
    return MenuServico;
}(listagem_1.default));
exports.default = MenuServico;
