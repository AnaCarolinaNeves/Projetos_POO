import Cliente from "../../modelo/cliente";
import Listagem from "../metodos/listagem";

export default class GeneroCliente extends Listagem{
    private clientes:Array<Cliente>
    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
    }

    public listar(): void {
        let m: Cliente[] = [];
        let f: Cliente[] = [];

        this.clientes.forEach( clientes => {
            if( clientes.genero === "M"){
                m.push(clientes);
            }if( clientes.genero === "F"){
                f.push(clientes);
            }
        })       

        console.log("Listagem de Clientes por Gênero");
        console.log("Masculino: \n");

        //Masculino
        console.log(`\n----------------------------------------\n`);
        m.forEach(m=>{
            console.log(`\nLista de todos os clientes:`);
            this.clientes.forEach(cliente => {
                console.log(`Nome: ` + cliente.nome);
                console.log(`Nome social: ` + cliente.nomeSocial);
                console.log(`Gênero: ` + cliente.genero);
                console.log(`CPF: ` + cliente.getCpf.getValor);
                let dataCpf = cliente.getCpf.getDataEmissao
                console.log(`Data de emissão CPF: ` + dataCpf.toLocaleDateString());            
    
                let rgs = cliente.getRgs;
                
                for (let i = 0; i < rgs.length; i++) {
                    console.log(`Rg: ` + rgs[i].getValor)
                    let dataRg = rgs[i].getDataEmissao;
                    console.log(`Data Emissão RG: ` +dataRg.toLocaleDateString())
                }
    
                let telefones = cliente.getTelefones;
                for (let i = 0; i < telefones.length; i++) {
                    console.log('Telefone: (' + telefones[i].getDdd + ')'+telefones[i].getNumero);
                }
    
                console.log(`--------------------------------------`);
            });
        })

        //Feminino
        console.log("Feminino:");
        console.log("\n");
        f.forEach(f=>{
            console.log(`\nLista de todos os clientes:`);
            this.clientes.forEach(cliente => {
                console.log(`Nome: ` + cliente.nome);
                console.log(`Nome social: ` + cliente.nomeSocial);
                console.log(`Gênero: ` + cliente.genero);
                console.log(`CPF: ` + cliente.getCpf.getValor);
                let dataCpf = cliente.getCpf.getDataEmissao
                console.log(`Data de emissão CPF: ` + dataCpf.toLocaleDateString());            

                let rgs = cliente.getRgs;
                
                for (let i = 0; i < rgs.length; i++) {
                    console.log(`Rg: ` + rgs[i].getValor)
                    let dataRg = rgs[i].getDataEmissao;
                    console.log(`Data Emissão RG: ` +dataRg.toLocaleDateString())
                }

                let telefones = cliente.getTelefones;
                for (let i = 0; i < telefones.length; i++) {
                    console.log('Telefone: (' + telefones[i].getDdd + ')'+telefones[i].getNumero);
                }

                console.log(`--------------------------------------`);
            });
        })
    }
}