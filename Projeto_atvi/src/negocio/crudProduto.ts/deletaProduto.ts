import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Deleta from "../metodos/deleta";
import ListagemProdutos from "./listagemProdutos";

export default class DeletaProduto extends Deleta{
    private produtos: Array <Produto>

    constructor (produtos: Array <Produto>){
        super();
        this.produtos = produtos;
    }

    listarProdutos(){
        let listaProdutos = new ListagemProdutos(this.produtos);
        listaProdutos.listar();
        let entrada = new Entrada();
        let id = entrada.receberTexto("Informe o código de identificaçõ do produto: ");
        let indice = this.produtos.findIndex(i => i.getId === id);
        this.produtos.splice(indice,1);
        return
    }

    public deletar(): void {
        this.listarProdutos();
        console.log("Produto removido com sucesso!");
        console.log(`--------------------------------------`);
        console.log(`\n`);       
    }
}