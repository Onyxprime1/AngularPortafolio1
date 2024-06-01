import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { InfoDetalle } from '../../interface/productoInterface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements OnInit {
  
  producto: InfoDetalle= {};
  id: string="";

  constructor(private route: ActivatedRoute,
    public infoproducto: ProductoService
  ){
  }

  ngOnInit() {
    this.route.params.subscribe(parametro =>{
      console.log(parametro);  
      this.infoproducto.getProducto(parametro['id']).
      subscribe((producto: InfoDetalle )=>{
        console.log(producto ); 
        this.producto = producto;
        this.id = parametro['id'];
      });
    });
  }
}
