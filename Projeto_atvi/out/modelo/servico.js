"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Servico = /** @class */ (function () {
    function Servico(identificacao, nome, custo) {
        this.identificacao = identificacao;
        this.nome = nome;
        this.custo = custo;
    }
    Object.defineProperty(Servico.prototype, "getIdentificacao", {
        get: function () {
            return this.identificacao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Servico.prototype, "getCusto", {
        get: function () {
            return this.custo;
        },
        enumerable: false,
        configurable: true
    });
    Servico.prototype.setCusto = function (custo) {
        this.custo = custo;
    };
    return Servico;
}());
exports.default = Servico;
