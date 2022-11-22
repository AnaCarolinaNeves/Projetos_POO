import Produto from "../../modelo/produto";
import Listagem from "../metodos/listagem";

export default class ListagemProdutos extends Listagem{
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
    }
    public listar(): void {
        console.log(`\nLista de todos os produtos cadastrados:`);
        this.produtos.forEach(produto => {
            console.log(`Código de identificação do produto: ` + produto.getId);
            console.log(`Nome do produto: ` + produto.nome);
            console.log(`Preço do produto R$: ` + produto.getPreco);
            console.log(`--------------------------------------`);
        })
        console.log(`\n`);
    }
}