import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import '../estilo/estilo.css'

export default class Listagem extends Component<any>{
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.tabs');
            M.Tabs.init(elems);
        });
    }
    render() {
        return (
            <>
                <div className="row">
                    <div className="col s12">
                        <ul className="tabs">
                            <li className="tab col s3"><a className='active' href='#clientesMaisConsumiram'>Clientes que mais consumiram</a></li>
                            <li className="tab col s3"><a href="#generoClientes">Gênero clientes</a></li>
                            <li className="tab col s3"><a href="#produtosServicosMaisConsumidos">Produtos e serviços mais consumidos</a></li>
                            <li className="tab col s3"><a href="#clientesMenosConsumiram">Clientes que menos consumiram</a></li>
                        </ul>
                    </div>
    
                    {/* Clientes que mais consumiram */}
                    <div id="clientesMaisConsumiram" >
                        <div className="row">
                            <div className="col s12" >
                                <table className="centered responsive-table ">
                                    <thead>
                                        <tr>
                                            <th>N°</th>
                                            <th>Nome</th>
                                            <th>Qtd produtos consumidos</th>
                                            <th>Qtd serviços utilizados</th>
                                        </tr>
                                    </thead>
    
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Jeniffer</td>
                                            <td>16</td>
                                            <td>12</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Ana</td>
                                            <td>12</td>
                                            <td>10</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Apolo</td>
                                            <td>8</td>
                                            <td>8</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="row">
                            <div className="col s12" >
                                <table className="centered responsive-table ">
                                    <thead>
                                        <tr>
                                            <th>N°</th>
                                            <th>Nome</th>
                                            <th>Valor total de produtos consumidos</th>
                                            <th>Valor total de serviços utilizados</th>
                                        </tr>
                                    </thead>
    
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Jeniffer</td>
                                            <td>R$160</td>
                                            <td>R$120</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Ana</td>
                                            <td>R$120</td>
                                            <td>R$100</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Apolo</td>
                                            <td>R$80</td>
                                            <td>R$80</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* Gênero clientes */}
                    <div id="generoClientes" className="col s12">
                        <div className="row">
                            <div className="col s12" >
                                <table className="centered responsive-table ">
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>Gênero</th>
                                        </tr>
                                    </thead>
    
                                    <tbody>
                                        <tr>
                                            <td>Jeniffer</td>
                                            <td>F</td>
                                        </tr>
                                        <tr>
                                            <td>Ana</td>
                                            <td>F</td>
                                        </tr>
                                        <tr>
                                            <td>Apolo</td>
                                            <td>M</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <hr></hr>
                        <h6 style={{ display: 'flex', justifyContent: 'center' }}>Produtos e serviços mais consumidos por gênero</h6>
                        <div className="row">
                            <div className="col s6" >
                                <table className="centered responsive-table ">
                                    <thead>
                                        <tr>
                                            <th>Produto</th>
                                            <th>Gênero</th>
                                        </tr>
                                    </thead>
    
                                    <tbody>
                                        <tr>
                                            <td>Shampoo</td>
                                            <td>F</td>
                                        </tr>
                                        <tr>
                                            <td>Shampoo</td>
                                            <td>M</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
    
                            <div className="col s6" >
                                <table className="centered responsive-table ">
                                    <thead>
                                        <tr>
                                            <th>Serviço</th>
                                            <th>Gênero</th>
                                        </tr>
                                    </thead>
    
                                    <tbody>
                                        <tr>
                                            <td>Pedicure</td>
                                            <td>F</td>
                                        </tr>
                                        <tr>
                                            <td>Corte de cabelo</td>
                                            <td>M</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
    
                    {/* Serviços e produtos mais consumidos */}
                    <div id="produtosServicosMaisConsumidos" className="col s12">
                        <div className="row" >
                            <div className="col s12">
                                <table className="centered responsive-table ">
                                    <thead>
                                        <tr>
                                            <th>Produto</th>
                                            <th>Qtd de pedidos</th>
                                        </tr>
                                    </thead>
    
                                    <tbody>
                                        <tr>
                                            <td>Shampoo</td>
                                            <td>30</td>
                                        </tr>
                                        <tr>
                                            <td>Pente</td>
                                            <td>25</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            </div>
                            <hr></hr>
                            <div className="row">
                            <div className="col s12">
                                <table className="centered responsive-table ">
                                    <thead>
                                        <tr>
                                            <th>Serviço</th>
                                            <th>Qtd de pedidos</th>
                                        </tr>
                                    </thead>
    
                                    <tbody>
                                        <tr>
                                            <td>Pedicure</td>
                                            <td>7</td>
                                        </tr>
                                        <tr>
                                            <td>Corte de cabelo</td>
                                            <td>6</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
    
                    {/* Clientes que menos consumiram */}
                    <div id="clientesMenosConsumiram" className="col s12">
                    <div className="row">
                                <div className="col s12">
                                    <table className="centered responsive-table ">
                                        <thead>
                                            <tr>
                                                <th>N°</th>
                                                <th>Nome</th>
                                                <th>Qtd produtos consumidos</th>
                                                <th>Qtd serviços utilizados</th>
                                            </tr>
                                        </thead>
    
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Apolo</td>
                                                <td>5</td>
                                                <td>4</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Jeniffer</td>
                                                <td>7</td>
                                                <td>6</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Ana</td>
                                                <td>8</td>
                                                <td>9</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                    </div>
                </div>
            </>
        )
    }
}