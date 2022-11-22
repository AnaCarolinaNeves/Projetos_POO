import Cliente from "../../modelo/cliente"
import Empresa from "../../modelo/empresa"
import Produto from "../../modelo/produto"
import Servico from "../../modelo/servico"
import Listagem from "../metodos/listagem"

export default class MenorConsumo extends Listagem{
    private clientes: Array <Cliente>
    private produtos: Array <Produto>
    private servicos: Array <Servico>
  
    constructor(empresa:Empresa){
      super()
      this.clientes = empresa.getClientes,
      this.produtos = empresa.getProdutos,
      this.servicos = empresa.getServicos
    }
  
    public listar(): void {
      let nome: string;
      let cpf: string;
      let consumo_Total: number;
      let ordenacao: any = [];
      let quantidade_consumo: any = [];
      var i = 1;
  
      this.clientes.forEach( cliente => {
        nome = cliente.nome;
        cpf = cliente.getCpf.getValor;
  
        consumo_Total = cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length;
  
        quantidade_consumo.push({
            nome: nome,
            cpf: cpf,
            quantidade: consumo_Total,
            posicao: i
        });
        i = i + 1 
      })
  
      ordenacao = quantidade_consumo.sort((x, y) => {
          return y.quantidade - x.quantidade;
      })
  
      ordenacao.reverse()
      ordenacao = ordenacao.slice(0,10)
  
      console.log("10 Clientes que menos consumiram produtos ou servicos em quantidade");
  
      ordenacao.forEach( cliente => {
        console.log("\n-------------------------------------------\n");
        console.log(`Nome: ${cliente.nome}`);
        console.log(`CPF: ${cliente.cpf}`);
        console.log(`Quantidade de produtos e servicos consumidos: ${cliente.quantidade}`);
        console.log("\n-------------------------------------------\n");
      });
    }
  }