"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Produto = /** @class */ (function () {
    function Produto(id, nome, preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
    Object.defineProperty(Produto.prototype, "getId", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "getPreco", {
        get: function () {
            return this.preco;
        },
        enumerable: false,
        configurable: true
    });
    Produto.prototype.setPreco = function (preco) {
        this.preco = preco;
    };
    return Produto;
}());
exports.default = Produto;
