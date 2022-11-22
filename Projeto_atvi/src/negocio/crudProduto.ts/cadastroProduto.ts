import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Cadastro from "../metodos/cadastro";

export default class CadastroProduto extends Cadastro{
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produto: Array<Produto>) {
        super()
        this.produtos = produto
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro do produto`);

        let id = this.entrada.receberTexto( `Por favor, insira o código de identificação do produto: `);
        let nome = this.entrada.receberTexto(`Por favor, informe o nome do produto: `)
        let preco = this.entrada.receberNumero(`Por favor, informe o preço do produto R$: `)
        
        let produto = new Produto(id, nome, preco)
        this.produtos.push(produto)
        console.log(`\nCadastro concluído :)\n`);  
    }
}