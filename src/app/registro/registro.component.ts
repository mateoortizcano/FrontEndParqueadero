import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { VehiculosService } from '../service/vehiculos.service'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private vehiculoService: VehiculosService, private modalService: NgbModal) { }

  @ViewChild('content') content: ElementRef;
  @ViewChild('contentFactura') contentFactura: ElementRef;
  
  factura = {
    "id":9,
    "vehiculo": {
      "id": 524,
      "placa": "DCM322",
      "tipo": 2,
      "cilindraje": 0,
      "parqueado": false
    },
    "fechaIngreso": "2018-06-06T11:25:14.000+0000",
    "fechaSalida": "2018-06-06T11:25:31.534+0000",
    "precioTotalParqueo": 1000
  };
  registro_parqueados;
  info;

  ngOnInit() { 
    this.mostrarvehiculos();
   }

  openModal(content) {
    this.modalService.open(content, { centered: true });
  }

  onClickSubmit(data) {
    this.vehiculoService.registrarVehiculo(data).
    subscribe(
      success => {
        this.mostrarvehiculos();
      },
      failure => {
        console.log(failure);
        this.info = failure.error.message;
        this.openModal(this.content);
      }
    );
  }
  mostrarvehiculos() {
    this.vehiculoService.obtenerParqueados().subscribe(
    resp => {
      console.log(resp, "res");
      this.registro_parqueados = resp;
    },
    err => {
      console.log(err, "error");
      this.info = err.error.message;
      this.openModal(this.content);
      this.registro_parqueados = [];
    });
  }

  registrarSalida(placa) {
    this.vehiculoService.sacarVehiculo(placa).
    subscribe(
      resp => {
        this.mostrarFactura(resp);
      },

      err => {
        console.log(err, "error");
        this.info = err.error.message;
        this.openModal(this.content);
      }
    )
  }

  mostrarFactura(data) {
    console.log(data, "vehiculo");
    this.factura = data;
    this.openModal(this.contentFactura);
    
  }
}