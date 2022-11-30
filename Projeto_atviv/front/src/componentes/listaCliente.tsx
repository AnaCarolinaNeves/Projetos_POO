/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import RemovedorClienteLocal from "../removedores/removedorClienteLocal";
import BuscadorClientes from "../buscadores/buscadorClientes";
import RemovedorCliente from "../removedores/removedorCliente";
import Endereco from "./endereco";
import Cliente from "./cliente";
import Telefone from "./telefone";
import Swal from "sweetalert2";

type state = {
    clientes: any[]
}

class ListaCliente extends Component<{}, state> {
    constructor(props) {
        super(props)
        this.state = { clientes: [] }
        this.excluirLocal = this.excluirLocal.bind(this)
    }

    public buscarClientes() {
        let buscadorClientes = new BuscadorClientes()
        const clientes = buscadorClientes.buscar()
        clientes.then(clientes => {
            this.setState({ clientes })
        })
    }

    public excluirRemoto(idCliente: string) {
        let removedor = new RemovedorCliente()
        removedor.remover({ id: idCliente })
    }

    public excluirLocal(id: string, e: any) {
        e.preventDefault()
        let removedorLocal = new RemovedorClienteLocal()
        let clientes = removedorLocal.remover(this.state.clientes, id)
        this.setState({
            clientes: clientes
        })
        this.excluirRemoto(id)
        Swal.fire(
            'Cliente excluído com sucesso',
            '',
            'success'
        )
    }

    componentDidMount() {
        this.buscarClientes()
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.collapsible');
            M.Collapsible.init(elems);
        });
    }

    render() {
        return (
            <>
                <ul className="collapsible">
                    {this.state.clientes.map(dado => {
                        let endereco = new Endereco(dado.endereco.estado, dado.endereco.cidade, dado.endereco.bairro, dado.endereco.rua, dado.endereco.numero, dado.endereco.codigoPostal,
                            dado.endereco.informacoesAdicionais)
                        endereco.id = dado.endereco.id
                        let cliente = new Cliente(dado.nome, dado.sobrenome, dado.email, endereco)
                        cliente.id = dado.id
                        return (
                            <li>
                                <div className="collapsible-header"><i className="material-icons">person</i>{dado.nome}</div>
                                <div className="collapsible-body">
                                    <div className="row">
                                        <div className="col">
                                            <h6 id="nome_cliente">{dado.nome}</h6>
                                            <label htmlFor="nome_cliente">Nome</label>
                                        </div>
                                        <div className="col">
                                            <h6 id="sobrenome_clienet">{dado.sobreNome}</h6>
                                            <label htmlFor="sobrenome_cliente">Sobrenome</label>
                                        </div>
                                        <div className="col">
                                            <h6 id="email_cliente">{dado.email}</h6>
                                            <label htmlFor="email_cliente">Email</label>
                                        </div>

                                        {dado.telefones.map(t => {
                                            let tel = new Telefone()
                                            tel.ddd = t.ddd
                                            tel.numero = t.numero
                                            cliente.telefones.push(tel)
                                            return (
                                                <>
                                                    <div className="col">
                                                        <h6 id="ddd_cliente">{t.ddd}</h6>
                                                        <label htmlFor="ddd_cliente">DDD</label>
                                                    </div><div className="col">
                                                        <h6 id="numeroTel_cliente">{t.numero}</h6>
                                                        <label htmlFor="numeroTel_cliente">Número</label>
                                                    </div>
                                                </>
                                            )
                                        })}
                                        <div className="col">
                                            <h6 id="estado_cliente">{dado.endereco.estado}</h6>
                                            <label color="red" htmlFor="estado_cliente">Estado</label>
                                        </div>
                                        <div className="col">
                                            <h6 id="cidade_cliente">{dado.endereco.cidade}</h6>
                                            <label htmlFor="cidade_cliente">Cidade</label>
                                        </div>
                                        <div className="col">
                                            <h6 id="bairro_cliente">{dado.endereco.bairro}</h6>
                                            <label htmlFor="bairro_cliente">Bairro</label>
                                        </div>
                                        <div className="col">
                                            <h6 id="rua_cliente">{dado.endereco.rua}</h6>
                                            <label htmlFor="rua_cliente">Rua</label>
                                        </div>
                                        <div className="col">
                                            <h6 id="numeroCasa_cliente">{dado.endereco.numero}</h6>
                                            <label htmlFor="numeroCasa_cliente">N°</label>
                                        </div>
                                        <div className="col">
                                            <h6 id="codigoPostal_cliente">{dado.endereco.codigoPostal}</h6>
                                            <label htmlFor="codigoPostal_cliente">Código postal</label>
                                        </div>
                                        <div className="col">
                                            <h6 id="informacoesAdicionais_cliente">{dado.endereco.informacoesAdicionais}</h6>
                                            <label htmlFor="informacoesAdicionais_cliente">Informações adicionais</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="collapsible-body row">
                                    <div className="col">
                                        <a className="btn waves-effect #f06292 pink lighten-2" href="" target={"_self"}
                                            onClick={(e) => this.excluirLocal(cliente['id'], e)}>Excluir
                                            <i className="small material-icons right">delete</i>
                                        </a>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </>
        );
    }
}
export default ListaCliente