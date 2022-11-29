import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

function componentDidMount() {
    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems);
    });
}

const ListaServico = () => {
    componentDidMount()
    return (
        <>
            <ul className="collapsible">
                <li>
                    <div className="collapsible-header"><i className="material-icons">arrow_drop_down</i>Corte de cabelo</div>
                    <div className="collapsible-body row centered">
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
                    </div>
                    <div className="collapsible-body row">
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
                </li>
                <li>
                    <div className="collapsible-header"><i className="material-icons">arrow_drop_down</i>Pedicure</div>
                    <div className="collapsible-body row centered">
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
                    </div>
                    <div className="collapsible-body row">
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
                </li>
            </ul>
        </>
    )
}
export default ListaServico