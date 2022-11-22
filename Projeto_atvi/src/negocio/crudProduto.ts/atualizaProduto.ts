import Entrada from "../../io/entrada"
import Produto from "../../modelo/produto"
import Atualiza from "../metodos/atualiza"
import ListagemProdutos from "./listagemProdutos"

export default class AtualizaProduto extends Atualiza{
    private produtos: Array<Produto>
    private entrada: Entrada
  
    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
  
    public atualiza(): void {
      console.log("Atualização de Produtos");
  
      const listProd = new ListagemProdutos(this.produtos)
      listProd.listar()
  
      let id = this.entrada.receberTexto("Informe o código de identificação do produto que deseja atualizar: ")
      
      this.produtos.forEach(produto => {
          if(id === produto.getId){
  
            let validacao = true
  
            while (validacao) {
              console.log("Selecione uma opção para atualizar: ");
              console.log(`--------------------------------------`);                    
              console.log("Dados para atualização: ");
              console.log("[1] Nome do Produto");
              console.log("[2] Preço");
              console.log("[0] Sair");
              console.log(`--------------------------------------`);
      
              let entrada = new Entrada()
              let opcao = entrada.receberNumero("Escolha uma opção: ")
      
              switch (opcao) {
                  case 1:
                      let nome = this.entrada.receberTexto("Informe o novo nome do Produto: ");
                      produto.nome = nome;
                      console.log("Nome atualizado com Sucesso!\n");
                      console.log(`--------------------------------------`);
                      console.log(`\n`);  
                      break;
      
                  case 2:
                      let preco = this.entrada.receberNumero("Informe o novo preço do produto R$: ");
                      produto.setPreco(preco);
                      console.log("Preço atualizado com Sucesso!\n");
                      console.log(`--------------------------------------`);
                      console.log(`\n`);  
                      break;
      
                  case 0:
                      validacao = false
                      console.log(" Saindo.");
                      break;
      
                  default:
                      console.log("Para realizar a atualização informe uma opção válida!");
                      break;
                }
              }
          
        }
      })
    }
  }
  