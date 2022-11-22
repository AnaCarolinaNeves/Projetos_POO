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
var consumo_1 = __importDefault(require("../dominio/consumo"));
var ordenadorConsumo_1 = __importDefault(require("../dominio/ordenadorConsumo"));
var listagem_1 = __importDefault(require("../metodos/listagem"));
var GeneroConsumo = /** @class */ (function (_super) {
    __extends(GeneroConsumo, _super);
    function GeneroConsumo(clientes, produtos, servicos) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.produtos = produtos;
        _this.servicos = servicos;
        return _this;
    }
    GeneroConsumo.prototype.listar = function () {
        //Listagem de produtos e serviços pelo gênero feminino
        var cliente_genero = 'F';
        var meninas = [];
        for (var index = 0; index < this.clientes.length; index++) {
            var cliente = this.clientes[index];
            if (cliente.genero == cliente_genero) {
                meninas.push(cliente);
            }
        }
        var consumoF = [];
        //verifica produto
        this.produtos.forEach(function (produto) {
            var consumo = new consumo_1.default();
            consumo.nome = produto.nome;
            consumo.valor = 0;
            consumoF.push(consumo);
        });
        meninas.forEach(function (meninas) {
            meninas.getProdutosConsumidos.forEach(function (produtoConsumido) {
                consumoF.forEach(function (consumoF) {
                    if (produtoConsumido.nome == consumoF.nome) {
                        consumoF.valor = consumoF.valor + 1;
                    }
                });
            });
        });
        var ordenadorF = new ordenadorConsumo_1.default();
        ordenadorF.consumo = consumoF;
        var consumoOrdenadosF = ordenadorF.ordenarConsumo();
        console.log("Produtos mais consumidos pelo gênero feminino: ");
        console.log(consumoOrdenadosF);
        // verifica serviços
        var consumoServi = [];
        this.servicos.forEach(function (servico) {
            var consumoSer = new consumo_1.default();
            consumoSer.nome = servico.nome;
            consumoSer.valor = 0;
            consumoServi.push(consumoSer);
        });
        meninas.forEach(function (meninas) {
            meninas.getServicosConsumidos.forEach(function (servicoConsumido) {
                consumoServi.forEach(function (consumoServi) {
                    if (servicoConsumido.nome == consumoServi.nome) {
                        consumoServi.valor = consumoServi.valor + 1;
                    }
                });
            });
        });
        var ordenadorServF = new ordenadorConsumo_1.default();
        ordenadorServF.consumo = consumoServi;
        var consumoOrdenadosServF = ordenadorServF.ordenarConsumo();
        console.log("Serviços mais consumidos pelo gênero feminino: ");
        console.log(consumoOrdenadosServF);
        //masculino
        var cliente_generoM = 'M';
        var meninos = [];
        for (var index = 0; index < this.clientes.length; index++) {
            var cliente = this.clientes[index];
            if (cliente.genero == cliente_generoM) {
                meninos.push(cliente);
            }
        }
        var consumoM = [];
        //verifica produto
        this.produtos.forEach(function (produto) {
            var consumo = new consumo_1.default();
            consumo.nome = produto.nome;
            consumo.valor = 0;
            consumoM.push(consumo);
        });
        meninos.forEach(function (menino) {
            menino.getProdutosConsumidos.forEach(function (produtoConsumido) {
                consumoM.forEach(function (consumo) {
                    if (produtoConsumido.nome == consumo.nome) {
                        consumo.valor = consumo.valor + 1;
                    }
                });
            });
        });
        var ordenador = new ordenadorConsumo_1.default();
        ordenador.consumo = consumoM;
        var consumoMordenados = ordenador.ordenarConsumo();
        console.log("Produtos mais consumidos pelo gênero masculino: ");
        console.log(consumoMordenados);
        //verifica serviços
        var consumoServiM = [];
        this.servicos.forEach(function (servico) {
            var consumoSerM = new consumo_1.default();
            consumoSerM.nome = servico.nome;
            consumoSerM.valor = 0;
            consumoServiM.push(consumoSerM);
        });
        meninos.forEach(function (meninos) {
            meninos.getServicosConsumidos.forEach(function (servicoConsumido) {
                consumoServiM.forEach(function (consumoServiM) {
                    if (servicoConsumido.nome == consumoServiM.nome) {
                        consumoServiM.valor = consumoServiM.valor + 1;
                    }
                });
            });
        });
        var ordenadorServM = new ordenadorConsumo_1.default();
        ordenadorServM.consumo = consumoServiM;
        var consumoOrdenadosServM = ordenadorServM.ordenarConsumo();
        console.log("Serviços mais consumidos pelo gênero masculino: ");
        console.log(consumoOrdenadosServM);
    };
    return GeneroConsumo;
}(listagem_1.default));
exports.default = GeneroConsumo;
