/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'

export default class ListaProduto extends Component<any> {
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
                                    <summary>Shampoo</summary>
                                    <div className="row">
                                        <div className="col">
                                            <div className="col s4">
                                                <h6 id="nome_produto">Shampoo</h6>
                                                <label htmlFor="nome_produto">Nome</label>
                                            </div>
                                            <div className="col s4">
                                                <h6 id="codigo_produto">YJHDS</h6>
                                                <label htmlFor="codigo_produto">Código</label>
                                            </div>
                                            <div className="col s4">
                                                <h6 id="preco_produto">R$15</h6>
                                                <label htmlFor="preco_produto">Preço</label>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col">
                                                <a className="btn waves-effect #f06292 pink lighten-2" href='/edicaoProduto'>Atualizar
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
                            <td>YJHDS</td>
                            <td>R$15</td>
                        </tr>

                        <tr>
                            <td>
                                <details className="collapse">
                                    <summary>Pente</summary>
                                    <div className="row">
                                        <div className="col">
                                            <div className="col s4">
                                                <h6 id="nome_produto">Pente</h6>
                                                <label htmlFor="nome_produto">Nome</label>
                                            </div>
                                            <div className="col s4">
                                                <h6 id="codigo_produto">DFJGI</h6>
                                                <label htmlFor="codigo_produto">Código</label>
                                            </div>
                                            <div className="col s4">
                                                <h6 id="preco_produto">R$10</h6>
                                                <label htmlFor="preco_produto">Preço</label>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col">
                                                <a className="btn waves-effect #f06292 pink lighten-2" href='/edicaoCliente'>Atualizar
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
                            <td>DFJGI</td>
                            <td>R$10</td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
}