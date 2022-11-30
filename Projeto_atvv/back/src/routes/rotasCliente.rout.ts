import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";


const rotasCliente = Router()
const tabelaCli = require("../models/clienteTable")
rotasCliente.get("/Clientes", async(req:Request, res: Response, next: NextFunction) =>{
    const clientesLista = await tabelaCli.findAll()
    res.status(StatusCodes.OK).send(clientesLista)

})
rotasCliente.post("/CadastroCliente", async (req:Request, res: Response, next: NextFunction) =>{
    const cadastroCliente = req.body;

    await tabelaCli.create(cadastroCliente).then((Sucesso) => {
        return res.json({
            erro: false,
            mensagem: "Cadastro realizado com sucesso!"
        })
    }) .catch((Errado)=> {
        return res.json({
            erro: true,
            mensagem: "Atenção, o cadastro não foi realizado!"
        })

    })
})
rotasCliente.put("/AtualizaCliente/:uuid", async (req:Request, res: Response, next: NextFunction) =>{
    const uuid = req.params.uuid;
    const corpo = req.body;

    corpo.uuid = uuid;
    await tabelaCli.update(corpo, {
        //comando para o sql
        where: {
            id: uuid
        }

    }).then((Sucesso) =>{
        return res.json ({
        erro: false,
            mensagem: "Atualização realizada com sucesso!"
        }) 
    }).catch((Errado)=> {
        return res.json({
            erro: true,
            mensagem: "Atenção, a atualização não foi realizada!"
        })
    })

})
rotasCliente.delete("/DeletaCliente/:uuid1", async (req:Request, res: Response, next: NextFunction) =>{
    const uuid1 = req.params.uuid1;
    const corpo1 = req.body;

    corpo1.uuid1 = uuid1;
    await tabelaCli.destroy( {
        where: {
            id: uuid1
        }

    }).then((Sucesso) =>{
        return res.json ({
        erro: false,
            mensagem: "Remoção realizada com sucesso!"
        }) 
    }).catch((Errado)=> {
        return res.json({
            erro: true,
            mensagem: "Atenção, a remoção não foi realizada!"
        })
    })

})


export default rotasCliente