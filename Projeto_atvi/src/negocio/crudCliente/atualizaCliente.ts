import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import CPF from "../../modelo/cpf";
import RG from "../../modelo/rg";
import Telefone from "../../modelo/telefone";
import Atualiza from "../metodos/atualiza"
import Listagem from "../metodos/listagem";
import ListagemClientes from "./listagemClientes"

export default class AtualizaCliente extends Atualiza{
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();

    }

    public atualiza(): void {
        console.log("Atualizar cadastro de cliente: ");

        const listaClientes = new ListagemClientes(this.clientes);
        listaClientes.listar();

        let cpf = this.entrada.receberTexto("Por favor, digite o número do CPF que se deseja atualizar: ");

        this.clientes.forEach(clientes => {
            if(cpf === clientes.getCpf.getValor) {
                let verificacao = true
                while(verificacao) {
                    console.log("\n-----------------------------------------------\n");
                    console.log("\n Escolha um dado para ser atualizado: \n");
                    console.log("\n 1 - Nome \n");
                    console.log("\n 2 - Nome Social \n");
                    console.log("\n 3 - CPF \n");
                    console.log("\n 4 - RG \n");
                    console.log("\n 5 - Telefone \n");
                    console.log("\n 6 - Gênero \n")
                    console.log("\n 0 - Sair");
                    console.log("\n-----------------------------------------------\n");
                    
                    let opcao = this.entrada.receberNumero("Por favor, digite o número da opção de dado que deseja atualizar: ")

                    switch(opcao) {
                        case 1:
                            let nome = this.entrada.receberTexto("Por favor, digite o nome do cliente: ")
                            clientes.nome = nome;
                            console.log("\nNome atualizado com sucesso! ")
                            console.log(`--------------------------------------`);
                            console.log(`\n`);  
                            break;
                        
                        case 2:
                            let nomeSocial = this.entrada.receberTexto("Por favor, digite o nome social do cliente: ")
                            clientes.nomeSocial = nomeSocial;
                            console.log("\nNome social atualizado com sucesso! ")
                            console.log(`--------------------------------------`);
                            console.log(`\n`);  
                            break;
                        case 3:
                            let cpf = this.entrada.receberTexto("Por favor, digite o CPF do cliente: ")
                            let data = this.entrada.receberTexto("Por favor, digite a data de emissão do CPF: ")

                            let partesData = data.split('/')
                            let ano = new Number(partesData[2].valueOf()).valueOf()
                            let mes = new Number(partesData[1].valueOf()).valueOf()
                            if( mes == 1 ){
                                mes = 0
                            }else{
                                mes = mes-1
                            }
                            let dia = new Number(partesData[0].valueOf()).valueOf()
                            let dataEmissaoCPF = new Date(ano, mes, dia)
                            let novoCpf = new CPF(cpf, dataEmissaoCPF)
                            clientes.setCpf = novoCpf;
                            console.log("\n CPF atualizado com sucesso! ")
                            console.log(`--------------------------------------`);
                            console.log(`\n`);  
                            break;
                        case 4:
                            let rgs = clientes.getRgs;
            
                            for (let i = 0; i < rgs.length; i++) {
                                console.log(i+1+` - RG: ` + rgs[i].getValor)
                                let dataRg = rgs[i].getDataEmissao;
                                console.log(i+1+` - Data Emissão RG: ` +dataRg.toLocaleDateString())
                            }

                            let opcaoRg = this.entrada.receberNumero("Por favor, digite a opção de RG que deseja alterar: ")

                            if (opcaoRg > rgs.length){
                                console.log("Opção inválida!")
                                break

                            }
                       
                            let rg = this.entrada.receberTexto("Por favor, digite o RG do cliente: ");
                            let dataRg = this.entrada.receberTexto("Por favor, digite a data de emissão do RG: ");

                             //formata data
                            let partesDataRg = dataRg.split('/')
                            let anorg = new Number(partesDataRg[2].valueOf()).valueOf()
                            let mesrg = new Number(partesDataRg[1].valueOf()).valueOf()
                            if( mesrg == 1 ){
                                mesrg = 0
                            }else{
                                mesrg = mesrg-1
                            }
                            let diarg = new Number(partesDataRg[0].valueOf()).valueOf()

                            //
                            let dataEmissaoRg = new Date(anorg, mesrg, diarg)

                            clientes.getRgs[opcaoRg - 1].setvalor(rg);
                            clientes.getRgs[opcaoRg - 1].setDataEmissao(dataEmissaoRg);

                            console.log("\nRG atualizado com sucesso! ")
                            console.log(`--------------------------------------`);
                            console.log(`\n`);  
                            break;
                        case 5:
                            let telefones = clientes.getTelefones;
                            for (let i = 0; i < telefones.length; i++) {
                                console.log(i+1 + ' - Telefone: (' + telefones[i].getDdd + ')'+telefones[i].getNumero);
                                
                            }
                            let opcaoTelefone = this.entrada.receberNumero("Por favor, digite a opção de telefone que deseja alterar: ")

                            if (opcaoTelefone > telefones.length){
                                console.log("Opção inválida!")
                                break
                            }
                            let DDD = this.entrada.receberTexto("Por favor, digite o DDD do cliente: ");
                            let numero = this.entrada.receberTexto("Por favor, digite o telefone do cliente: ");

                            clientes.getTelefones[opcaoTelefone - 1].setDdd(DDD);
                            clientes.getTelefones[opcaoTelefone - 1].setNumero(numero);

                            console.log("\nTelefone atualizado com sucesso! ")
                            console.log(`--------------------------------------`);
                            console.log(`\n`);  

                            break;
                        case 6:
                            let genero = this.entrada.receberTexto("Por favor, digite o gênero do cliente: ")
                            clientes.genero = genero;
                            console.log("\n Gênero atualizado com sucesso! ")
                            console.log(`--------------------------------------`);
                            console.log(`\n`);  
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
        })
        

      



    }


}