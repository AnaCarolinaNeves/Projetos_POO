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
var listagemServico_1 = __importDefault(require("./listagemServico"));
var DeletaServico = /** @class */ (function (_super) {
    __extends(DeletaServico, _super);
    function DeletaServico(servicos) {
        var _this = _super.call(this) || this;
        _this.servicos = servicos;
        return _this;
    }
    DeletaServico.prototype.listarServicos = function () {
        var listaServicos = new listagemServico_1.default(this.servicos);
        listaServicos.listar();
        var entrada = new entrada_1.default();
        var identificação = entrada.receberTexto("Informe o código de identificação do serviço: ");
        var indice = this.servicos.findIndex(function (i) { return i.getIdentificacao === identificação; });
        this.servicos.splice(indice, 1);
        return;
    };
    DeletaServico.prototype.deletar = function () {
        this.listarServicos();
        console.log("Serviço removido com sucesso!");
        console.log("--------------------------------------");
        console.log("\n");
    };
    return DeletaServico;
}(deleta_1.default));
exports.default = DeletaServico;
