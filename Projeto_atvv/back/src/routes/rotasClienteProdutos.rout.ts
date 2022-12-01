import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from 'http-status-codes';

const rotaClienteProdutos = Router();
const clienteProdutos = require('../models/clienteProdutoTable')
const tabelaCliente = require('../models/clienteTable')
const tabelaProduto = require('../models/produtoTable')



rotaClienteProdutos.get('/clienteProdutos', async(req: Request, res: Response, next: NextFunction)=>{
    const listaClienteProdutos = await clienteProdutos.findAll();
    res.status(StatusCodes.OK).send(listaClienteProdutos)
})

rotaClienteProdutos.get('/clienteProdutos/clienteConsumoValor', async(req: Request, res: Response, next: NextFunction)=>{
    const listaClientes = await tabelaCliente.findAll();
    const listaProdutos = await tabelaProduto.findAll();
    const listaClienteProdutos = await clienteProdutos.findAll();

    
    let listaProdutoM:any = []
    let produto:any = []
    let contador = 0
    let n1 = 0
    let n = 0
    let s = 0
    let v = 0
    let v1 = 0
    let c = 0

    listaClienteProdutos.sort(function(a,b){
        return a.clienteId - b.clienteId
    })
    listaClienteProdutos.forEach(dados => {
        let produtoId = dados.produtoId
        let clienteId = dados.clienteId
        listaProdutos.forEach(produto => {
            if(produto.id == produtoId){
                produto.push({
                    nome: clienteId,
                    valor: produto.preco
                })
            }
        })
    })
    produto.forEach(cliente => {
        n = cliente.nome
        v = cliente.valor
        if(n != n1){
            if(contador >= 1){
                listaProdutoM.push({
                    nome: n1,
                    consumo: s
                })
        }
        s = v
        n1 = n
        contador = 1
        c++
    }
    else{
        v1 = v
        if(produto.length >= c){
            s = s + v
        }else{
            s = v + v1
        }
        contador++
        c++
    }

    });
    listaProdutoM.push({
        nome: n,
        consumo: s
    })
    produto = []
    listaClientes.forEach(cliente => {
        listaProdutoM.forEach(cli =>{
            if(cliente.id == cli.nome){
                produto.push({
                    nome: cliente.name,
                    valor: cli.consumo
                })
            }
        })
    });
    listaProdutoM = []
    res.status(StatusCodes.OK).send(produto)
})
rotaClienteProdutos.get('/clienteProdutos/generoMasculino', async(req: Request, res: Response, next: NextFunction)=>{
    const listaClienteMasculino = await tabelaCliente.findAll({ where: { genero: "Masculino" } })
    const listaProdutos = await tabelaProduto.findAll()
    const listaClienteProdutos = await clienteProdutos.findAll();

    let listaProdutoM:any ={}
    let produto:any = []
    let contador = -1

    listaClienteProdutos.forEach(dados => {
        let produtoId = dados.produtoId
        let clienteId = dados.clienteId
        listaClienteMasculino.forEach(mas => {
            if(mas.id == clienteId){
                listaProdutos.forEach(prod => {
                    if(prod.id == produtoId){
                        produto.push(prod.id)
                    }
                })
            }
        })
    })
    produto.forEach((count) => {
        listaProdutoM[count] = (listaProdutoM[count] || 0) + 1
    })
    produto = []
    listaProdutos.forEach(p => {
        Object.keys(listaProdutoM).forEach((id) => {
            if(p.id == id){
                contador++
                produto.push({
                    nome: p.nome,
                    quantidade: Object.values(listaProdutoM)[contador]
                })
            }
        })
    });
    res.status(StatusCodes.OK).send(produto)
})

rotaClienteProdutos.get('/clienteProdutos/generoFeminino', async(req: Request, res: Response, next: NextFunction)=>{
    const listaClienteFeminino = await tabelaCliente.findAll({ where: { genero: "Feminino" } })
    const listaProdutos = await tabelaProduto.findAll()
    const listaClienteProdutos = await clienteProdutos.findAll();

    let listaProdutoFeminino:any ={}
    let produto:any = []
    let contador = -1

    listaClienteProdutos.forEach(dados => {
        let produtoId = dados.produtoId
        let clienteId = dados.clienteId
        listaClienteFeminino.forEach(mas => {
            if(mas.id == clienteId){
                listaProdutos.forEach(prod => {
                    if(prod.id == produtoId){
                        produto.push(prod.id)
                    }
                })
            }
        })
    })
    produto.forEach((count) => {
        listaProdutoFeminino[count] = (listaProdutoFeminino[count] || 0) + 1
    })
    produto = []
    listaProdutos.forEach(p => {
        Object.keys(listaProdutoFeminino).forEach((id) => {
            if(p.id == id){
                contador++
                produto.push({
                    nome: p.nome,
                    quantidade: Object.values(listaProdutoFeminino)[contador]
                })
            }
        })
    });
    res.status(StatusCodes.OK).send(produto)
})

