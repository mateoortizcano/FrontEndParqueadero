import { Vehiculo } from './vehiculo'

export class Factura {

    id: string;
    vehiculo: Vehiculo;
    fechaIngreso: String;
    fechaSalida: String;
    precioTotalParqueo: String;
}
