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
var cliente_1 = __importDefault(require("../../modelo/cliente"));
var cpf_1 = __importDefault(require("../../modelo/cpf"));
var rg_1 = __importDefault(require("../../modelo/rg"));
var telefone_1 = __importDefault(require("../../modelo/telefone"));
var cadastro_1 = __importDefault(require("../metodos/cadastro"));
var CadastroCliente = /** @class */ (function (_super) {
    __extends(CadastroCliente, _super);
    function CadastroCliente(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    CadastroCliente.prototype.cadastrar = function () {
        console.log("\nIn\u00EDcio do cadastro do cliente");
        var nome = this.entrada.receberTexto("Por favor, informe o nome do cliente: ");
        var nomeSocial = this.entrada.receberTexto("Por favor, informe o nome social do cliente: ");
        var genero = this.entrada.receberTexto("Por favor, informe o genero: (F/M): ");
        var valor = this.entrada.receberTexto("Por favor, informe o n\u00FAmero do cpf: ");
        var dataEmissaoCpf = this.entrada.receberTexto("Por favor, informe a data de emiss\u00E3o do cpf, no padr\u00E3o dd/mm/yyyy: ");
        //Lista de possíveis Rgs
        var rgs = [];
        var respostaRg = 'sim';
        while (respostaRg === 'sim') {
            var valorRg = this.entrada.receberTexto("Por favor, informe o RG do cliente: ");
            var dataEmissaoRg = this.entrada.receberTexto("Por favor, informe a data de emiss\u00E3o do rg, no padr\u00E3o dd/mm/yyyy: ");
            //Formata data
            var partesDataRg = dataEmissaoRg.split('/');
            var anorg = new Number(partesDataRg[2].valueOf()).valueOf();
            var mesrg = new Number(partesDataRg[1].valueOf()).valueOf();
            if (mesrg == 1) {
                mesrg = 0;
            }
            else {
                mesrg = mesrg - 1;
            }
            var diarg = new Number(partesDataRg[0].valueOf()).valueOf();
            var dataEmissaorg = new Date(anorg, mesrg, diarg);
            //Cria objeto rg
            var rg = new rg_1.default(valorRg, dataEmissaorg);
            rgs.push(rg);
            console.log("Há mais um RG para ser cadastrado? - Responda com(sim/nao): ");
            respostaRg = this.entrada.receberTexto("Por favor, digite sua resposta: ");
        }
        //Lista de possíveis telefones
        var telefones = [];
        var respostaTel = 'sim';
        while (respostaTel === "sim") {
            var ddd = this.entrada.receberTexto("Por favor, insira o DDD do cliente: ");
            var numero = this.entrada.receberTexto("Por favor, insira o n\u00FAmero de telefone do cliente: ");
            var telefone = new telefone_1.default(ddd, numero);
            telefones.push(telefone);
            console.log("Há mais de um número de telefone para ser cadastrado? - Responda com(sim/nao): ");
            respostaTel = this.entrada.receberTexto("Por favor, digite sua resposta: ");
        }
        //formata data 
        var partesData = dataEmissaoCpf.split('/');
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
        //classes
        var cpf = new cpf_1.default(valor, dataEmissaoCPF);
        var cliente = new cliente_1.default(nome, nomeSocial, genero, cpf, rgs, telefones);
        this.clientes.push(cliente);
        console.log("\nCadastro conclu\u00EDdo :)\n");
    };
    return CadastroCliente;
}(cadastro_1.default));
exports.default = CadastroCliente;
