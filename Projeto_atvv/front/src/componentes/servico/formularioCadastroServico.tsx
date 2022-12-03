import axios from "axios";
import { Component } from "react";
import Swal from "sweetalert2";
import Servico from "./servico";

export default class FormularioCadastroServico extends Component<any> {
    private servico: Servico = new Servico('', '')

    constructor(props: any) {
        super(props)
        this.capturarNome = this.capturarNome.bind(this)
        this.capturarPreco = this.capturarPreco.bind(this)
    }

    capturarNome(evento: any) {
        const target = evento.target;
        this.servico.setNome = target.value
    }

    capturarPreco(evento: any) {
        const target = evento.target;
        this.servico.setPreco = target.value
    }

    submeterFormulario = async (evento: any) => {
        evento.preventDefault()
        let res = -1
        await axios.post("http://localhost:2001/cadastroServico", {
            nome: this.servico.getNome,
            preco: this.servico.getPreco
        }).then((response) => {
            res = response.data.id
        })
        Swal.fire(
            'Serviço cadastrado com sucesso',
            '',
            'success'
        )
        setTimeout(function () {
            window.location.reload();
        }, 1000)
    }

    render() {
        return (
            <>
                <div className="row">
                    <h5>Cadastro de serviço</h5>
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="nome_produto" type="text" className="validate" onChange={this.capturarNome} />
                                <label htmlFor="nome_produto">Nome</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="preco" type="text" className="validate" onChange={this.capturarPreco} />
                                <label htmlFor="preco">Preço</label>
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