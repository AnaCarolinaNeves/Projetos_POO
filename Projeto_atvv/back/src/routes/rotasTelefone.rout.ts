import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from 'http-status-codes';

const rotasTelefone = Router();
const telefone = require('../models/telefoneTable')



rotasTelefone.get('/telefone', async(req: Request, res: Response, next: NextFunction)=>{
    const listaTelefone = await telefone.findAll();
    res.status(StatusCodes.OK).send(listaTelefone)
})

rotasTelefone.get('/telefone/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const corpo = await telefone.findOne({ where: { id: uuid } })
    
    if (corpo === null) {
        return res.status(StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "O telefone não foi cadastrado!"
        })
    } else {
        return res.json(corpo)
    }
})

rotasTelefone.post('/telefone/cadastrar', async (req: Request, res: Response, next: NextFunction)=>{
    const novoTelefone = req.body
    await telefone.create(novoTelefone)
    .then((test) =>{
        console.log(test)
        console.log(test.id)
        return res.json({
            id: test.id,
            erro: false,
            mensagem: "O telefone foi cadastrado com sucesso!"
        })
    }).catch(() =>{
        return res.status(StatusCodes.NOT_FOUND).json({
            id: -1,
            erro: true,
            mensagem: "O telefone não foi cadastrado!"
        })
    })
})

rotasTelefone.put('/telefone/atualizar/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const atualizaTelefone = req.body;
    atualizaTelefone.uuid = uuid
    await telefone.update(atualizaTelefone, {
        where: {
            id: uuid
          }
    })
     .then(() =>{
         return res.json({
             erro: false,
             mensagem: "O telefone foi atualizado com sucesso!"
         })
     }).catch(() =>{
         return res.status(StatusCodes.NOT_FOUND).json({
             erro: true,
             mensagem: "O telefone não foi atualizado!"
        })
     })
})


rotasTelefone.delete('/telefone/deletar/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    await telefone.destroy({
        where: {
            id: uuid
          }
    })
    .then(() =>{
        return res.json({
            erro: false,
            mensagem: "O telefone foi removido com sucesso!"
        })
    }).catch(() =>{
        return res.status(StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "O telefone não foi removido!"
        })
    })
})


export default rotasTelefone;