import CPF from "./cpf"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    public genero: string
    private cpf: CPF
    private rgs: RG[] = []
    private dataCadastro: Date
    private telefones: Telefone[] = []
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>

    constructor(nome: string, nomeSocial: string, genero: string, cpf: CPF, rgs: RG [],  telefones: Telefone[]) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.genero = genero
        this.cpf = cpf
        this.rgs = rgs;
        this.dataCadastro = new Date()
        this.telefones = telefones;
        this.produtosConsumidos = []
        this.servicosConsumidos = []
    }

    public get getCpf(): CPF {
        return this.cpf
    }
    public set setCpf(cpf: CPF) {
        this.cpf = cpf
    }
    public get getRgs(): RG[] {
        return this.rgs
    }

    public set setRgs(rg: RG[]) {
        this.rgs = rg
        
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public set setTelefone(telefone: Telefone){
        this.telefones = this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }

    public addServicos(servico?: Servico): void {
        if (!servico) {
            console.log("Serviço Não Encotrado!");

        }
        else {
            this.servicosConsumidos.push(servico)
            

        }

    }
    public addProduto(produto?: Produto): void {
        if (!produto) {
            console.log("Produto Não Encontrado!");

        }
        else {
            this.produtosConsumidos.push(produto)
            

        }
    }
    public addRg(rg:RG){
        this.rgs.push(rg);
    }
    public addTel(telefone:Telefone){
        this.telefones.push(telefone);
    }

}