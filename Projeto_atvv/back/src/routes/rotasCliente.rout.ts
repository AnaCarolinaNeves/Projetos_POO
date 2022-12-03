import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

const rotasCliente = Router()
const tabelaCli = require("../models/clienteTable")

rotasCliente.get("/Clientes", async(req:Request, res: Response, next: NextFunction) =>{
    const clientesLista = await tabelaCli.findAll()
    res.status(StatusCodes.OK).send(clientesLista)
})

rotasCliente.get('/Clientes/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const project = await tabelaCli.findOne({ where: { id: uuid } })
    
    if (project === null) {
        return res.status(StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "Usuario não cadastrado!"
        })
    } else {
        return res.json(project)
    }
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
rotasCliente.delete("/DeletaCliente/:uuid", async (req:Request, res: Response, next: NextFunction) =>{
    const uuid = req.params.uuid;
    const corpo = req.body;

    corpo.uuid = uuid;
    await tabelaCli.destroy( {
        where: {
            id: uuid
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