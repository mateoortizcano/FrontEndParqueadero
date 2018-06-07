import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegistroComponent} from './registro/registro.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { VehiculosService } from './service/vehiculos.service';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot()    
  ],
  providers: [VehiculosService],
  bootstrap: [AppComponent],
})
export class AppModule { }
