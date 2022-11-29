import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import '../estilo/estilo.css'

export default class Home extends Component<any>{
    render() {
        return (
            <>
            <div className="container center-align">
                <div className="row valign-wrapper">
                    <div className="col">
                        <div className="card #f06292 pink lighten-2">
                            <div className="card-content white-text">
                                <span className="card-title">Cliente</span>
                            </div>
                            <div className="card-action">
                                <a className="white-text" href="/listaCliente">Listar clientes</a>
                                <a className="white-text" href="/formularioCadastroCliente">Cadastrar cliente</a>
                            </div>
                        </div>
                    </div>
                    <div className="col ">
                        <div className="card #f06292 pink lighten-2">
                            <div className="card-content white-text">
                                <span className="card-title">Produto</span>
                            </div>
                            <div className="card-action">
                                <a className="white-text" href="listaProduto">Listar produtos</a>
                                <a className="white-text" href="formularioCadastroProduto">Cadastrar produto</a>
                            </div>
                        </div>
                    </div>
                    <div className="col ">
                        <div className="card #f06292 pink lighten-2">
                            <div className="card-content white-text">
                                <span className="card-title">Serviço</span>
                            </div>
                            <div className="card-action">
                                <a className="white-text" href="listaServico">Listar serviços</a>
                                <a className="white-text" href="formularioCadastroServico">Cadastrar serviço</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}