import Deleta from "../metodos/deleta";
import Cliente from "../../modelo/cliente";
import ListagemClientes from "./listagemClientes";
import Entrada from "../../io/entrada";

export default class DeletarCliente extends Deleta {
 
    private clientes: Array <Cliente>

    constructor( clientes:Array <Cliente> ){
        super();
        this.clientes = clientes;
    }
    listaClientes(){
        let listaClientes = new ListagemClientes(this.clientes);
        listaClientes.listar();
        let entrada = new Entrada();
    
        let cpf = entrada.receberTexto("Informe o Cpf do cliente que deseja deletar: ");
            let indice = this.clientes.findIndex( i => i.getCpf.getValor === cpf);
            this.clientes.splice(indice, 1);
            return;
      }
    
      public deletar(): void {
        this.listaClientes();
        console.log("\nCliente removido com sucesso!");
        console.log(`--------------------------------------`);
        console.log(`\n`);
    }
    }





