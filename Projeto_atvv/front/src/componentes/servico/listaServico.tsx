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
    preco: string,
    result: any[]
}

export default class ListaServico extends Component<{}, table> {

    constructor(props: any){
        super(props)
        this.state = {
            id: '',
            nome: '',
            preco: '',
            result: []
        }
        this.clickExcluir = this.clickExcluir.bind(this)
        this.clickEditar = this.clickEditar.bind(this)
    }

    componentDidMount(): void {
        axios.get('http://localhost:2001/Servicos').then(response => {
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

    clickEditar(evento: any){
        let id = evento.target.id
        console.log(id)
    }

    clickExcluir(evento: any){
        let id = evento.target.id
        Swal.fire({
            title: 'Deseja excluir o serviço?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, excluir'
        }).then(async (result) => {
            if (result.isConfirmed) {
                let deleted = await this.deletaServico(id)
                console.log(deleted)
                if (deleted) {
                    Swal.fire(
                        'Serviço excluído com sucesso',
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

    public async deletaServico(id: any): Promise<boolean> {
        let retorno = false
        await axios.delete('http://localhost:2001/DeletaServico/' + id).then(resposnse => {
            retorno = !resposnse.data.erro
        })
        return retorno
    }

    render() {
        return (
            <>
            <h5>Lista de serviços</h5>
                <ul className="collapsible">
                    {this.state.result.map(dado => {
                        return(
                            <li>
                                <div className="collapsible-header"><i className="material-icons">arrow_drop_down</i>{dado.nome}</div>
                                <div className="collapsible-body row">
                                    <div className="col s6">
                                        <h6 id='nome_servico'>{dado.nome}</h6>
                                        <label htmlFor="nome_servico">Nome</label>
                                    </div>
                                    <div className="col s6">
                                        <h6 id='preco_servico'>R${dado.preco}</h6>
                                        <label htmlFor="preco_servico">Preço</label>
                                    </div>
                                </div>
                                <div className="collapsible-body row">
                                    <div className="col">
                                    <Link to={"/edicaoServico/" + dado.id}>
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