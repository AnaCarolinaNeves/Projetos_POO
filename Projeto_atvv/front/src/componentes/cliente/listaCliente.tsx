/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

type table = {
    id: string,
    nome: string,
    nomeSocial: string,
    cpf: string,
    genero: string,
    rg: string,
    numero: string,
    result: any[]
}

export default class ListaCliente extends Component<{}, table> {

    constructor(props: any) {
        super(props)
        this.state = {
            id: '',
            nome: '',
            nomeSocial: '',
            cpf: '',
            genero: '',
            rg: '',
            numero: '',
            result: []
        }
        this.clickExcluir = this.clickExcluir.bind(this)
        this.clickEditar = this.clickEditar.bind(this)
    }

    componentDidMount(): void {
        axios.get('http://localhost:2001/Clientes').then(response => {
            let dadosBanco = response.data
            this.setState({
                result: dadosBanco
            })
        })

        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.collapsible');
            M.Collapsible.init(elems);
        });
    }

    clickEditar(evento: any) {
        let id = evento.target.id
        console.log(id)
    }

    clickExcluir(evento: any) {
        let id = evento.target.id
        console.log(id)
        Swal.fire({
            title: 'Deseja excluir o cliente?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, excluir'
        }).then(async (result) => {
            if (result.isConfirmed) {
                let deleted = await this.deletaCliente(id)
                console.log(deleted)
                if (deleted) {
                    Swal.fire(
                        'Cliente excluído com sucesso',
                        '',
                        'success'
                    )
                }
                setTimeout(function () {
                    window.location.reload();
                }, 1000);
            }
        })
    }

    public async deletaCliente(id: any): Promise<boolean> {
        let retorno = false
        await axios.delete('http://localhost:2001/DeletaCliente/' + id).then(response => {
            retorno = !response.data.erro
        })
        return retorno
    }

    render() {
        return (
            <>
            <h5>Lista de clientes</h5>
                <ul className="collapsible">
                    {this.state.result.map(dado => {
                        return (
                            <li>
                                <div className="collapsible-header"><i className="material-icons">person</i>{dado.nome}</div>
                                <div className="collapsible-body row">
                                    <div className="col s4">
                                        <h6 id="nome_cliente">{dado.nome}</h6>
                                        <label htmlFor="nome_cliente">Nome</label>
                                    </div>
                                    <div className="col s4">
                                        <h6 id="social">{dado.nomeSocial}</h6>
                                        <label htmlFor="social">Nome social</label>
                                    </div>
                                    <div className="col s4">
                                        <h6 id="genero">{dado.genero}</h6>
                                        <label htmlFor="genero">Gênero</label>
                                    </div>
                                    <div className="col s4">
                                        <h6 id="cpf">{dado.cpf}</h6>
                                        <label htmlFor="cpf">CPF</label>
                                    </div>
                                    <div className="col s4">
                                        <h6 id="rg">{dado.rg}</h6>
                                        <label htmlFor="rg">RG</label>
                                    </div>
                                    <div className="col s4">
                                        <h6 id="telefone">{dado.numero}</h6>
                                        <label htmlFor="telefone">Telefone</label>
                                    </div>
                                </div>
                                <div className="collapsible-body row">
                                    <div className="col">
                                    <Link to={"/edicaoCliente/" + dado.id}>
                                        <button className="btn waves-effect #f06292 pink lighten-2">Atualizar
                                            <i className="small material-icons right">border_color</i>
                                        </button>
                                    </Link>
                                        
                                    </div>
                                    <div className="col">
                                        <a className="btn waves-effect #f06292 pink lighten-2" onClick={this.clickExcluir} id={dado.id} >Excluir
                                            <i className="small material-icons right">delete</i>
                                        </a>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </>
        )
    }
}