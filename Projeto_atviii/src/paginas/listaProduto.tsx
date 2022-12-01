import 'materialize-css/dist/css/materialize.min.css'

const ListaProduto = ()  => {
        return (
            <>
                <table className="highlight responsive-table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Preço</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <details className="collapse">
                                    <summary>Shampoo</summary>
                                    <div className="row">
                                        <form className="col">
                                            <div className="input-field col s6">
                                                <input id="nome_cliente" type="text" className="validate" />
                                                <label htmlFor="nome_cliente">Nome</label>
                                            </div>
                                            <div className="input-field col s6">
                                                <input id="preco" type="text" className="validate" />
                                                <label htmlFor="preco">Preço</label>
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
                                        </form>
                                    </div>
                                </details>
                            </td>
                            <td>R$15</td>
                        </tr>

                        <tr>
                            <td><details className="collapse centered">
                                <summary>Condicionador</summary>
                                <div className="row">
                                    <form className="col">
                                        <div className="input-field col s6">
                                            <input id="nome_cliente" type="text" className="validate" />
                                            <label htmlFor="nome_cliente">Nome</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <input id="preco" type="text" className="validate" />
                                            <label htmlFor="preco">Preço</label>
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
                                    </form>
                                </div>
                            </details></td>
                            <td>R$15</td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }

export default ListaProduto