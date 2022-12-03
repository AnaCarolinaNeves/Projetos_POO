import axios from "axios";
import { Component } from "react";
import Swal from "sweetalert2";
import Cliente from "./cliente";

type state = {
    nome: string,
    nomeSocial: string,
    cpf: string,
    genero: string,
    rg: string,
    telefone: string,
    dados: any[],
    cliente: Cliente

}

export default class EdicaoCliente extends Component<any, state> {

    constructor(props: any){
        super(props)
        this.state = {
            nome: '',
            nomeSocial: '',
            cpf: '',
            genero: '',
            rg: '',
            telefone: '',
            dados: [],
            cliente: new Cliente('','','','', '', '', '')
        }
        this.capturarNome = this.capturarNome.bind(this);
        this.capturarNomeSocial = this.capturarNomeSocial.bind(this);
        this.capturarCpf = this.capturarCpf.bind(this);
        this.capturarGenero = this.capturarGenero.bind(this);
        this.capturarRg = this.capturarRg.bind(this);
        this.capturarTelefone = this.capturarTelefone.bind(this);
    }

    componentDidMount(): void {
        axios.get('http://localhost:2001/Clientes/' + this.props.taskId).then(response => {
            let dadosBanco = response.data
            this.setState({
                dados: dadosBanco,
                cliente: new Cliente(dadosBanco.nome, dadosBanco.nomeSocial, dadosBanco.cpf, dadosBanco.genero, dadosBanco.rg,
                    dadosBanco.ddd, dadosBanco.numero)
            })
        })
    }

    capturarNome(evento: any){
        let nome
        const target = evento.target;
        this.state.cliente.setNome = target.value
        if (!this.state.cliente.getNome) {
            nome = 'nome'
        } else { 
            nome = ''
        }
        this.setState({ nome : nome })
    }

    capturarNomeSocial(evento: any){
        let nomeSocial
        const target = evento.target;
        this.state.cliente.setNomeSocial = target.value
        if (!this.state.cliente.getNomeSocial) {
            nomeSocial = 'nomeSocial'
        } else { 
            nomeSocial = ''
        }
        this.setState({ nomeSocial : nomeSocial })
    }

    capturarCpf(evento: any){
        let cpf
        const target = evento.target;
        this.state.cliente.setCpf = target.value
        if (!this.state.cliente.getCpf) {
            cpf = 'cpf'
        } else { 
            cpf = ''
        }
        this.setState({ cpf : cpf })
    }

    capturarGenero(evento: any){
        let genero
        const target = evento.target;
        this.state.cliente.setGenero = target.value
        if (!this.state.cliente.getGenero) {
            genero = 'genero'
        } else { 
            genero = ''
        }
        this.setState({ genero : genero })
    }
    capturarRg(evento: any){
        let rg
        const target = evento.target;
        this.state.cliente.setRg = target.value
        if (!this.state.cliente.getRg) {
            rg = 'rg'
        } else { 
            rg = ''
        }
        this.setState({ rg : rg })
    }
    capturarTelefone(evento: any){
        let telefone
        const target = evento.target;
        this.state.cliente.setDdd = target.value
        this.state.cliente.setNumero = target.value
        if (!this.state.cliente.getDdd || !this.state.cliente.getNumero){
            telefone = 'telefone'
        } else {
            telefone = ''
        }
        this.setState({ telefone : telefone})
    }

    salvarFormulario = async (evento: any) => {
        evento.preventDefault();
        axios.put('http://localhost:2001/AtualizaCliente/' + this.props.taskId, {
            nome: this.state.cliente.getNome,
            nomeSocial: this.state.cliente.getNomeSocial,
            cpf: this.state.cliente.getCpf,
            genero: this.state.cliente.getGenero,
            rg: this.state.cliente.getRg,
            ddd: this.state.cliente.getDdd,
            numero: this.state.cliente.getNumero
        })

        Swal.fire(
            'Cliente atualizado com sucesso',
            '',
            'success'
        )
        setTimeout(function() {
            window.location.href = "/listaCliente"
          }, 1000);
    }

    render() {
        return (
            <>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s4">
                                <span>Nome</span>
                                <input id="nome_cliente" type="text" onChange={this.capturarNome} value={this.state.cliente.getNome} />
                                {/* <label htmlFor="nome_cliente">Nome</label> */}
                            </div>
                            <div className="input-field col s4">
                                <span>Nome social</span>
                                <input id="nome_social" type="text" onChange={this.capturarNomeSocial} value={this.state.cliente.getNomeSocial}/>
                            </div>
                            <div className="input-field col s4">
                                <span>Genêro</span>
                                <input id="genero" type="text" onChange={this.capturarGenero} value={this.state.cliente.getGenero} />
                            </div>
                        </div>
                        <div className="row"> 
                            <div className="input-field col s4">
                                <span>CPF</span>
                                <input id="cpf" type="text" onChange={this.capturarCpf} value={this.state.cliente.getCpf} />
                            </div>
                            <div className="input-field col s4">
                                <span>Rg</span>
                                <input id="rg" type="text" onChange={this.capturarRg} value={this.state.cliente.getRg} />
                            </div>
                            <div className="input-field col s4">
                                <span>Telefone</span>
                                <input id="telefone" type="text" onChange={this.capturarTelefone} value={this.state.cliente.getNumero} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <button className="btn waves-effect #f06292 pink lighten-2" onClick={this.salvarFormulario}>Atualizar
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