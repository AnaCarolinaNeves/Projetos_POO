/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import Swal from "sweetalert2";
import CadastradorCliente from "../cadastradores/cadastradorCliente";
import Endereco from "./endereco";
import Telefone from "./telefone";

class FormularioCadastroCliente extends Component {
    private nome: string
    private sobreNome: string
    private email: string
    private endereco: Endereco
    private telefone: Telefone

    constructor(props) {
        super(props)
        this.telefone = new Telefone()
        this.endereco = new Endereco('', '', '', '', '', '', '')
        this.capturarNome = this.capturarNome.bind(this)
        this.capturarSobreNome = this.capturarSobreNome.bind(this)
        this.capturarEmail = this.capturarEmail.bind(this)
        this.capturarEnderecoEstado = this.capturarEnderecoEstado.bind(this)
        this.capturarEnderecoCidade = this.capturarEnderecoCidade.bind(this)
        this.capturarEnderecoBairro = this.capturarEnderecoBairro.bind(this)
        this.capturarEnderecoRua = this.capturarEnderecoRua.bind(this)
        this.capturarEnderecoNumeroCasa = this.capturarEnderecoNumeroCasa.bind(this)
        this.capturarEnderecoCodigoPostal = this.capturarEnderecoCodigoPostal.bind(this)
        this.capturarEnderecoInformacoesAdicionais = this.capturarEnderecoInformacoesAdicionais.bind(this)
        this.capturarDDD = this.capturarDDD.bind(this)
        this.capturarNumeroTel = this.capturarNumeroTel.bind(this)
        this.submeterFormulario = this.submeterFormulario.bind(this)
        this.cadastrarCliente = this.cadastrarCliente.bind(this)
    }

    public cadastrarCliente(objeto: Object) {
        let cadastrador = new CadastradorCliente()
        cadastrador.cadastrar(objeto)
    }

    public capturarNome(evento: any) {
        this.nome = evento.target.value
    }

    public capturarSobreNome(evento: any) {
        this.sobreNome = evento.target.value
    }

    public capturarEmail(evento: any) {
        this.email = evento.target.value
    }

    public capturarEnderecoEstado(evento: any) {
        this.endereco.estado = evento.target.value
    }

    public capturarEnderecoCidade(evento: any) {
        this.endereco.cidade = evento.target.value
    }

    public capturarEnderecoBairro(evento: any) {
        this.endereco.bairro = evento.target.value
    }

    public capturarEnderecoRua(evento: any) {
        this.endereco.rua = evento.target.value
    }

    public capturarEnderecoNumeroCasa(evento: any) {
        this.endereco.numero = evento.target.value
    }

    public capturarEnderecoCodigoPostal(evento: any) {
        this.endereco.codigoPostal = evento.target.value
    }

    public capturarEnderecoInformacoesAdicionais(evento: any) {
        this.endereco.informacoesAdicionais = evento.target.value
    }

    public capturarDDD(evento: any) {
        this.telefone.ddd = evento.target.value
    }

    public capturarNumeroTel(evento: any) {
        this.telefone.numero = evento.target.value
    }

    public submeterFormulario(evento: any) {
        evento.preventDefault()
        let cliente = {
            nome: this.nome,
            sobreNome: this.sobreNome,
            email: this.email,
            endereco: this.endereco,
            telefones: [this.telefone]
        }
        this.cadastrarCliente(cliente)
        evento.target.reset()
        Swal.fire(
            'Cliente cadastrado com sucesso',
            '',
            'success'
        )
    }
    render() {
        return (
            <>
                <div className="row">
                    <form className="col s12" onSubmit={(e) => this.submeterFormulario(e)}>
                        <div className="card-content">
                            <div className="row">
                                <div className="input-field col s4">
                                    <input onChange={this.capturarNome} id="nome" type="text" className="validate active" />
                                    <label htmlFor="nome">Nome</label>
                                </div>
                                <div className="input-field col s4">
                                    <input onChange={this.capturarSobreNome} id="sobrenome" type="text" className="validate" />
                                    <label htmlFor="sobrenome">Sobrenome</label>
                                </div>
                                <div className='input-field col s4'>
                                    <input onChange={this.capturarEmail} id='email' type='text' className='validate' />
                                    <label htmlFor='email'>Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s4">
                                    <input onChange={this.capturarEnderecoEstado} id='estado' type='text' className='validate' />
                                    <label htmlFor='estado'>Estado</label>
                                </div>
                                <div className="input-field col s4">
                                    <input onChange={this.capturarEnderecoCidade} id='cidade' type='text' className='validate' />
                                    <label htmlFor='cidade'>Cidade</label>
                                </div>
                                <div className="input-field col s4">
                                    <input onChange={this.capturarEnderecoBairro} id='bairro' type='text' className='validate' />
                                    <label htmlFor='bairro'>Bairro</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className='input-field col s4'>
                                    <input onChange={this.capturarEnderecoRua} id='rua' type='text' className='validate' />
                                    <label htmlFor='rua'>Rua</label> 
                                </div>
                                <div className='input-field col s4'>
                                    <input onChange={this.capturarEnderecoNumeroCasa} type='text' id='numeroCasa' className='validate' />
                                    <label htmlFor='numeroRua'>N°</label>
                                </div>
                                <div className='input-field col s4'>
                                    <input onChange={this.capturarEnderecoCodigoPostal} type='text' id='codigoPostal' className='validate' />
                                    <label htmlFor='codigoPostal'>Código postal</label>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='input-field col s4'>
                                    <input onChange={this.capturarEnderecoInformacoesAdicionais} type='text' id='infoAdicionais' className='validate' />
                                    <label htmlFor='infoAdicionais'>Informações adicionais</label>
                                </div>
                                <div className='input-field col s4'>
                                    <input onChange={this.capturarDDD} type='text' id='ddd' className='validate' />
                                    <label htmlFor='ddd'>DDD</label>
                                </div>
                                <div className='input-field col s4'>
                                    <input onChange={this.capturarNumeroTel} type='text' id='numeroTel' className='validate' />
                                    <label htmlFor='numeroTel'>Número</label>    
                                </div>    
                            </div>                            
                        </div>
                        <div className="card-action">
                            <button className="btn waves-effect #f06292 pink lighten-2" type="submit" name="action">Cadastrar
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}
export default FormularioCadastroCliente