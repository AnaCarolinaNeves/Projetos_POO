import Entrada from "../../io/entrada";
import Empresa from "../../modelo/empresa";
import atualizaProdutos from "../../negocio/crudProduto.ts/atualizaProduto";
import CadastroProduto from "../../negocio/crudProduto.ts/cadastroProduto";
import DeletaProduto from "../../negocio/crudProduto.ts/deletaProduto";
import ListagemProdutos from "../../negocio/crudProduto.ts/listagemProdutos";
import Listagem from "../../negocio/metodos/listagem";

export default class MenuProduto extends Listagem{
    private empresa: Empresa

    constructor(empresa:Empresa){
        super()
        this.empresa =empresa
    }

    menuProduto(empresa:Empresa){
        let chave:boolean = true;

        console.log("Menu do Produto");

        while(chave){
            console.log("Opções gerais para produtos:\n")
            console.log(`1 - Cadastrar produto`);
            if(empresa.getClientes.length){
                console.log(`2 - Atualizar cadastro de produto`);
                console.log(`3 - Deletar cadastro de produto`);
                console.log(`4 - Consultar produtos cadastrados`);
            }
            console.log(`0 - Voltar para o menu principal\n`);

            let entrada = new Entrada()
            let opcao = entrada.receberNumero("Escolha uma opção: ");

            switch(opcao){
                case 1:
                let cadastro = new CadastroProduto(empresa.getProdutos);
                cadastro.cadastrar();
                break;

                case 2:
                let atualiza = new atualizaProdutos(empresa.getProdutos);
                atualiza.atualiza();
                break;
                
                case 3:
                let deletar = new DeletaProduto(empresa.getProdutos);
                deletar.deletar();
                break;

                case 4:
                let listagem = new ListagemProdutos(empresa.getProdutos);
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
        this.menuProduto(this.empresa)
    }   

}