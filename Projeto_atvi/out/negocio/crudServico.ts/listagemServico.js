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
var ListagemServicos = /** @class */ (function (_super) {
    __extends(ListagemServicos, _super);
    function ListagemServicos(servicos) {
        var _this = _super.call(this) || this;
        _this.servicos = servicos;
        return _this;
    }
    ListagemServicos.prototype.listar = function () {
        console.log("\nListagem de servicos cadastrados: \n");
        this.servicos.forEach(function (servico) {
            console.log("C\u00F3digo de identifica\u00E7\u00E3o do servi\u00E7o: " + servico.getIdentificacao);
            console.log("Nome do servi\u00E7o: " + servico.nome);
            console.log("Pre\u00E7o do servi\u00E7o R$: " + servico.getCusto);
            console.log("--------------------------------------");
        });
        console.log("\n");
    };
    return ListagemServicos;
}(listagem_1.default));
exports.default = ListagemServicos;
