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
var atualizaCliente_1 = __importDefault(require("../../negocio/crudCliente/atualizaCliente"));
var cadastroCliente_1 = __importDefault(require("../../negocio/crudCliente/cadastroCliente"));
var deletarCliente_1 = __importDefault(require("../../negocio/crudCliente/deletarCliente"));
var listagemClientes_1 = __importDefault(require("../../negocio/crudCliente/listagemClientes"));
var listagem_1 = __importDefault(require("../../negocio/metodos/listagem"));
var MenuCliente = /** @class */ (function (_super) {
    __extends(MenuCliente, _super);
    function MenuCliente(empresa) {
        var _this = _super.call(this) || this;
        _this.empresa = empresa;
        return _this;
    }
    MenuCliente.prototype.menuCliente = function (empresa) {
        var chave = true;
        console.log("Menu do Cliente");
        while (chave) {
            console.log("Opções gerais para clientes:\n");
            console.log("1 - Cadastrar cliente");
            if (empresa.getClientes.length) {
                console.log("2 - Atualizar cadastro de cliente");
                console.log("3 - Deletar cadastro de cliente");
                console.log("4 - Consultar clientes cadastrados");
            }
            console.log("0 - Voltar para o menu principal\n");
            var entrada = new entrada_1.default();
            var opcao = entrada.receberNumero("Escolha uma opção: ");
            switch (opcao) {
                case 1:
                    var cadastro = new cadastroCliente_1.default(empresa.getClientes);
                    cadastro.cadastrar();
                    break;
                case 2:
                    var atualiza = new atualizaCliente_1.default(empresa.getClientes);
                    atualiza.atualiza();
                    break;
                case 3:
                    var deleta = new deletarCliente_1.default(empresa.getClientes);
                    deleta.deletar();
                    break;
                case 4:
                    var listagem = new listagemClientes_1.default(empresa.getClientes);
                    listagem.listar();
                    break;
                case 0:
                    return;
                default:
                    console.log("\nInsira uma opção válida ");
            }
        }
    };
    MenuCliente.prototype.listar = function () {
        this.menuCliente(this.empresa);
    };
    return MenuCliente;
}(listagem_1.default));
exports.default = MenuCliente;
