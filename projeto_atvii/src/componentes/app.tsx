import { Component } from "react";
import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import EdicaoCliente from "./cliente/edicaoCliente";
import FormularioCadastroCliente from "./cliente/formularioCadastroCliente";
import ListaCliente from "./cliente/listaCliente";
import Home from "./home";
import Listagem from "./listagem";
import NavBar from "./navBar";
import EdicaoProduto from "./produto/edicaoProduto";
import FormularioCadastroProduto from "./produto/formularioCadastroProduto";
import ListaProduto from "./produto/listaProduto";
import RegistrarCompra from "./registrarCompra";
import EdicaoServico from "./servico/edicaoServico";
import FormularioCadastroServico from "./servico/formularioCadastroServico";
import ListaServico from "./servico/listaServico";
class App extends Component {

    render() {
      return (
        <><NavBar /><BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/formularioCadastroCliente" element={<FormularioCadastroCliente />} />
                <Route path="/formularioCadastroProduto" element={<FormularioCadastroProduto />} />
                <Route path="/formularioCadastroServico" element={<FormularioCadastroServico />} />
                <Route path="/listaCliente" element={<ListaCliente />} />
                <Route path="/listagem" element={<Listagem />} />
                <Route path="/listaProduto" element={<ListaProduto />} />
                <Route path="/listaServico" element={<ListaServico />} />
                <Route path="/registrarCompra" element={<RegistrarCompra />} />
                <Route path="/edicaoCliente" element={<EdicaoCliente />} />
                <Route path="/edicaoProduto" element={<EdicaoProduto />} />
                <Route path="/edicaoServico" element={<EdicaoServico />} />
            </Routes>
        </BrowserRouter></>
      );
    }
  }
  
  export default App;