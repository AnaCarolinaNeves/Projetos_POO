import { Component } from "react";

 type props = {
    tema: string 
}

export default class FormularioCadastroCliente extends Component<any, props> {

    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="nome_cliente" type="text" className="validate" />
                                <label htmlFor="nome_cliente">Nome</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="nome_social" type="text" className="validate" />
                                <label htmlFor="nome_social">Nome social</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="data_nascimento" type="text" className="validate" />
                                <label htmlFor="data_nascimento">Data de nascimento</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="cpf" type="text" className="validate" />
                                <label htmlFor="cpf">CPF</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <button className={estiloBotao} type="submit" name="action">Submit
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