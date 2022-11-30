import { Component } from "react";
import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import FormularioCadastroCliente from "./componentes/formularioCadastroCliente";
import Home from "./componentes/home";
import ListaCliente from "./componentes/listaCliente";

import NavBar from "./componentes/navBar";

class App extends Component{
    render() {
        return(
            <><NavBar /><BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/formularioCadastroCliente" element={<FormularioCadastroCliente />} />
                <Route path="/listaCliente" element={<ListaCliente />} />
            </Routes>
        </BrowserRouter></>
        )
    }
}

export default App
