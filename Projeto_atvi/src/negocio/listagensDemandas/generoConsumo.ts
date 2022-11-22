
import Cliente from "../../modelo/cliente";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";
import Consumo from "../dominio/consumo";
import OrdenadorConsumo from "../dominio/ordenadorConsumo";
import Listagem from "../metodos/listagem";

export default class GeneroConsumo extends Listagem {
  private clientes: Array<Cliente>
  private produtos: Array<Produto>
  private servicos: Array<Servico>

  constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
    super()
    this.clientes = clientes
    this.produtos = produtos
    this.servicos = servicos
  }

  public listar(): void {
  //Listagem de produtos e serviços pelo gênero feminino
    let cliente_genero = 'F';

    let meninas: Array<Cliente> = []
    for (let index = 0; index < this.clientes.length; index++) {
      const cliente = this.clientes[index];
      if (cliente.genero == cliente_genero) {
        meninas.push(cliente)
      }
    }

    let consumoF = []
    //verifica produto
    this.produtos.forEach(produto => {
      let consumo = new Consumo()
      consumo.nome = produto.nome
      consumo.valor = 0
      consumoF.push(consumo)
    })

    meninas.forEach(meninas => {
      meninas.getProdutosConsumidos.forEach(produtoConsumido => {
        consumoF.forEach(consumoF => {
          if (produtoConsumido.nome == consumoF.nome) {
            consumoF.valor = consumoF.valor + 1
          }
        })
      })
    })


    let ordenadorF = new OrdenadorConsumo()
    ordenadorF.consumo = consumoF

    let consumoOrdenadosF = ordenadorF.ordenarConsumo()
    console.log("Produtos mais consumidos pelo gênero feminino: ")
    console.log(consumoOrdenadosF);

    // verifica serviços
    let consumoServi = []

    this.servicos.forEach(servico => {
      let consumoSer = new Consumo()
      consumoSer.nome = servico.nome
      consumoSer.valor = 0
      consumoServi.push(consumoSer)
    })

    meninas.forEach(meninas => {
      meninas.getServicosConsumidos.forEach(servicoConsumido => {
        consumoServi.forEach(consumoServi => {
          if (servicoConsumido.nome == consumoServi.nome) {
            consumoServi.valor = consumoServi.valor + 1
          }
        })
      })
    })


    let ordenadorServF = new OrdenadorConsumo()
    ordenadorServF.consumo = consumoServi

    let consumoOrdenadosServF = ordenadorServF.ordenarConsumo()
    console.log("Serviços mais consumidos pelo gênero feminino: ")
    console.log(consumoOrdenadosServF);


    //masculino
    let cliente_generoM = 'M';

    let meninos: Array<Cliente> = []
    for (let index = 0; index < this.clientes.length; index++) {
      const cliente = this.clientes[index];
      if (cliente.genero == cliente_generoM) {
        meninos.push(cliente)
      }
    }

    let consumoM = []
    //verifica produto
    this.produtos.forEach(produto => {
      let consumo = new Consumo()
      consumo.nome = produto.nome
      consumo.valor = 0
      consumoM.push(consumo)
    })

    meninos.forEach(menino => {
      menino.getProdutosConsumidos.forEach(produtoConsumido => {
        consumoM.forEach(consumo => {
          if (produtoConsumido.nome == consumo.nome) {
            consumo.valor = consumo.valor + 1
          }
        })
      })
    })

    let ordenador = new OrdenadorConsumo()
    ordenador.consumo = consumoM

    let consumoMordenados = ordenador.ordenarConsumo()
    console.log("Produtos mais consumidos pelo gênero masculino: ")
    console.log(consumoMordenados);

    //verifica serviços

    let consumoServiM = []

    this.servicos.forEach(servico => {
      let consumoSerM = new Consumo()
      consumoSerM.nome = servico.nome
      consumoSerM.valor = 0
      consumoServiM.push(consumoSerM)
    })

    meninos.forEach(meninos => {
      meninos.getServicosConsumidos.forEach(servicoConsumido => {
        consumoServiM.forEach(consumoServiM => {
          if (servicoConsumido.nome == consumoServiM.nome) {
            consumoServiM.valor = consumoServiM.valor + 1
          }
        })
      })
    })


    let ordenadorServM = new OrdenadorConsumo()
    ordenadorServM.consumo = consumoServiM

    let consumoOrdenadosServM = ordenadorServM.ordenarConsumo()
    console.log("Serviços mais consumidos pelo gênero masculino: ")
    console.log(consumoOrdenadosServM);


    
  }
}
