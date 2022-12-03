import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import axios from "axios";
import Select from 'react-select'
import Swal from "sweetalert2";

type state = {
    id: string
    lista: any[]
    listaProduto: any[]
    listaServico: any[]
    nome: string
    cpf: string
    preco: number
    produto: any[]
    servico: any[]
    resultCliente: any[] //get cliente
    resultProduto: any[] //get produto
    resultServico: any[] //get servico
}

export default class RegistrarCompra extends Component<any, state>{
private clienteSelected!: number
private produtoSelected!: number
private servicoSelected!: number
    constructor(props: any) {
        super(props)
        this.state = {
            id: '',
            cpf: '',
            preco: 0,
            lista: [],
            listaProduto: [],
            listaServico: [],
            nome: '',
            produto: [],
            servico: [],
            resultCliente: [],
            resultProduto: [],
            resultServico: []
        }
        this.clienteChange = this.clienteChange.bind(this);
        this.produtoChange = this.produtoChange.bind(this);
        this.servicoChange = this.servicoChange.bind(this);
    }

    componentDidMount(): void {
        axios.get('http://localhost:2001/Clientes').then(response => {
            let dadosBanco = response.data
            this.setState({
                resultCliente: dadosBanco
            })
            this.state.resultCliente.forEach(cliente=> {
                this.state.lista.push({
                    value: cliente.id, 
                    label: cliente.nome
                })
            })
        })
        axios.get('http://localhost:2001/Produtos').then(response => {
            let dadosBanco = response.data
            this.setState({
                resultProduto: dadosBanco
            })
            this.state.resultProduto.forEach(produto=> {
                this.state.listaProduto.push({
                    value: produto.id,
                    label: produto.nome
                })
            })
        })
        axios.get('http://localhost:2001/Servicos').then(response => {
            let dadosBanco = response.data
            this.setState({
                resultServico: dadosBanco
            })
            this.state.resultServico.forEach(servico=> {
                this.state.listaServico.push({
                    value: servico.id,
                    label: servico.nome
                })
            })
        })

        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
    }

    // getCliente(): Cliente {
    //     let resultClientes = this.state.resultCliente.find(item => item.id)
    //     let cliente = new Cliente(resultClientes.nome, resultClientes.nomeSocial, resultClientes.cpf, resultClientes.genero)
    //     return cliente
    // }
    clienteChange(event: any) {
        const target = event.value;
        if (target == -1) return
        this.clienteSelected = target;
        console.log(this.clienteSelected);
    }

    produtoChange(event: any){
        const target = event.value;
        if(target == -1) return
        this.produtoSelected = target;
        console.log(this.produtoSelected);
     }

     servicoChange(event: any){
        const target = event.value;
        if(target == -1) return
        this.servicoSelected = target;
        console.log(this.servicoSelected)
     }

    submeterFormulario = async (evento: any) => {
        evento.preventDefault();
        let res = -1
        if(this.produtoSelected) {
        await axios.post("http://localhost:2001/clienteProdutos/cadastrar", {
                clienteId: this.clienteSelected,
                produtoId: this.produtoSelected
            }).then((response) => {
                console.log('foi');
                
            }).catch((res) => {
                console.log("teste");
            })
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Cadastrado Com Sucesso',
                showConfirmButton: false,
                timer: 1500
            })
            // setTimeout(function () {
            //      window.location.href = "/Home"
            // }, 1500);
        } if(this.servicoSelected) {
            axios.post("http://localhost:2001/clienteServicos/cadastrar", {
                clienteId: this.clienteSelected,
                servicoId: this.servicoSelected
            }).then((response) => {
                console.log('foi');
                
            }).catch((res) => {
                console.log("teste");
            })
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Registrado Com Sucesso',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

    render() {
        return (
            <>
                <div className="row">
                    <h5>Registrar compra</h5>
                    <div className="col s6 input field opcaes">
                        <h6>Selecione o cliente</h6>
                            <Select onChange={this.clienteChange} options={this.state.lista}/>
                    </div>
                    <div className="col s6 input field opcaes">
                        <h6>Selecione o produto</h6>
                            <Select onChange={this.produtoChange} options={this.state.listaProduto}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6 input field opcaes" style={{position: 'absolute'}}>
                        <h6>Selecione o serviço</h6>
                            <Select onChange={this.servicoChange} options={this.state.listaServico}/>
                    </div>
                </div>    
                    <footer className="page-footer white">
                        <div className="container">
                            <button className="btn waves-effect #f06292 pink lighten-2" onClick={this.submeterFormulario}>Registrar
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </footer>
                
            </>
        )
    }
}