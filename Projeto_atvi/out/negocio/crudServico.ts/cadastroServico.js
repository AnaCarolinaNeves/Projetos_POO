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
var servico_1 = __importDefault(require("../../modelo/servico"));
var cadastro_1 = __importDefault(require("../metodos/cadastro"));
var CadastroServico = /** @class */ (function (_super) {
    __extends(CadastroServico, _super);
    function CadastroServico(servico) {
        var _this = _super.call(this) || this;
        _this.servicos = servico;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    CadastroServico.prototype.cadastrar = function () {
        console.log("\nIn\u00EDcio do cadastro do servi\u00E7o");
        var id = this.entrada.receberTexto("Por favor, insira o c\u00F3digo de identifica\u00E7\u00E3o do servi\u00E7o: ");
        var nome = this.entrada.receberTexto("Por favor, informe o nome do servi\u00E7o: ");
        var preco = this.entrada.receberNumero("Por favor, informe o pre\u00E7o do servi\u00E7o R$: ");
        var servico = new servico_1.default(id, nome, preco);
        this.servicos.push(servico);
        console.log("\nCadastro conclu\u00EDdo :)\n");
    };
    return CadastroServico;
}(cadastro_1.default));
exports.default = CadastroServico;
