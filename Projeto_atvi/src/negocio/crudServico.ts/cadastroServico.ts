import Entrada from "../../io/entrada";
import servico from "../../modelo/servico";
import Servico from "../../modelo/servico";
import Cadastro from "../metodos/cadastro";

export default class CadastroServico extends Cadastro{

    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servico: Array<Servico>) {
        super()
        this.servicos = servico
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro do serviço`);

        let id = this.entrada.receberTexto( `Por favor, insira o código de identificação do serviço: `);
        let nome = this.entrada.receberTexto(`Por favor, informe o nome do serviço: `)
        let preco = this.entrada.receberNumero(`Por favor, informe o preço do serviço R$: `)
        
        let servico = new Servico(id, nome, preco)
        this.servicos.push(servico)
        console.log(`\nCadastro concluído :)\n`);  
    }
}