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
var cpf_1 = __importDefault(require("../../modelo/cpf"));
var atualiza_1 = __importDefault(require("../metodos/atualiza"));
var listagemClientes_1 = __importDefault(require("./listagemClientes"));
var AtualizaCliente = /** @class */ (function (_super) {
    __extends(AtualizaCliente, _super);
    function AtualizaCliente(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    AtualizaCliente.prototype.atualiza = function () {
        var _this = this;
        console.log("Atualizar cadastro de cliente: ");
        var listaClientes = new listagemClientes_1.default(this.clientes);
        listaClientes.listar();
        var cpf = this.entrada.receberTexto("Por favor, digite o número do CPF que se deseja atualizar: ");
        this.clientes.forEach(function (clientes) {
            if (cpf === clientes.getCpf.getValor) {
                var verificacao = true;
                while (verificacao) {
                    console.log("\n-----------------------------------------------\n");
                    console.log("\n Escolha um dado para ser atualizado: \n");
                    console.log("\n 1 - Nome \n");
                    console.log("\n 2 - Nome Social \n");
                    console.log("\n 3 - CPF \n");
                    console.log("\n 4 - RG \n");
                    console.log("\n 5 - Telefone \n");
                    console.log("\n 6 - Gênero \n");
                    console.log("\n 0 - Sair");
                    console.log("\n-----------------------------------------------\n");
                    var opcao = _this.entrada.receberNumero("Por favor, digite o número da opção de dado que deseja atualizar: ");
                    switch (opcao) {
                        case 1:
                            var nome = _this.entrada.receberTexto("Por favor, digite o nome do cliente: ");
                            clientes.nome = nome;
                            console.log("\nNome atualizado com sucesso! ");
                            console.log("--------------------------------------");
                            console.log("\n");
                            break;
                        case 2:
                            var nomeSocial = _this.entrada.receberTexto("Por favor, digite o nome social do cliente: ");
                            clientes.nomeSocial = nomeSocial;
                            console.log("\nNome social atualizado com sucesso! ");
                            console.log("--------------------------------------");
                            console.log("\n");
                            break;
                        case 3:
                            var cpf_2 = _this.entrada.receberTexto("Por favor, digite o CPF do cliente: ");
                            var data = _this.entrada.receberTexto("Por favor, digite a data de emissão do CPF: ");
                            var partesData = data.split('/');
                            var ano = new Number(partesData[2].valueOf()).valueOf();
                            var mes = new Number(partesData[1].valueOf()).valueOf();
                            if (mes == 1) {
                                mes = 0;
                            }
                            else {
                                mes = mes - 1;
                            }
                            var dia = new Number(partesData[0].valueOf()).valueOf();
                            var dataEmissaoCPF = new Date(ano, mes, dia);
                            var novoCpf = new cpf_1.default(cpf_2, dataEmissaoCPF);
                            clientes.setCpf = novoCpf;
                            console.log("\n CPF atualizado com sucesso! ");
                            console.log("--------------------------------------");
                            console.log("\n");
                            break;
                        case 4:
                            var rgs = clientes.getRgs;
                            for (var i = 0; i < rgs.length; i++) {
                                console.log(i + 1 + " - RG: " + rgs[i].getValor);
                                var dataRg_1 = rgs[i].getDataEmissao;
                                console.log(i + 1 + " - Data Emiss\u00E3o RG: " + dataRg_1.toLocaleDateString());
                            }
                            var opcaoRg = _this.entrada.receberNumero("Por favor, digite a opção de RG que deseja alterar: ");
                            if (opcaoRg > rgs.length) {
                                console.log("Opção inválida!");
                                break;
                            }
                            var rg = _this.entrada.receberTexto("Por favor, digite o RG do cliente: ");
                            var dataRg = _this.entrada.receberTexto("Por favor, digite a data de emissão do RG: ");
                            //formata data
                            var partesDataRg = dataRg.split('/');
                            var anorg = new Number(partesDataRg[2].valueOf()).valueOf();
                            var mesrg = new Number(partesDataRg[1].valueOf()).valueOf();
                            if (mesrg == 1) {
                                mesrg = 0;
                            }
                            else {
                                mesrg = mesrg - 1;
                            }
                            var diarg = new Number(partesDataRg[0].valueOf()).valueOf();
                            //
                            var dataEmissaoRg = new Date(anorg, mesrg, diarg);
                            clientes.getRgs[opcaoRg - 1].setvalor(rg);
                            clientes.getRgs[opcaoRg - 1].setDataEmissao(dataEmissaoRg);
                            console.log("\nRG atualizado com sucesso! ");
                            console.log("--------------------------------------");
                            console.log("\n");
                            break;
                        case 5:
                            var telefones = clientes.getTelefones;
                            for (var i = 0; i < telefones.length; i++) {
                                console.log(i + 1 + ' - Telefone: (' + telefones[i].getDdd + ')' + telefones[i].getNumero);
                            }
                            var opcaoTelefone = _this.entrada.receberNumero("Por favor, digite a opção de telefone que deseja alterar: ");
                            if (opcaoTelefone > telefones.length) {
                                console.log("Opção inválida!");
                                break;
                            }
                            var DDD = _this.entrada.receberTexto("Por favor, digite o DDD do cliente: ");
                            var numero = _this.entrada.receberTexto("Por favor, digite o telefone do cliente: ");
                            clientes.getTelefones[opcaoTelefone - 1].setDdd(DDD);
                            clientes.getTelefones[opcaoTelefone - 1].setNumero(numero);
                            console.log("\nTelefone atualizado com sucesso! ");
                            console.log("--------------------------------------");
                            console.log("\n");
                            break;
                        case 6:
                            var genero = _this.entrada.receberTexto("Por favor, digite o gênero do cliente: ");
                            clientes.genero = genero;
                            console.log("\n Gênero atualizado com sucesso! ");
                            console.log("--------------------------------------");
                            console.log("\n");
                            break;
                        case 0:
                            verificacao = false;
                            console.log("Saindo ");
                        default:
                            console.log("Para realizar a atualização informe uma opção válida!");
                            break;
                    }
                }
            }
        });
    };
    return AtualizaCliente;
}(atualiza_1.default));
exports.default = AtualizaCliente;
