import 'materialize-css/dist/css/materialize.min.css'

const FormularioCadastroServico = () => {

    return (
        <>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="nome_produto" type="text" className="validate" />
                            <label htmlFor="nome_produto">Nome</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="preco" type="text" className="validate" />
                            <label htmlFor="preco">Preço</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className="btn waves-effect #f06292 pink lighten-2" type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default FormularioCadastroServico