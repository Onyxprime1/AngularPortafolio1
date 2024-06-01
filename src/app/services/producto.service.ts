import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPro} from '../interface/productoInterface';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos: InfoPro[]=[];
  cargo = true;
  productoID: InfoPro[]=[];

  constructor(private http: HttpClient) { 
    this.cargarProducto();
  }

  private cargarProducto(){

    return new Promise((resolve,reject)=>{
      this.http.get('https://angulardatabase-bafa7-default-rtdb.firebaseio.com/producto_dx.json')
    .subscribe( (resp: any) =>{
      this.productos = resp;
      this.cargo= false;
      //resolve();
    });
    })
   
  }

  getProducto(id: string){
    return this.http.get(`https://angulardatabase-bafa7-default-rtdb.firebaseio.com/producto/${id}.json`)
  }

  buscarProducto(termino: string){

    if(this.productos.length == 0){
      this.cargarProducto().then(()=>{
        this.fitrarProducto(termino);
      });
    }else{
      this.fitrarProducto(termino);
    }

  }

  private fitrarProducto(termino: string){
    this.productoID =[];
    termino = termino.toLowerCase();
    this.productos.forEach(prod =>{ 
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if( prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0){
        this.productoID.push(prod);
      }
    })
  }

}
