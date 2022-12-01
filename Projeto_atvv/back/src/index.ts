import express from "express";
import rotas from "./routes/rotasCliente.rout";
import cors from "cors";
import rotasProduto from "./routes/rotasProduto.rout";
import rotasCliente from "./routes/rotasCliente.rout";
import rotasServico from "./routes/rotasServico.rout";
import rotasRg from "./routes/rotasRg.rout";
import rotasTelefone from "./routes/rotasTelefone.rout";
import rotaClienteProdutos from "./routes/rotasClienteProdutos.rout";
import rotasClienteTelefones from "./routes/rotasClienteTefones.rout";
import rotasClienteServicos from "./routes/rotasClienteServicos.rout";

const app = express()
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.use(rotasCliente);
app.use(rotasProduto);
app.use(rotasServico);
app.use(rotasRg);
app.use(rotasTelefone);
app.use(rotaClienteProdutos);
app.use(rotasClienteTelefones);
app.use(rotasClienteServicos);

// const connection = require("./models/connect")
app.listen(2001, ()=>{console.log("Inicializando na porta 2001!")})