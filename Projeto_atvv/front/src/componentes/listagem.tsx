import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import '../estilo/estilo.css'
import axios from "axios";

type table = {
    id: string,
    name: string,
    nome: string,
    cpf: string,
    precoProduto: number,
    precoServico: number,
    preco: number,
    dadosClienteProduto: any[],
    dadosClienteServico: any[],
    consumoProduto: any[],
    consumoServico: any[],
    quantidadeProduto: any[],
    quantidadeServico: any[],
    produtoMaisConsumido: any[],
    servicoMaisCosumido: any[],
    resultProdutoMasculino: any[],
    resultProdutoFeminino: any[],
    resultServicoMasculino: any[],
    resultServicoFeminino: any[]
}


export default class Listagem extends Component<{}, table>{

    constructor(props: any){
        super(props)
        this.state = {
            id: '',
            name: '',
            nome: '',
            cpf: '',
            precoProduto: 0,
            precoServico: 0, 
            preco: 0,
            dadosClienteProduto: [],
            dadosClienteServico: [],
            consumoProduto: [],
            consumoServico: [], 
            quantidadeProduto: [], 
            quantidadeServico: [],
            produtoMaisConsumido: [], 
            servicoMaisCosumido: [], 
            resultProdutoMasculino: [],
            resultProdutoFeminino: [], 
            resultServicoMasculino: [],
            resultServicoFeminino: [] 
        }
    }

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.tabs');
            M.Tabs.init(elems);
        });
        // axios.get('http://localhost:2001/clienteProdutos/clienteConsumoValor').then(res => {
        //     let dados = res.data
        //     dados.sort(function(a:any,b:any){
        //         return b.valor - a.valor
        //     })
        //     this.setState({
        //         dadosClienteProduto: dados
        //     })   
        // }).catch(err => {
        //     console.log('fasf');
            
        // })
        // axios.get('http://localhost:2001/clienteServicos/clienteConsumoValor').then(res => {
        //     let dados = res.data
        //     dados.sort(function(a:any,b:any){
        //         return b.valor - a.valor
        //     })
        //     this.setState({
        //         dadosClienteServico: dados
        //     })   
        // }).catch(err => {
        //     console.log('fasf');
            
        // })
        // axios.get('http://localhost:2001/clienteProdutos/listagemClienteProdutoConsumidoQuantidade').then(res => {
        //     let dados = res.data
        //     dados.sort(function(a:any,b:any){
        //         return b.consumo - a.consumo
        //     })
        //     this.setState({
        //         consumoProduto: dados
        //     })   
        // }).catch(err => {
        //     console.log('fasf');
            
        // })
        // axios.get('http://localhost:2001/clienteProdutos/listagemClienteProdutoConsumidoQuantidade').then(res => {
        //     let dados = res.data
        //     dados.sort(function(a:any,b:any){
        //         return a.consumo - b.consumo
        //     })
        //     this.setState({
        //         quantidadeProduto: dados
        //     })   
        // }).catch(err => {
        //     console.log('fasf');
            
        // })
        // axios.get('http://localhost:2001/clienteServicos/listagemClienteServicoConsumidoQuantidade').then(res => {
        //     let dados = res.data
        //     dados.sort(function(a:any,b:any){
        //         return b.consumo - a.consumo
        //     })
        //     this.setState({
        //         consumoServico: dados
        //     })   
        // }).catch(err => {
        //     console.log('fasf');
            
        // })
        // axios.get('http://localhost:2001/clienteServicos/listagemClienteServicoConsumidoQuantidade').then(res => {
        //     let dados = res.data
        //     dados.sort(function(a:any,b:any){
        //         return a.consumo - b.consumo
        //     })
        //     this.setState({
        //         quantidadeServico: dados
        //     })   
        // }).catch(err => {
        //     console.log('fasf');
            
        // })
        // axios.get('http://localhost:2001/clienteProdutos/listagemProdutoMaisConsumido').then(res => {
        //     let dados = res.data
        //     dados.sort(function(a:any,b:any){
        //         return b.consumo - a.consumo
        //     })
        //     this.setState({
        //         produtoMaisConsumido: dados
        //     })   
        // }).catch(err => {
        //     console.log('fasf');
            
        // })
        // axios.get('http://localhost:2001/clienteServicos/listagemServicoMaisConsumido').then(res => {
        //     let dados = res.data
        //     dados.sort(function(a:any,b:any){
        //         return b.consumo - a.consumo
        //     })
        //     this.setState({
        //         servicoMaisCosumido: dados
        //     })   
        // }).catch(err => {
        //     console.log('fasf');
            
        // })
        // axios.get('http://localhost:2001/clienteProdutos/generoMasculino').then(res => {
        //     let dados = res.data
        //     dados.sort(function(a:any,b:any){
        //         return b.quantidade - a.quantidade
        //     })
        //     this.setState({
        //         resultProdutoMasculino: dados
        //     })   
        // }).catch(err => {
        //     console.log('fasf');
            
        // })
        // axios.get('http://localhost:2001/clienteProdutos/generoFeminino').then(res => {
        //     let dados = res.data
        //     dados.sort(function(a:any,b:any){
        //         return b.quantidade - a.quantidade
        //     })
        //     this.setState({
        //         resultProdutoFeminino: dados
        //     })   
        // }).catch(err => {
        //     console.log('fasf');
            
        // })
        // axios.get('http://localhost:2001/clienteServicos/generoMasculino').then(res => {
        //     let dados = res.data
        //     dados.sort(function(a:any,b:any){
        //         return b.quantidade - a.quantidade
        //     })
        //     this.setState({
        //         resultServicoMasculino: dados
        //     })   
        // }).catch(err => {
        //     console.log('fasf');
            
        // })
        // axios.get('http://localhost:2001/clienteServicos/generoFeminino').then(res => {
        //     let dados = res.data
        //     dados.sort(function(a:any,b:any){
        //         return b.quantidade - a.quantidade
        //     })
        //     this.setState({
        //         resultServicoFeminino: dados
        //     })   
        // }).catch(err => {
        //     console.log('fasf');
            
        // })
    }


    render() {
        return (
            <>
                
                <div className='container center'>
                <h4> <strong> Listagens de Consumo </strong> </h4>
                <br></br>
                <div className="row">
                    <div className="">
                        <ul className="tabs-swipe-demo tabs tabsConsumo ">
                            <li className="tab col s3"><a href="#1" style={{color: 'black', fontSize: '10px'}}>Cliente Consumo Valor</a></li>
                            <li className="tab col s2"><a href="#2" style={{color: 'black', fontSize: '10px'}}>Cliente Maior Qtd</a></li>
                            <li className="tab col s3"><a href="#3" style={{color: 'black', fontSize: '10px'}}>Cliente Menor Consumo</a></li>
                            <li className="tab col s2"><a href="#4" style={{color: 'black', fontSize: '10px'}}>Prod/Serv Consumo</a></li>
                            <li className="tab col s2"><a href="#5" style={{color: 'black', fontSize: '10px'}}>Consumo Genero</a></li>
                        </ul>
                    </div>
                    <div id="1" className="col s12">
                        <form>
                            <h5 className='generoConsumoFont'>Produto</h5>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>CPF</th>
                                            <th>Valor</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.dadosClienteProduto.map(itemP => {
                                            return(
                                                <tr>
                                                    <td>{itemP.nome}</td>
                                                    <td>{itemP.cpf}</td>
                                                    <td>R$ {itemP.valor}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <h5 className='generoConsumoFont'>Serviço</h5>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>CPF</th>
                                            <th>Valor</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.dadosClienteServico.map(itemP => {
                                                return(
                                                    <tr>
                                                        <td>{itemP.nome}</td>
                                                        <td>{itemP.cpf}</td>
                                                        <td>R$ {itemP.valor}</td>
                                                    </tr>
                                                )
                                            })}
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>


                    <div id="2" className="col s12">
                        <form>
                            <h5 className='generoConsumoFont'>Produto</h5>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>CPF</th>
                                            <th>Total Consumido</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.consumoProduto.map(item => {
                                            return(
                                                <tr>
                                                    <td>{item.nome}</td>
                                                    <td>{item.cpf}</td>
                                                    <td>{item.consumo}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <h5 className='generoConsumoFont'>Serviço</h5>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>CPF</th>
                                            <th>Total Consumido</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.consumoServico.map(item => {
                                            return(
                                                <tr>
                                                    <td>{item.nome}</td>
                                                    <td>{item.cpf}</td>
                                                    <td>{item.consumo}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </form>

                    </div>

                    <div id="3" className="col s12">
                    <form>
                        <h5 className='generoConsumoFont'>Produto</h5>
                        <div>
                            <table className='responsive-table centered'>
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>CPF</th>
                                        <th>Total Consumido</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.quantidadeProduto.map(item => {
                                        return(
                                            <tr>
                                                <td>{item.nome}</td>
                                                <td>{item.cpf}</td>
                                                <td>{item.consumo}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <h5 className='generoConsumoFont'>Serviço</h5>
                        <div>
                            <table className='responsive-table centered'>
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>CPF</th>
                                        <th>Total Consumido</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.quantidadeServico.map(item => {
                                        return(
                                            <tr>
                                                <td>{item.nome}</td>
                                                <td>{item.cpf}</td>
                                                <td>{item.consumo}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </form>


                    </div>

                    <div id="4" className="col s12">
                        <form>
                            <h5 className='generoConsumoFont'>Produto</h5>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>Total Consumido</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.produtoMaisConsumido.map(item => {
                                            return(
                                                <tr>
                                                    <td>{item.nome}</td>
                                                    <td>{item.consumo}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <h5 className='generoConsumoFont'>Serviço</h5>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>Total Consumido</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.servicoMaisCosumido.map(item => {
                                            return(
                                                <tr>
                                                    <td>{item.nome}</td>
                                                    <td>{item.consumo}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </form>

                    </div>

                    <div id="5" className="col s12">
                        <form>
                        <h5 className='generoConsumoFont'>Produtos com consumidos pelo publico Masculino </h5>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>Total Consumido</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.resultProdutoMasculino.map(item => {
                                            return(
                                                <tr>
                                                    <td>{item.nome}</td>
                                                    <td>{item.quantidade}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <h5 className='generoConsumoFont'>Serviços com consumidos pelo publico Masculino</h5>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>Total Consumido</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.resultServicoMasculino.map(item => {
                                            return(
                                                <tr>
                                                    <td>{item.nome}</td>
                                                    <td>{item.quantidade}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <h5 className='generoConsumoFont'>Produtos com consumidos pelo publico Feminino </h5>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>Total Consumido</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.resultProdutoFeminino.map(item => {
                                            return(
                                                <tr>
                                                    <td>{item.nome}</td>
                                                    <td>{item.quantidade}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <h5 className='generoConsumoFont'>Serviços com consumidos pelo publico Feminino</h5>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>Total Consumido</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.resultServicoFeminino.map(item => {
                                            return(
                                                <tr>
                                                    <td>{item.nome}</td>
                                                    <td>{item.quantidade}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </form>

                    </div>
                </div>
                </div>
            </>
        )
    }
}