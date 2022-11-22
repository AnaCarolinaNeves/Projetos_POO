import Servico from "../../modelo/servico";
import Listagem from "../metodos/listagem";

export default class ListagemServicos extends Listagem{
    private servicos: Array<Servico>

    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos

    }
    public listar(): void {
        console.log(`\nListagem de servicos cadastrados: \n`);
        this.servicos.forEach( servico => {
            console.log(`Código de identificação do serviço: ` + servico.getIdentificacao);
            console.log(`Nome do serviço: ` + servico.nome);
            console.log(`Preço do serviço R$: ` + servico.getCusto);
            console.log(`--------------------------------------`);
        })
        console.log(`\n`);
    }
}