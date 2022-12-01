import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from 'http-status-codes';

const rotasRg = Router();
const rg = require('../models/rgTable')



rotasRg.get('/rg', async(req: Request, res: Response, next: NextFunction)=>{
    const listaRg = await rg.findAll();
    res.status(StatusCodes.OK).send(listaRg)
})

rotasRg.get('/rg/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const corpo = await rg.findOne({ where: { id: uuid } })
    
    if (corpo === null) {
        return res.status(StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "O rg não foi cadastrado!"
        })
    } else {
        return res.json(corpo)
    }
})

rotasRg.post('/rg/cadastrar', async (req: Request, res: Response, next: NextFunction)=>{
    const novoRg = req.body
    await rg.create(novoRg)
    .then((test) =>{
        console.log(test)
        console.log(test.id)
        return res.json({
            id: test.id,
            erro: false,
            mensagem: "O rg foi cadastrado com sucesso!"
        })
    }).catch(() =>{
        return res.status(StatusCodes.NOT_FOUND).json({
            id: -1,
            erro: true,
            mensagem: "O rg não foi cadastrado!"
        })
    })
})

rotasRg.put('/rg/atualiza/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const atualizaRg = req.body;
    atualizaRg.uuid = uuid
    await rg.update(atualizaRg, {
        where: {
            id: uuid
          }
    })
     .then(() =>{
         return res.json({
             erro: false,
             mensagem: "O rg foi atualizado com sucesso!"
         })
     }).catch(() =>{
         return res.status(StatusCodes.NOT_FOUND).json({
             erro: true,
             mensagem: "O rg não foi atualizado!"
        })
     })
})


rotasRg.delete('/rg/deletar/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    await rg.destroy({
        where: {
            id: uuid
          }
    })
    .then(() =>{
        return res.json({
            erro: false,
            mensagem: "O rg foi removido com sucesso!"
        })
    }).catch(() =>{
        return res.status(StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "O rg não foi removido!"
        })
    })
})


export default rotasRg;