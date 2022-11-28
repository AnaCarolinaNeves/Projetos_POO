import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

type props = {
    tema: string
}

export default class RegistrarCompra extends Component<any, props>{
    componentDidMount(): void {
        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
    }
    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <>
                <div className="row">
                    <form className="col s12">
                        <div className="col s6">
                            <h6>Selecione o cliente</h6>
                            <select>
                                <option value="" disabled selected>Clientes</option>
                                <option value="1">Jeniffer</option>
                                <option value="2">Ana</option>
                            </select>
                        </div>
                        <div className="col s6">
                            <h6>Selecione o produto</h6>
                            <select multiple>
                                <option value="">Shampoo</option>
                                <option value="">Condicionador</option>
                            </select>
                        </div>
                        <div className="col s6">
                            <h6>Selecione o serviço</h6>
                            <select multiple>
                                <option value="">Corte de cabelo</option>
                                <option value="">Manicure</option>
                            </select>
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