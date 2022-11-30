import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import '../estilo/estilo.css'

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
                            <div className="card-action" style={{background:'white'}}>
                                <a className="black-text" href="/listaCliente">Listar clientes</a>
                                <br/>
                                <a className="black-text" href="/formularioCadastroCliente">Cadastrar cliente</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}