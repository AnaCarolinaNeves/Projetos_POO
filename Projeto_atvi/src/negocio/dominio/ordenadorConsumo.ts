import Consumo from "./consumo";

export default class OrdenadorConsumo {
    public consumo: Array<Consumo>

    public ordenarConsumo() {
        return this.consumo.sort((c1, c2) => (c1.valor > c2.valor ? -1 : 1))
       // arrayOfObjects.sort((a, b) => (a.propertyToSortBy > b.propertyToSortBy ? -1 : 1));
    }
}