import { Component } from "react";

export default class FormularioCadastroServico extends Component<any> {

    render() {
        return (
            <>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                        <div className="input-field col s4">
                            <input id="codigo_servico" type="text" className="validate" />
                                <label htmlFor="codigo_servico">Código</label>
                            </div>
                            <div className="input-field col s4">
                                <input id="nome_servico" type="text" className="validate" />
                                <label htmlFor="nome_servico">Nome</label>
                            </div>
                            <div className="input-field col s4">
                                <input id="preco" type="text" className="validate" />
                                <label htmlFor="preco">Preço</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <button className="btn waves-effect #f06292 pink lighten-2" type="submit" name="action">Cadastrar
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