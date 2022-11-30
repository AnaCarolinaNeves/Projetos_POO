import express from "express";
import rotas from "./routes/rotasCliente.rout";
import cors from "cors";

const app = express()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(rotas);
// const connection = require("./models/connect")
app.listen(2001, ()=>{console.log("Inicializando na porta 2001!")})