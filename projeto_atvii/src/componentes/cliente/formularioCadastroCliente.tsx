import { Component } from "react";

export default class FormularioCadastroCliente extends Component<any> {

    render() {
        return (
            <>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s4">
                                <input id="nome_cliente" type="text" className="validate" />
                                <label htmlFor="nome_cliente">Nome</label>
                            </div>
                            <div className="input-field col s4">
                                <input id="nome_social" type="text" className="validate" />
                                <label htmlFor="nome_social">Nome social</label>
                            </div>
                            <div className="input-field col s4">
                                <input id="genero" type="text" className="validate" />
                                <label htmlFor="genero">Gênero</label>
                            </div>
                        </div>
                        <div className="row"> 
                            <div className="input-field col s4">
                                <input id="cpf" type="text" className="validate" />
                                <label htmlFor="cpf">CPF</label>
                            </div>
                            <div className="input-field col s4">
                                <input id="rg" type="text" className="validate" />
                                <label htmlFor="rg">RG</label>
                            </div>
                            <div className="input-field col s4">
                                <input id="telefone" type="text" className="validate" />
                                <label htmlFor="telefone">Telefone</label>
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