rotaClienteProdutos.get('/clienteProdutos/listagemProdutoMaisConsumido', async(req: Request, res: Response, next: NextFunction)=>{
    let produtoMC:any = []
    let cont = 0
    let n1 = 0
    let n = 0
    const listaClienteProduto = await clienteProdutos.findAll({ attributes: ['produtoId'] });
    listaClienteProduto.forEach(prod => {
        // produto.append(prod.produtoId)
        n = prod.produtoId
        if(n != n1){
            if(cont >= 1){
                produtoMC.push({
                    produtoId: n1,
                    consumo: cont
                })
            }
            n1 = n
            cont = 1
        }
        else{
            cont++
        }
    });
    produtoMC.push({
        produtoId: n,
        consumo: cont
    })
    res.status(StatusCodes.OK).send(produtoMC)
})

rotaClienteProdutos.get('/clienteProdutos/listagemClienteProdutoConsumidoQuantidade', async(req: Request, res: Response, next: NextFunction)=>{
    let clienteMC:any = []
    let cont = 0
    let n1 = 0
    let n = 0
    const listaClienteProdutos = await clienteProdutos.findAll({ attributes: ['clienteId'] });
    console.log(listaClienteProdutos);
    
    listaClienteProdutos.forEach(cliente => {
        n = cliente.clienteId
        
        if(n != n1){
            if(cont >= 1){
                clienteMC.push({
                    clienteId: n1,
                    consumo: cont
                })
            }
            n1 = n
            cont = 1
        }
        else{
            cont++
        }
        
    });
    clienteMC.push({
        clienteId: n,
        consumo: cont
    })
    console.log(clienteMC);
    
    res.status(StatusCodes.OK).send(clienteMC)
})
rotaClienteProdutos.get('/clienteProdutos/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const corpo = await clienteProdutos.findOne({ where: { id: uuid } })
    
    if (corpo === null) {
        return res.status(StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "A relação de cliente e produtos não cadastrada!"
        })
    } else {
        return res.json(corpo)
    }
})

rotaClienteProdutos.post('/clienteProdutos/cadastrar', async (req: Request, res: Response, next: NextFunction)=>{
    const novoClienteProdutos = req.body
    await clienteProdutos.create(novoClienteProdutos)
    .then((test) =>{
        console.log(test)
        console.log(test.id)
        return res.json({
            id: test.id,
            erro: false,
            mensagem: "A relação de cliente e produtos foi cadastrada com sucesso!"
        })
    }).catch(() =>{
        return res.status(StatusCodes.NOT_FOUND).json({
            id: -1,
            erro: true,
            mensagem: "A relação de cliente e produtos não foi cadastrada!"
        })
    })
})

rotaClienteProdutos.put('/clienteProdutos/atualizar/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const atualizaClienteProdutos = req.body;
    atualizaClienteProdutos.uuid = uuid
    await clienteProdutos.update(atualizaClienteProdutos, {
        where: {
            id: uuid
          }
    })
     .then(() =>{
         return res.json({
             erro: false,
             mensagem: "A relação de cliente e produtos foi atualizada com sucesso!"
         })
     }).catch(() =>{
         return res.status(StatusCodes.NOT_FOUND).json({
             erro: true,
             mensagem: "A relação de cliente e produtos não foi atualizada!"
        })
     })
})


rotaClienteProdutos.delete('/clienteProdutos/deletar/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    await clienteProdutos.destroy({
        where: {
            id: uuid
          }
    })
    .then(() =>{
        return res.json({
            erro: false,
            mensagem: "A relação de cliente e produtos foi removida com sucesso!"
        })
    }).catch(() =>{
        return res.status(StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "A relação de cliente e produtos não foi removida!"
        })
    })
})


export default rotaClienteProdutos;