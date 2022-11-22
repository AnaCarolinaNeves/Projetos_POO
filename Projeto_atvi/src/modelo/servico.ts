import internal from "stream"

export default class Servico {
    private identificacao!: string;
    public nome!: string;
    private custo!: number;

    constructor(identificacao: string, nome: string, custo: number) {
    this.identificacao = identificacao;
    this.nome = nome;
    this.custo = custo;
    }

    public get getIdentificacao(): string {
        return this.identificacao;

    }

    public get getCusto(): number {
        return this.custo;

    }

    public setCusto(custo: number){
        this.custo = custo

    }
    

}