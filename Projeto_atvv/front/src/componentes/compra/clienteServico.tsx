import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import CSS from 'csstype'

type props = {
    tema: string
}
const backgroundColor: CSS.Properties = {
    backgroundColor: '#0077ff',
}
const botaoStyle: CSS.Properties = {
    padding: '10px'
}
const fontStyle: CSS.Properties = {
    fontSize:'xx-large',
    fontFamily: 'fantasy',
}

export default class ClienteServico extends Component<any, props> {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('select');
            M.FormSelect.init(elems);
        });
    }
    render() {
        return (
        <div>
            <>
                <nav className="">
                <div  style={backgroundColor}  className="nav-wrapper">
                    <a className="brand-logo center" style={fontStyle}>WB</a>
                    <a style={botaoStyle} href="/Home">Home</a>
                    <a style={botaoStyle} href="/clientes">Cliente</a>
                    <a style={botaoStyle} href="/produtos">Produto</a>
                    <a style={botaoStyle} href="/pedidos">Pedidos</a>
                    <a style={botaoStyle} href="/servicos">Serviços</a>
                    <a style={botaoStyle} href="/Listagens">Listagens</a>
                </div>
                </nav>
            </>
            <br/>
            <div className='container'>
            <h4 className="center-align">Cadastrar Pedidos</h4>
                <form className="col s12 formCli">
                    <div className="row">
                         <div className="input-field col s12 opcoes">     
                            <select>
                                <option value="0">Selecione o Cliente</option>
                            </select>
                        </div> 
                    
                         <div className="input-field col s12 opcoes">     
                            <select>
                                <option value="1">Selecione o Serviço</option>
                            </select>
                        </div> 

                        <div className="input-field col s12 opcoes">     
                            <select>
                                <option value="2">Selecione o Produto</option>
                            </select>
                        </div>
                    </div>
                        <div className="row">
                        <div className="col s12">
                            <button className="btn waves-effect waves-light" style={backgroundColor} type="submit" name="action">Cadastrar Pedido
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form> 
            </div> 
        </div>
        
        )
    }
}