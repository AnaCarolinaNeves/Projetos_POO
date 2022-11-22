"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RG = /** @class */ (function () {
    function RG(numero, dataEmissaoRg) {
        this.valor = numero;
        this.dataEmissao = dataEmissaoRg;
    }
    Object.defineProperty(RG.prototype, "getValor", {
        get: function () {
            return this.valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RG.prototype, "getDataEmissao", {
        get: function () {
            return this.dataEmissao;
        },
        enumerable: false,
        configurable: true
    });
    RG.prototype.setvalor = function (numero) {
        this.valor = numero;
    };
    RG.prototype.setDataEmissao = function (dataEmissao) {
        this.dataEmissao = dataEmissao;
    };
    return RG;
}());
exports.default = RG;
