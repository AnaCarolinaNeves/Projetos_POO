import axios from "axios";
import { Component } from "react";
import Swal from "sweetalert2";
import Servico from "./servico";

type state = {
    nome: string,
    preco: string,
    dados: any[],
    servico: Servico
}

export default class EdicaoServico extends Component<any, state> {

    constructor(props: any) {
        super(props)
        this.state = {
            nome: '',
            preco: '',
            dados: [],
            servico: new Servico('', '')
        }
        this.capturarNome = this.capturarNome.bind(this)
        this.capturarPreco = this.capturarPreco.bind(this)
    }

    componentDidMount(): void {
        axios.get('http://localhost:2001/Servicos/' + this.props.taskId).then(response => {
            let dadosBancos = response.data
            this.setState({
                dados: dadosBancos,
                servico: new Servico(dadosBancos.nome, dadosBancos.preco)
            })
        })
    }

    capturarNome(evento: any) {
        let nome
        const target = evento.target;
        this.state.servico.setNome = target.value
        if (!this.state.servico.getNome) {
            nome = 'nome'
        } else {
            nome = ''
        }
        this.setState({ nome: nome })
    }

    capturarPreco(evento: any) {
        let preco
        const target = evento.target;
        this.state.servico.setPreco = target.value
        if (!this.state.servico.getPreco) {
            preco = 'preco'
        } else {
            preco = ''
        }
        this.setState({ preco: preco })
    }

    salvarFormulario = async (evento: any) => {
        evento.preventDefault();
        axios.put('http://localhost:2001/AtualizaServico/' + this.props.taskId, {
            nome: this.state.servico.getNome,
            preco: this.state.servico.getPreco
        })

        Swal.fire(
            'Produto atualizado com sucesso',
            '',
            'success'
        )
        setTimeout(function () {
            window.location.href = '/listaServico'
        }, 1000)
    }

    render() {
        return (
            <>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s4">
                                <span>Nome</span>
                                <input id="nome_servico" type="text" onChange={this.capturarNome} value={this.state.servico.getNome} />
                            </div>
                            <div className="input-field col s4">
                                <span>Preço</span>
                                <input id="preco" type="text" onChange={this.capturarPreco} value={this.state.servico.getPreco} />
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