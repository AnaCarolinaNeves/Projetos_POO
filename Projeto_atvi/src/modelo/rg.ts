export default class RG {
    private valor: string
    private dataEmissao: Date
    constructor(numero: string, dataEmissaoRg: Date) {
        this.valor = numero
        this.dataEmissao = dataEmissaoRg
    }
    public get getValor(): string {
        return this.valor
    }
    public get getDataEmissao(): Date {
        return this.dataEmissao
    }

    public setvalor(numero: string) {
        this.valor = numero;
    }

    public setDataEmissao(dataEmissao: Date) {
        this.dataEmissao = dataEmissao;
    }
    
}