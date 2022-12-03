import axios from "axios";
import { Component } from "react";
import Swal from "sweetalert2";
import Produto from "./produto";

type state = {
    nome: string,
    preco: string,
    dados: any[],
    produto: Produto
}

export default class EdicaoProduto extends Component<any, state> {

    constructor(props: any) {
        super(props)
        this.state = {
            nome: '',
            preco: '',
            dados: [],
            produto: new Produto('', '')
        }
        this.capturarNome = this.capturarNome.bind(this)
        this.capturarPreco = this.capturarPreco.bind(this)
    }

    componentDidMount(): void {
        axios.get('http://localhost:2001/Produtos/' + this.props.taskId).then(response => {
            let dadosBancos = response.data
            this.setState({
                dados: dadosBancos,
                produto: new Produto(dadosBancos.nome, dadosBancos.preco)
            })
        })
    }

    capturarNome(evento: any) {
        let nome
        const target = evento.target;
        this.state.produto.setNome = target.value
        if (!this.state.produto.getNome) {
            nome = 'nome'
        } else {
            nome = ''
        }
        this.setState({ nome: nome })
    }

    capturarPreco(evento: any) {
        let preco
        const target = evento.target;
        this.state.produto.setPreco = target.value
        if (!this.state.produto.getPreco) {
            preco = 'preco'
        } else {
            preco = ''
        }
        this.setState({ preco: preco })
    }

    salvarFormulario = async (evento: any) => {
        evento.preventDefault();
        axios.put('http://localhost:2001/AtualizaProduto/' + this.props.taskId, {
            nome: this.state.produto.getNome,
            preco: this.state.produto.getPreco
        })

        Swal.fire(
            'Serviço atualizado com sucesso',
            '',
            'success'
        )
        setTimeout(function () {
            window.location.href = '/listaProduto'
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
                                <input id="nome_servico" type="text" onChange={this.capturarNome} value={this.state.produto.getNome} />
                            </div>
                            <div className="input-field col s4">
                                <span>Preço</span>
                                <input id="preco" type="text" onChange={this.capturarPreco} value={this.state.produto.getPreco} />
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