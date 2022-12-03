export default class Cliente{
    private nome!: string
    private nomeSocial!: string
    private cpf!: string
    private genero!: string
    private rg!: string
    private ddd!: string
    private numero!: string

    constructor(nome: string, nomeSocial: string, cpf: string, genero: string, rg: string, ddd: string, numero: string){
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.genero = genero
        this.rg = rg
        this.ddd = ddd
        this.numero = numero
    }

    set setNome(nome: string){
        this.nome = nome
    }
    set setNomeSocial(nomeSocial: string){
        this.nomeSocial = nomeSocial
    }
    set setCpf(cpf: string){
        this.cpf = cpf
    }
    set setGenero(genero: string){
        this.genero = genero 
    }
    set setRg(rg: string){
        this.rg = rg 
    }
    set setDdd(ddd: string){
        this.ddd = ddd
    }
    set setNumero(numero: string){
        this.numero = numero
    }

    get getNome(): string { return this.nome }
    get getNomeSocial(): string { return this.nomeSocial }
    get getCpf(): string { return this.cpf }
    get getGenero(): string { return this.genero }
    get getRg(): string { return this.rg }
    get getDdd(): string { return this.ddd }
    get getNumero(): string { return this.numero }
}