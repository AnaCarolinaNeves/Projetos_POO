export default class Produto {
    private id!: string;
    public nome!: string;
    private preco!: number;

    constructor(id:string, nome: string, preco: number) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
    }

    public get getId(): string {
        return this.id;

    }

    public get getPreco(): number {
        return this.preco;

    }

    public setPreco(preco: number){
        this.preco = preco

    }
}