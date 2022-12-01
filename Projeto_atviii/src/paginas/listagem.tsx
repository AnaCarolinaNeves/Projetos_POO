import 'materialize-css/dist/css/materialize.min.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Listagem = () => {

    return (
        <>
            <Tabs className='center' style={{ marginTop: '20px' }}>
                <TabList>
                    <Tab>Clientes que mais consumiram</Tab>
                    <Tab>Gênero clientes</Tab>
                    <Tab>Produtos e serviços mais consumidos</Tab>
                    <Tab>Clientes que menos consumiram</Tab>
                </TabList>
                {/* Clientes que mais consumiram */}
                <TabPanel>
                    <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="col">
                            <table className="centered responsive-table ">
                                <thead>
                                    <tr>
                                        <th>N°</th>
                                        <th>Nome</th>
                                        <th>Qtd produtos consumidos</th>
                                        <th>Qtd serviços utilizados</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Jeniffer</td>
                                        <td>16</td>
                                        <td>12</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Ana</td>
                                        <td>12</td>
                                        <td>10</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>João</td>
                                        <td>8</td>
                                        <td>8</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                        <div className="col">
                            <table className="centered responsive-table ">
                                <thead>
                                    <tr>
                                        <th>N°</th>
                                        <th>Nome</th>
                                        <th>Valor total de produtos consumidos</th>
                                        <th>Valor total de serviços utilizados</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Jeniffer</td>
                                        <td>R$160</td>
                                        <td>R$120</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Ana</td>
                                        <td>R$120</td>
                                        <td>R$100</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>João</td>
                                        <td>R$80</td>
                                        <td>R$80</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </TabPanel>
                {/* Gênero clientes */}
                <TabPanel>
                    <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="col" >
                            <table className="centered responsive-table ">
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Gênero</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>Jeniffer</td>
                                        <td>F</td>
                                    </tr>
                                    <tr>
                                        <td>Ana</td>
                                        <td>F</td>
                                    </tr>
                                    <tr>
                                        <td>João</td>
                                        <td>M</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <hr></hr>
                    <h6>Produtos e serviços mais consumidos por gênero</h6>
                    <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="col" >
                            <table className="centered responsive-table ">
                                <thead>
                                    <tr>
                                        <th>Produto</th>
                                        <th>Gênero</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>Shampoo</td>
                                        <td>F</td>
                                    </tr>
                                    <tr>
                                        <td>Shampoo</td>
                                        <td>M</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="col" >
                            <table className="centered responsive-table ">
                                <thead>
                                    <tr>
                                        <th>Serviço</th>
                                        <th>Gênero</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>Manicure</td>
                                        <td>F</td>
                                    </tr>
                                    <tr>
                                        <td>Corte de cabelo</td>
                                        <td>M</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>


                </TabPanel>
                {/* Serviços e produtos mais consumidos */}
                <TabPanel>
                    <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="col" >
                            <table className="centered responsive-table ">
                                <thead>
                                    <tr>
                                        <th>Produto</th>
                                        <th>Qtd de pedidos</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>Shampoo</td>
                                        <td>30</td>
                                    </tr>
                                    <tr>
                                        <td>Condicionador</td>
                                        <td>25</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="col" >
                            <table className="centered responsive-table ">
                                <thead>
                                    <tr>
                                        <th>Serviço</th>
                                        <th>Qtd de pedidos</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>Manicure</td>
                                        <td>7</td>
                                    </tr>
                                    <tr>
                                        <td>Corte de cabelo</td>
                                        <td>6</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </TabPanel>
                {/* Clientes que menos consumiram */}
                <TabPanel>
                    <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="col">
                            <table className="centered responsive-table ">
                                <thead>
                                    <tr>
                                        <th>N°</th>
                                        <th>Nome</th>
                                        <th>Qtd produtos consumidos</th>
                                        <th>Qtd serviços utilizados</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>João</td>
                                        <td>5</td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jeniffer</td>
                                        <td>7</td>
                                        <td>6</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Ana</td>
                                        <td>8</td>
                                        <td>9</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </>
    )
}

export default Listagem