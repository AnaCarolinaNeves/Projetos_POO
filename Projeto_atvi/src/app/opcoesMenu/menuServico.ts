import Entrada from "../../io/entrada";
import Empresa from "../../modelo/empresa";
import AtualizaServico from "../../negocio/crudServico.ts/atualizaServico";
import CadastroServico from "../../negocio/crudServico.ts/cadastroServico";
import DeletaServico from "../../negocio/crudServico.ts/deletaServico";
import ListagemServicos from "../../negocio/crudServico.ts/listagemServico";
import Listagem from "../../negocio/metodos/listagem";

export default class MenuServico extends Listagem{
    private empresa: Empresa

    constructor(empresa:Empresa){
        super()
        this.empresa =empresa
    }

    menuCliente(empresa:Empresa){
        let chave:boolean = true;

        console.log("Menu do Cliente");

        while(chave){
            console.log("Opções gerais para clientes:\n")
            console.log(`1 - Cadastrar serviço`);
            if(empresa.getClientes.length){
                console.log(`2 - Atualizar cadastro de serviço`);
                console.log(`3 - Deletar cadastro de serviço`);
                console.log(`4 - Consultar serviços cadastrados`);
            }
            console.log(`0 - Voltar para o menu principal\n`);

            let entrada = new Entrada()
            let opcao = entrada.receberNumero("Escolha uma opção: ");

            switch(opcao){
                case 1:
                let cadastro = new CadastroServico(empresa.getServicos);
                cadastro.cadastrar();
                break;

                case 2:
                let atualiza = new AtualizaServico(empresa.getServicos);
                atualiza.atualiza();
                break;

                case 3:
                let deleta = new DeletaServico(empresa.getServicos);
                deleta.deletar();
                break;

                case 4:
                let listagem = new ListagemServicos(empresa.getServicos);
                listagem.listar();
                break;
                
                case 0:
                return;

                default:
                console.log("\nInsira uma opção válida ");
            }
        }
    }
    public listar(): void {
        this.menuCliente(this.empresa)
    }   

}