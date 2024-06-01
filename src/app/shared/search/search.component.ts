import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,
    CommonModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  constructor(private route: ActivatedRoute,
    public infoProducto: ProductoService
  ){}

  ngOnInit(){
    this.route.params.subscribe(params =>{
      console.log(params['termino']);
      this.infoProducto.buscarProducto(params['termino']);
    });
  }
}
