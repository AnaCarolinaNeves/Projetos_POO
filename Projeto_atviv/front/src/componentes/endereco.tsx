export default class Endereco {
    estado!: string
    cidade!: string
    bairro!: string
    rua!: string
    numero!: string
    codigoPostal!: string
    informacoesAdicionais!: string
    id!: number

    constructor(estado: string, cidade: string, bairro: string, rua: string, numero: string, codigoPostal: string, informacoesAdicionais: string){
        this.estado = estado
        this.cidade = cidade
        this.bairro = bairro
        this.rua = rua
        this.numero = numero
        this.codigoPostal = codigoPostal
        this.informacoesAdicionais = informacoesAdicionais
    }
}