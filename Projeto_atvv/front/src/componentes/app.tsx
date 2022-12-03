import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter, useParams } from "react-router-dom";
import EdicaoCliente from "./cliente/edicaoCliente";
import FormularioCadastroCliente from "./cliente/formularioCadastroCliente";
import ListaCliente from "./cliente/listaCliente";
import ClienteServico from "./compra/clienteServico";
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

function GetIdUsuario(){
  const { id } = useParams()
  console.log(id)
  return (
    <div>
      <EdicaoCliente taskId={id}></EdicaoCliente>
    </div>
  )
}

function GetIdServico(){
  const { id } = useParams()
  console.log(id)
  return (
    <div>
      <EdicaoServico taskId={id}></EdicaoServico>
    </div>
  )
}

function GetIdProduto(){
  const { id } = useParams()
  console.log(id)
  return (
    <div>
      <EdicaoProduto taskId={id}></EdicaoProduto>
    </div>
  )
}

function App() {
  return (
    <>
      <NavBar /><BrowserRouter>
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
          <Route path="/edicaoCliente/:id" element={<GetIdUsuario />} />
          <Route path="/edicaoProduto/:id" element={<GetIdProduto />} />
          <Route path="/edicaoServico/:id" element={<GetIdServico />} />
          <Route path="/clienteServico" element={<ClienteServico />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;