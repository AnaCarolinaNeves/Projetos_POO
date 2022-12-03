import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

const rotasServico = Router()
const tabelaSer = require("../models/servicoTable")

rotasServico.get("/Servicos", async(req:Request, res: Response, next: NextFunction) =>{
    const servicosLista = await tabelaSer.findAll()
    res.status(StatusCodes.OK).send(servicosLista)
})

rotasServico.get('/Servicos/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const project = await tabelaSer.findOne({ where: { id: uuid } })
    
    if (project === null) {
        return res.status(StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "Serviço não cadastrado!"
        })
    } else {
        return res.json(project)
    }
})

rotasServico.post("/cadastroServico", async (req:Request, res: Response, next: NextFunction) =>{
    const cadastroServico = req.body;

    await tabelaSer.create(cadastroServico).then((Sucesso) => {
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
rotasServico.put("/AtualizaServico/:uuid", async (req:Request, res: Response, next: NextFunction) =>{
    const uuid = req.params.uuid;
    const corpo = req.body;

    corpo.uuid = uuid;
    await tabelaSer.update(corpo, {
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
rotasServico.delete("/DeletaServico/:uuid", async (req:Request, res: Response, next: NextFunction) =>{
    const uuid = req.params.uuid;
    const corpo = req.body;

    corpo.uuid = uuid;
    await tabelaSer.destroy( {
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


export default rotasServico