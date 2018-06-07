import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  constructor(private http: HttpClient) { }

  obtenerParqueados() {
    return this.http.get('http://localhost:8080/obtenerParqueados');
  }

  registrarVehiculo(data) {
    return this.http.post('http://localhost:8080/parquearVehiculo', data);
  }

  sacarVehiculo(placa) {
    return this.http.get('http://localhost:8080/sacarVehiculo?placa='+placa);
  }
}
