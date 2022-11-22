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
var generoCliente_1 = __importDefault(require("../../negocio/listagensDemandas/generoCliente"));
var generoConsumo_1 = __importDefault(require("../../negocio/listagensDemandas/generoConsumo"));
var maiorConsumo_1 = __importDefault(require("../../negocio/listagensDemandas/maiorConsumo"));
var menorConsumo_1 = __importDefault(require("../../negocio/listagensDemandas/menorConsumo"));
var produtosServicosMaisConsumidos_1 = __importDefault(require("../../negocio/listagensDemandas/produtosServicosMaisConsumidos"));
var valorConsumo_1 = __importDefault(require("../../negocio/listagensDemandas/valorConsumo"));
var listagem_1 = __importDefault(require("../../negocio/metodos/listagem"));
var MenuListagens = /** @class */ (function (_super) {
    __extends(MenuListagens, _super);
    function MenuListagens(empresa) {
        var _this = _super.call(this) || this;
        _this.empresa = empresa;
        return _this;
    }
    MenuListagens.prototype.menuListagens = function (empresa) {
        var execucao = true;
        console.log("Bem-vindo ao Menu de Listagem");
        while (execucao) {
            console.log("Listagens: \n");
            if (empresa.getClientes.length)
                console.log("1 - 10 clientes que mais consumiram produtos ou serviços, em quantidade\n");
            console.log("2 - Listagem clientes por gênero.\n");
            if (empresa.getServicos.length || empresa.getProdutos.length)
                console.log("3 - Listagem serviços ou produtos mais consumidos\n");
            if (empresa.getServicos.length || empresa.getProdutos.length)
                console.log("4 - Listagem serviços ou produtos mais consumidos por gênero\n");
            if (empresa.getServicos.length || empresa.getProdutos.length)
                console.log("5 - Listagem 10 clientes que menos consumiram produtos ou serviços\n");
            console.log("6 - Listagem dos 5 clientes que mais consumiram em valor, não em quantidade\n");
            console.log("0 - Voltar Para o Menu Principal\n");
            var entrada = new entrada_1.default();
            var opcao = entrada.receberNumero("Escolha uma opção: ");
            switch (opcao) {
                case 1:
                    var maior_Consumo = new maiorConsumo_1.default(empresa);
                    maior_Consumo.listar();
                    break;
                case 2:
                    var genero_cliente = new generoCliente_1.default(empresa.getClientes);
                    genero_cliente.listar();
                    break;
                case 3:
                    var produtosServicosMaisConsumidos = new produtosServicosMaisConsumidos_1.default(empresa.getClientes);
                    produtosServicosMaisConsumidos.listar();
                    break;
                case 4:
                    var generoConsumo = new generoConsumo_1.default(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
                    generoConsumo.listar();
                    break;
                case 5:
                    var menorConsumo = new menorConsumo_1.default(empresa);
                    menorConsumo.listar();
                    break;
                case 6:
                    var valorConsumo = new valorConsumo_1.default(empresa.getClientes);
                    valorConsumo.listar();
                    break;
                case 0:
                    return;
                default:
                    break;
            }
        }
    };
    MenuListagens.prototype.listar = function () {
        this.menuListagens(this.empresa);
    };
    return MenuListagens;
}(listagem_1.default));
exports.default = MenuListagens;
