import { Component } from "react";
import Cliente from "./cliente";
import axios from 'axios';
import Swal from 'sweetalert2';

export default class FormularioCadastroCliente extends Component<any> {
    private cliente: Cliente = new Cliente('', '', '', '', '', '', '')

    constructor(props: any){
        super(props)
        this.capturarNome = this.capturarNome.bind(this)
        this.capturarNomeSocial = this.capturarNomeSocial.bind(this)
        this.capturarCpf = this.capturarCpf.bind(this)
        this.capturarGenero = this.capturarGenero.bind(this)
        this.capturarRg = this.capturarRg.bind(this)
        this.capturarTelefone = this.capturarTelefone.bind(this)
        this.capturarDdd = this.capturarDdd.bind(this)
    }

    capturarNome(evento: any){
        const target = evento.target;
        this.cliente.setNome = target.value
    }

    capturarNomeSocial(evento: any){
        const target = evento.target;
        this.cliente.setNomeSocial = target.value
    }

    capturarCpf(evento: any){
        const target = evento.target;
        this.cliente.setCpf = target.value
    }

    capturarGenero(evento: any){
        const target = evento.target;
        this.cliente.setGenero = target.value
    }

    capturarRg(evento: any){
        const target = evento.target;
        this.cliente.setRg = target.value
    }

    capturarTelefone(evento: any){
        const target = evento.target;
        this.cliente.setNumero = target.value
        this.cliente.setDdd = target.value
    }

    capturarDdd(evento: any){
        const target = evento.target;
        this.cliente.setDdd = target.value
    }

    submeterFormulario = async (evento: any) => {
        evento.preventDefault();
        let res = -1
        await axios.post("http://localhost:2001/CadastroCliente", {
            nome: this.cliente.getNome,
            nomeSocial: this.cliente.getNomeSocial,
            cpf: this.cliente.getCpf,
            genero: this.cliente.getGenero,
            rg: this.cliente.getRg,
            ddd: this.cliente.getDdd,
            numero: this.cliente.getNumero
        }).then((response) => {
            res = response.data.id
        })
        Swal.fire(
            'Cliente cadastrado com sucesso',
            '',
            'success'
        )
        setTimeout(function() {
            window.location.reload();
          }, 1000);
    }

    render() {
        return (
            <>
                <div className="row">
                    <h5>Cadastro de cliente</h5>
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s4">
                                <input id="nome_cliente" type="text" className="validate" onChange={this.capturarNome} />
                                <label htmlFor="nome_cliente">Nome</label>
                            </div>
                            <div className="input-field col s4">
                                <input id="nome_social" type="text" className="validate" onChange={this.capturarNomeSocial}/>
                                <label htmlFor="nome_social">Nome social</label>
                            </div>
                            <div className="input-field col s4">
                                <input id="genero" type="text" className="validate" onChange={this.capturarGenero}/>
                                <label htmlFor="genero">Gênero</label>
                            </div>
                        </div>
                        <div className="row"> 
                            <div className="input-field col s4">
                                <input id="cpf" type="text" className="validate" onChange={this.capturarCpf} />
                                <label htmlFor="cpf">CPF</label>
                            </div>
                            <div className="input-field col s4">
                                <input id="rg" type="text" className="validate" onChange={this.capturarRg}/>
                                <label htmlFor="rg">RG</label>
                            </div>
                            <div className="input-field col s4">
                                <input id="telefone" type="text" className="validate" onChange={this.capturarTelefone}/>
                                <label htmlFor="telefone">Telefone (ddd + número)</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <button className="btn waves-effect #f06292 pink lighten-2" onClick={this.submeterFormulario}>Cadastrar
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}