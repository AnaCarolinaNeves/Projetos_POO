import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from 'http-status-codes';

const rotaClienteServicos = Router();
const clienteServicos = require('../models/clienteServicoTable')
const tabelaCliente = require('../models/clienteTable')
const tabelaServico = require('../models/servicoTable')



rotaClienteServicos.get('/clienteServicos', async(req: Request, res: Response, next: NextFunction)=>{
    const listaClienteServicos = await clienteServicos.findAll();
    res.status(StatusCodes.OK).send(listaClienteServicos)
})

rotaClienteServicos.get('/clienteServicos/clienteConsumoValor', async(req: Request, res: Response, next: NextFunction)=>{
    const listaClientes = await tabelaCliente.findAll();
    const listaServicos = await tabelaServico.findAll();
    const listaClienteServicos = await clienteServicos.findAll();

    
    let listaServicoM:any = []
    let servico:any = []
    let contador = 0
    let n1 = 0
    let n = 0
    let s = 0
    let v = 0
    let v1 = 0
    let c = 0

    listaClienteServicos.sort(function(a,b){
        return a.clienteId - b.clienteId
    })
    listaClienteServicos.forEach(dados => {
        let servicoId = dados.servicoId
        let clienteId = dados.clienteId
        listaServicos.forEach(servico => {
            if(servico.id == servicoId){
                servico.push({
                    nome: clienteId,
                    valor: servico.preco
                })
            }
        })
    })
    servico.forEach(cliente => {
        n = cliente.nome
        v = cliente.valor
        if(n != n1){
            if(contador >= 1){
                listaServicoM.push({
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
        if(servico.length >= c){
            s = s + v
        }else{
            s = v + v1
        }
        contador++
        c++
    }

    });
    listaServicoM.push({
        nome: n,
        consumo: s
    })
    servico = []
    listaClientes.forEach(cliente => {
        listaServicoM.forEach(cli =>{
            if(cliente.id == cli.nome){
                servico.push({
                    nome: cliente.name,
                    valor: cli.consumo
                })
            }
        })
    });
    listaServicoM = []
    res.status(StatusCodes.OK).send(servico)
})
rotaClienteServicos.get('/clienteServicos/generoMasculino', async(req: Request, res: Response, next: NextFunction)=>{
    const listaClienteMasculino = await tabelaCliente.findAll({ where: { genero: "Masculino" } })
    const listaServicos = await tabelaServico.findAll()
    const listaClienteServicos = await clienteServicos.findAll();

    let listaServicoM:any ={}
    let servico:any = []
    let contador = -1

    listaClienteServicos.forEach(dados => {
        let servicoId = dados.servicoId
        let clienteId = dados.clienteId
        listaClienteMasculino.forEach(mas => {
            if(mas.id == clienteId){
                listaServicos.forEach(ser => {
                    if(ser.id == servicoId){
                        servico.push(ser.id)
                    }
                })
            }
        })
    })
    servico.forEach((count) => {
        listaServicoM[count] = (listaServicoM[count] || 0) + 1
    })
    servico = []
    listaServicos.forEach(serv => {
        Object.keys(listaServicoM).forEach((id) => {
            if(serv.id == id){
                contador++
                servico.push({
                    nome: serv.nome,
                    quantidade: Object.values(listaServicoM)[contador]
                })
            }
        })
    });
    res.status(StatusCodes.OK).send(servico)
})

rotaClienteServicos.get('/clienteServicos/generoFeminino', async(req: Request, res: Response, next: NextFunction)=>{
    const listaClienteFeminino = await tabelaCliente.findAll({ where: { genero: "Feminino" } })
    const listaServicos = await tabelaServico.findAll()
    const listaClienteServicos = await clienteServicos.findAll();

    let listaServicoFeminino:any ={}
    let servico:any = []
    let contador = -1

    listaClienteServicos.forEach(dados => {
        let servicoId = dados.servicoId
        let clienteId = dados.clienteId
        listaClienteFeminino.forEach(mas => {
            if(mas.id == clienteId){
                listaServicos.forEach(ser => {
                    if(ser.id == servicoId){
                        servico.push(ser.id)
                    }
                })
            }
        })
    })
    servico.forEach((count) => {
        listaServicoFeminino[count] = (listaServicoFeminino[count] || 0) + 1
    })
    servico = []
    listaServicos.forEach(serv => {
        Object.keys(listaServicoFeminino).forEach((id) => {
            if(serv.id == id){
                contador++
                servico.push({
                    nome: serv.nome,
                    quantidade: Object.values(listaServicoFeminino)[contador]
                })
            }
        })
    });
    res.status(StatusCodes.OK).send(servico)
})

rotaClienteServicos.get('/clienteServicos/listagemServicoMaisConsumido', async(req: Request, res: Response, next: NextFunction)=>{
    let servicoMC:any = []
    let cont = 0
    let n1 = 0
    let n = 0
    const listaClienteServico = await clienteServicos.findAll({ attributes: ['servicoId'] });
    listaClienteServico.forEach(ser => {
        // Servico.append(prod.servicoId)
        n = ser.servicoId
        if(n != n1){
            if(cont >= 1){
                servicoMC.push({
                    servicoId: n1,
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
    servicoMC.push({
        servicoId: n,
        consumo: cont
    })
    res.status(StatusCodes.OK).send(servicoMC)
})

rotaClienteServicos.get('/clienteServicos/listagemClienteServicoConsumidoQuantidade', async(req: Request, res: Response, next: NextFunction)=>{
    let clienteMC:any = []
    let cont = 0
    let n1 = 0
    let n = 0

    const listaClienteServicos = await clienteServicos.findAll({ attributes: ['clienteId'] });
    console.log(listaClienteServicos);
    
    listaClienteServicos.forEach(cliente => {
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
rotaClienteServicos.get('/clienteServicos/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const corpo = await clienteServicos.findOne({ where: { id: uuid } })
    
    if (corpo === null) {
        return res.status(StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "A relação de cliente e servicos não cadastrada!"
        })
    } else {
        return res.json(corpo)
    }
})

rotaClienteServicos.post('/clienteServicos/cadastrar', async (req: Request, res: Response, next: NextFunction)=>{
    const novoClienteServicos = req.body
    await clienteServicos.create(novoClienteServicos)
    .then((test) =>{
        console.log(test)
        console.log(test.id)
        return res.json({
            id: test.id,
            erro: false,
            mensagem: "A relação de cliente e servicos foi cadastrada com sucesso!"
        })
    }).catch(() =>{
        return res.status(StatusCodes.NOT_FOUND).json({
            id: -1,
            erro: true,
            mensagem: "A relação de cliente e servicos não foi cadastrada!"
        })
    })
})

rotaClienteServicos.put('/clienteServicos/atualizar/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const atualizaClienteServicos = req.body;
    atualizaClienteServicos.uuid = uuid
    await clienteServicos.update(atualizaClienteServicos, {
        where: {
            id: uuid
          }
    })
     .then(() =>{
         return res.json({
             erro: false,
             mensagem: "A relação de cliente e servicos foi atualizada com sucesso!"
         })
     }).catch(() =>{
         return res.status(StatusCodes.NOT_FOUND).json({
             erro: true,
             mensagem: "A relação de cliente e servicos não foi atualizada!"
        })
     })
})


rotaClienteServicos.delete('/clienteServicos/deletar/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    await clienteServicos.destroy({
        where: {
            id: uuid
          }
    })
    .then(() =>{
        return res.json({
            erro: false,
            mensagem: "A relação de cliente e servicos foi removida com sucesso!"
        })
    }).catch(() =>{
        return res.status(StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "A relação de cliente e servicos não foi removida!"
        })
    })
})


export default rotaClienteServicos;