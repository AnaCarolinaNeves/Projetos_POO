/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'

export default class ListaServico extends Component<any> {
    render() {
        return (
            <>
                <table className="highlight responsive-table centered">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Código</th>
                            <th>Preço</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <details className="collapse">
                                    <summary>Corte de cabelo</summary>
                                    <div className="row">
                                        <div className="col">
                                            <div className="col s4">
                                                <h6 id="nome_servico">Corte de cabelo</h6>
                                                <label htmlFor="nome_servico">Nome</label>
                                            </div>
                                            <div className="col s4">
                                                <h6 id="nome_servico">DSERG</h6>
                                                <label htmlFor="nome_servico">Código</label>
                                            </div>
                                            <div className="col s4">
                                                <h6 id="preco_servico">R$20</h6>
                                                <label htmlFor="preco_servico">Preço</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <a className="btn waves-effect #f06292 pink lighten-2" type="submit" href='/edicaoServico'>Atualizar
                                                    <i className="small material-icons right">border_color</i>
                                                </a>
                                            </div>
                                            <div className="col">
                                                <button className="btn waves-effect #f06292 pink lighten-2" type="submit" name="action">Excluir
                                                    <i className="small material-icons right">delete</i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </details>
                            </td>
                            <td>DSERG</td>
                            <td>R$20</td>
                        </tr>

                        <tr>
                            <td>
                                <details className="collapse">
                                    <summary>Pedicure</summary>
                                    <div className="row">
                                        <div className="col">
                                            <div className="col s4">
                                                <h6 id="nome_servico">Pedicure</h6>
                                                <label htmlFor="nome_servico">Nome</label>
                                            </div>
                                            <div className="col s4">
                                                <h6 id="nome_servico">TFRJE</h6>
                                                <label htmlFor="nome_servico">Código</label>
                                            </div>
                                            <div className="col s4">
                                                <h6 id="preco_servico">R$40</h6>
                                                <label htmlFor="preco_servico">Preço</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <button className="btn waves-effect #f06292 pink lighten-2" type="submit" name="action">Atualizar
                                                    <i className="small material-icons right">border_color</i>
                                                </button>
                                            </div>
                                            <div className="col">
                                                <button className="btn waves-effect #f06292 pink lighten-2" type="submit" name="action">Excluir
                                                    <i className="small material-icons right">delete</i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </details>
                            </td>
                            <td>TFRJE</td>
                            <td>R$40</td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
}