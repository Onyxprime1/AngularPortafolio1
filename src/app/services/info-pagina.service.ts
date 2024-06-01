import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage } from '../interface/infoInterface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPage = {};
  cargada = false;

  equipo: any[]= [];

  constructor(private http: HttpClient) { 
    this.cargarEquipo();
    this.cargarInfo();

  }

  private  cargarInfo(){

    this.http.get('assets/data/data.json')
    .subscribe((resp:InfoPage) =>{
      this.info = resp;
      this.cargada = true;
      console.info(resp);
    });
  }

  private  cargarEquipo(){
    this.http.get('https://angulardatabase-bafa7-default-rtdb.firebaseio.com/equipo.json')
    .subscribe((resp:any) =>{
      this.equipo = resp;
      this.cargada = true;
      console.info(resp);
    });
  }

  
}
