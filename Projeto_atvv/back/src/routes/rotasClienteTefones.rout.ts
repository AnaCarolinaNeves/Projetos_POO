import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from 'http-status-codes';

const rotasClienteTelefones = Router();
const clienteTelefones = require('../models/clienteTelefoneTable')



rotasClienteTelefones.get('/clienteTelefones', async(req: Request, res: Response, next: NextFunction)=>{
    const listaClienteTelefones = await clienteTelefones.findAll();
    res.status(StatusCodes.OK).send(listaClienteTelefones)
})

rotasClienteTelefones.get('/clienteTelefones/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const corpo = await clienteTelefones.findOne({ where: { id: uuid } })
    
    if (corpo === null) {
        return res.status(StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "A relação de cliente e telefone não foi cadastrada!"
        })
    } else {
        return res.json(corpo)
    }
})

rotasClienteTelefones.post('/clienteTelefones/cadastrar', async (req: Request, res: Response, next: NextFunction)=>{
    const novoClienteTelefones = req.body
    await clienteTelefones.create(novoClienteTelefones)
    .then((test) =>{
        console.log(test)
        console.log(test.id)
        return res.json({
            id: test.id,
            erro: false,
            mensagem: "A relação de cliente e telefone foi cadastrada com sucesso!"
        })
    }).catch(() =>{
        return res.status(StatusCodes.NOT_FOUND).json({
            id: -1,
            erro: true,
            mensagem: "A relação de cliente e telefone não foi cadastrada!"
        })
    })
})

rotasClienteTelefones.put('/clienteTelefones/atualizar/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const atualizaClienteTelefones = req.body;
    atualizaClienteTelefones.uuid = uuid
    await clienteTelefones.update(atualizaClienteTelefones, {
        where: {
            id: uuid
          }
    })
     .then(() =>{
         return res.json({
             erro: false,
             mensagem: "A relação de cliente e telefone foi atualizada com sucesso!"
         })
     }).catch(() =>{
         return res.status(StatusCodes.NOT_FOUND).json({
             erro: true,
             mensagem: "A relação de cliente e telefone não foi atualizada!"
        })
     })
})


rotasClienteTelefones.delete('/clienteTelefones/deletar/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    await clienteTelefones.destroy({
        where: {
            id: uuid
          }
    })
    .then(() =>{
        return res.json({
            erro: false,
            mensagem: "A relação de cliente e telefone foi removida com sucesso!"
        })
    }).catch(() =>{
        return res.status(StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "A relação de cliente e telefone não foi removida!"
        })
    })
})


export default rotasClienteTelefones;