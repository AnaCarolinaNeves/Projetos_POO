import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "../paginas/formularioCadastroCliente";
import ListaCliente from "../paginas/listaCliente";
import ListaProduto from "../paginas/listaProduto";
import FormularioCadastroProduto from "../paginas/formularioCadastroProduto";
import FormularioCadastroServico from "../paginas/formularioCadastroServico";
import ListaServico from "../paginas/listaServico";
import Listagem from "../paginas/listagem";
import RegistrarCompra from "../paginas/registrarCompra";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao tema="#f06292 pink lighten-2" botoes={['Clientes', 'Cadastrar cliente', 'Produtos', 'Cadastrar produto', 'Serviços', 
        'Cadastrar serviço', 'Registrar compra', 'Listagem' ]} seletorView={this.selecionarView} />
        if (this.state.tela === "Clientes") {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="#f06292 pink lighten-2" />
                </>
            )
        } else if (this.state.tela === 'Cadastrar cliente') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="#f06292 pink lighten-2" />
                </>
            )
        }
        else if (this.state.tela === 'Produtos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaProduto tema="#f06292 pink lighten-2" />
                </>
            )
        }
        else if (this.state.tela === 'Cadastrar produto') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroProduto tema="#f06292 pink lighten-2" />
                </>
            )
        }
        else if (this.state.tela === 'Serviços') {
            return (
                <>
                    {barraNavegacao}
                    <ListaServico tema="#f06292 pink lighten-2" />
                </>
            )
        }
        else if (this.state.tela === 'Cadastrar serviço') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroServico tema="#f06292 pink lighten-2" />
                </>
            )
        }
        else if (this.state.tela === 'Listagem') {
            return (
                <>
                    {barraNavegacao}
                    <Listagem  tema="#f06292 pink lighten-2" />
                </>
            )
        }
        else if (this.state.tela === 'Registrar compra') {
            return (
                <>
                    {barraNavegacao}
                    <RegistrarCompra tema="#f06292 pink lighten-2" />
                </>
            )
        }

    }
}