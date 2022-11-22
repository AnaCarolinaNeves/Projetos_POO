import Entrada from "../../io/entrada"
import Empresa from "../../modelo/empresa"
import GeneroCliente from "../../negocio/listagensDemandas/generoCliente"
import GeneroConsumo from "../../negocio/listagensDemandas/generoConsumo"
import MaiorConsumo from "../../negocio/listagensDemandas/maiorConsumo"
import MenorConsumo from "../../negocio/listagensDemandas/menorConsumo"
import ProdutosServicosMaisConsumidos from "../../negocio/listagensDemandas/produtosServicosMaisConsumidos"
import ValorConsumo from "../../negocio/listagensDemandas/valorConsumo"
import Listagem from "../../negocio/metodos/listagem"

export default class MenuListagens extends Listagem{
    private empresa:Empresa

    constructor( empresa:Empresa ){
        super()
        this.empresa = empresa
    }

    menuListagens(empresa:Empresa){
        let execucao = true

        console.log(`Bem-vindo ao Menu de Listagem`)

        while(execucao){

            console.log("Listagens: \n");
            if(empresa.getClientes.length)
              console.log("1 - 10 clientes que mais consumiram produtos ou serviços, em quantidade\n");   
              console.log("2 - Listagem clientes por gênero.\n");
            if(empresa.getServicos.length || empresa.getProdutos.length)
              console.log("3 - Listagem serviços ou produtos mais consumidos\n");
            if(empresa.getServicos.length || empresa.getProdutos.length)
              console.log("4 - Listagem serviços ou produtos mais consumidos por gênero\n");
            if(empresa.getServicos.length || empresa.getProdutos.length)
            console.log("5 - Listagem 10 clientes que menos consumiram produtos ou serviços\n");
            console.log("6 - Listagem dos 5 clientes que mais consumiram em valor, não em quantidade\n");
            console.log("0 - Voltar Para o Menu Principal\n");

            let entrada = new Entrada()
            let opcao = entrada.receberNumero("Escolha uma opção: ")

            switch (opcao) {
              case 1:
                let maior_Consumo = new MaiorConsumo(empresa)
                maior_Consumo.listar()
                break;

              case 2:
                let genero_cliente = new GeneroCliente(empresa.getClientes)
                genero_cliente.listar()
                break;

              case 3:
                let produtosServicosMaisConsumidos = new ProdutosServicosMaisConsumidos(empresa.getClientes)
                produtosServicosMaisConsumidos.listar()
                break;
                

              case 4:
                let generoConsumo = new GeneroConsumo(empresa.getClientes,empresa.getProdutos, empresa.getServicos)
                
                generoConsumo.listar()
                break;      

              case 5:
                let menorConsumo = new MenorConsumo(empresa)
                menorConsumo.listar()
                break; 

              case 6:
                let valorConsumo = new ValorConsumo(empresa.getClientes)
                  valorConsumo.listar()
                  break;
                  

              case 0:
                  return
                  
              default:
                  break;

            }
        }
    }

    public listar(): void {
        this.menuListagens(this.empresa)
    }
}