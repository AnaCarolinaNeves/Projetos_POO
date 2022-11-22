import Entrada from "../../io/entrada"
import Servico from "../../modelo/servico"
import Atualiza from "../metodos/atualiza"
import ListagemServicos from "./listagemServico"

export default class AtualizaServico extends Atualiza{
  private servicos: Array<Servico>
  private entrada: Entrada

  constructor(servicos: Array<Servico>){
      super()
      this.servicos = servicos
      this.entrada = new Entrada()
  }

  public atualiza(): void {
    console.log("Atualização de Serviços!");

    const listSer = new ListagemServicos(this.servicos)
    listSer.listar()

    let identificacao = this.entrada.receberTexto("Informe o código de identificação do produto que deseja atualizar: ")
    
    this.servicos.forEach(servico => {
        if(identificacao === servico.getIdentificacao){

          let validacao = true

          while (validacao) {
            console.log("Selecione uma opção para atualizar: ");
            console.log(`--------------------------------------`);                    
            console.log(" Dados para atualização: ");
            console.log("[1] Nome do serviço");
            console.log("[2] Preço de serviço");
            console.log("[0] Sair");
            console.log(`--------------------------------------`);
    
            let entrada = new Entrada()
            let opcao = entrada.receberNumero("Escolha uma opção: ")
 
            switch (opcao) {
                case 1:
                    let nome = this.entrada.receberTexto("Por favor, informe o novo nome do serviço: ");
                    servico.nome = nome;
                    console.log("Nome atualizado com Sucesso!\n");
                    console.log(`--------------------------------------`);
                    console.log(`\n`);  
                    break;
    
                case 2:
                    let custo = this.entrada.receberNumero("Informe o novo preço do produto R$: ");
                    servico.setCusto(custo);
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
