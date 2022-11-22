"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FormataData = /** @class */ (function () {
    function FormataData() {
    }
    FormataData.prototype.formatarData = function (ano, mes, dia) {
        if (mes == "1") {
            mes = "0";
        }
        else {
            mes = "".concat(parseInt(mes) - 1);
        }
        var year = new Number(ano);
        var mounth = new Number(mes);
        var day = new Number(dia);
        return new Date(year.valueOf(), mounth.valueOf(), day.valueOf());
    };
    return FormataData;
}());
exports.default = FormataData;
