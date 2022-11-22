"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrdenadorConsumo = /** @class */ (function () {
    function OrdenadorConsumo() {
    }
    OrdenadorConsumo.prototype.ordenarConsumo = function () {
        return this.consumo.sort(function (c1, c2) { return (c1.valor > c2.valor ? -1 : 1); });
        // arrayOfObjects.sort((a, b) => (a.propertyToSortBy > b.propertyToSortBy ? -1 : 1));
    };
    return OrdenadorConsumo;
}());
exports.default = OrdenadorConsumo;
