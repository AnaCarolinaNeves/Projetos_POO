import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import '../src/estilo/estilo.css'

export default class Home extends Component<any>{
    render() {
        return (
            <>
                <div className="container">
                    <div className="row ">
                        <div className="col ">
                            <div className="card #f06292 pink lighten-2">
                                <div className="card-content white-text">
                                    <span className="card-title">Cliente</span>
                                </div>
                                <div className="card-action" style={{ background: 'white' }}>
                                    <a className="black-text" href="/listaCliente">Listar clientes</a>
                                    <br />
                                    <a className="black-text" href="/formularioCadastroCliente">Cadastrar cliente</a>
                                </div>
                            </div>
                        </div>
                        <div className="col ">
                            <div className="card #f06292 pink lighten-2 ">
                                <div className="card-content white-text ">
                                    <span className="card-title">Produto</span>
                                </div>
                                <div className="card-action" style={{ background: 'white' }}>
                                    <a className="black-text" href="listaProduto">Listar produtos</a>
                                    <br />
                                    <a className="black-text" href="formularioCadastroProduto">Cadastrar produto</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card #f06292 pink lighten-2">
                                <div className="card-content white-text">
                                    <span className="card-title">Serviço</span>
                                </div>
                                <div className="card-action" style={{ background: 'white' }}>
                                    <a className="black-text" href="listaServico">Listar serviços</a>
                                    <br />
                                    <a className="black-text" href="formularioCadastroServico">Cadastrar serviço</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}