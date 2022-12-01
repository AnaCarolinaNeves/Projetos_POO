import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";


const rotasProduto = Router()
const tabelaPro = require("../models/produtoTable")
rotasProduto.get("/Produtos", async(req:Request, res: Response, next: NextFunction) =>{
    const produtosLista = await tabelaPro.findAll()
    res.status(StatusCodes.OK).send(produtosLista)

})
rotasProduto.post("/CadastroProduto", async (req:Request, res: Response, next: NextFunction) =>{
    const cadastroProduto = req.body;

    await tabelaPro.create(cadastroProduto).then((Sucesso) => {
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
rotasProduto.put("/AtualizaProduto/:uuid", async (req:Request, res: Response, next: NextFunction) =>{
    const uuid = req.params.uuid;
    const corpo = req.body;

    corpo.uuid = uuid;
    await tabelaPro.update(corpo, {
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
rotasProduto.delete("/DeletaProduto/:uuid1", async (req:Request, res: Response, next: NextFunction) =>{
    const uuid1 = req.params.uuid1;
    const corpo1 = req.body;

    corpo1.uuid1 = uuid1;
    await tabelaPro.destroy( {
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


export default rotasProduto