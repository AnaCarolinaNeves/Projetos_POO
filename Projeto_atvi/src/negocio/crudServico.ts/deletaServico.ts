import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Deleta from "../metodos/deleta";
import ListagemServicos from "./listagemServico";

export default class DeletaServico extends Deleta{

    private servicos: Array <Servico>

    constructor (servicos: Array <Servico>){
        super();
        this.servicos = servicos;
    }

    listarServicos(){
        let listaServicos = new ListagemServicos(this.servicos);
        listaServicos.listar();
        let entrada = new Entrada();
        let identificação = entrada.receberTexto("Informe o código de identificação do serviço: ");
        let indice = this.servicos.findIndex(i=> i.getIdentificacao === identificação);
        this.servicos.splice(indice,1);
        return;
    }

    public deletar(): void{
        this.listarServicos()
        console.log("Serviço removido com sucesso!");    
        console.log(`--------------------------------------`);
        console.log(`\n`);       
    }
}