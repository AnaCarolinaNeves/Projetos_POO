import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import RG from "../../modelo/rg";
import Telefone from "../../modelo/telefone";
import Cadastro from "../metodos/cadastro";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {

        console.log(`\nInício do cadastro do cliente`);

        let nome = this.entrada.receberTexto(`Por favor, informe o nome do cliente: `);
        let nomeSocial = this.entrada.receberTexto(`Por favor, informe o nome social do cliente: `);
        let genero = this.entrada.receberTexto("Por favor, informe o genero: (F/M): ")
        let valor = this.entrada.receberTexto(`Por favor, informe o número do cpf: `);
        let dataEmissaoCpf = this.entrada.receberTexto(`Por favor, informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        
        //Lista de possíveis Rgs
        let rgs: RG[] = [];
        let respostaRg ='sim';
        while (respostaRg === 'sim') {
            
            let valorRg = this.entrada.receberTexto(`Por favor, informe o RG do cliente: `);
            let dataEmissaoRg= this.entrada.receberTexto(`Por favor, informe a data de emissão do rg, no padrão dd/mm/yyyy: `);

            //Formata data
            let partesDataRg = dataEmissaoRg.split('/')
            let anorg = new Number(partesDataRg[2].valueOf()).valueOf()
            let mesrg = new Number(partesDataRg[1].valueOf()).valueOf()
            if( mesrg == 1 ){
                mesrg = 0
            }else{
                mesrg = mesrg -1
            }
            let diarg = new Number(partesDataRg[0].valueOf()).valueOf()

            let dataEmissaorg = new Date(anorg, mesrg, diarg)

            //Cria objeto rg
            let rg = new RG(valorRg, dataEmissaorg);
            rgs.push(rg);

            console.log("Há mais um RG para ser cadastrado? - Responda com(sim/nao): ");
            respostaRg = this.entrada.receberTexto(`Por favor, digite sua resposta: `);


        }

        
        //Lista de possíveis telefones
        let telefones: Telefone[] = [];
        
        let respostaTel = 'sim';
        while (respostaTel === "sim") {

            let ddd = this.entrada.receberTexto(`Por favor, insira o DDD do cliente: `);
            let numero = this.entrada.receberTexto(`Por favor, insira o número de telefone do cliente: `);
                
            let telefone = new Telefone(ddd, numero);
            
            telefones.push(telefone);
            
            
            console.log("Há mais de um número de telefone para ser cadastrado? - Responda com(sim/nao): ");
            respostaTel = this.entrada.receberTexto(`Por favor, digite sua resposta: `);
        }
 
        //formata data 
        let partesData = dataEmissaoCpf.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        if( mes == 1 ){
            mes = 0
        }else{
            mes = mes -1
        }

        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissaoCPF = new Date(ano, mes, dia)


        //classes
       
        let cpf = new CPF(valor, dataEmissaoCPF);
        

        let cliente = new Cliente(nome, nomeSocial, genero, cpf, rgs, telefones);


        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }
}