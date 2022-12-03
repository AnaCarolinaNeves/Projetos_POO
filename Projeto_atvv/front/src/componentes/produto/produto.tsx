export default class Produto{
    private nome!: string
    private preco !: string
    
    constructor(nome: string, preco: string){
        this.nome = nome
        this.preco = preco
    }

    set setNome(nome: string){
        this.nome = nome
    }
    set setPreco(preco: string){
        this.preco = preco
    }

    get getNome(): string { return this.nome }
    get getPreco(): string { return this.preco }
}