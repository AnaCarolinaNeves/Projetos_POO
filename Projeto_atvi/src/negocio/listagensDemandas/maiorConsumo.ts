import Cliente from "../../modelo/cliente"
import Empresa from "../../modelo/empresa"
import Produto from "../../modelo/produto"
import Servico from "../../modelo/servico"
import Listagem from "../metodos/listagem"

export default class MaiorConsumo extends Listagem{
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
             
      let nome, cpf, consumoTotal, ordenacao
      let quantidade_consumida: any  = [];
  
      this.clientes.forEach( cliente => {
        nome = cliente.nome;
        cpf = cliente.getCpf.getValor
  
        consumoTotal = cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length;
  
        quantidade_consumida.push({
          nome: nome,
          cpf: cpf,
          quantidade: consumoTotal,
  
        });
      })
  
      ordenacao = quantidade_consumida.sort((x, y) => {
        return y.quantidade - x.quantidade;
      })
  
      ordenacao = ordenacao.slice(0,10)
  
      console.log("Listagem dos 10 Clientes que mais consumiram produtos ou servicos em quantidade.");
      console.log(`\n---------------------------------------------\n`);
  
      ordenacao.forEach( cliente => {
        console.log(`Nome : ` + cliente.nome );
        console.log(`CPF: ` + cliente.cpf );
        console.log(`Quantidade de produtos e/ou serviços consumidos:` + cliente.quantidade );
        console.log(`\n---------------------------------------------\n`);
      })
  
    }
  }