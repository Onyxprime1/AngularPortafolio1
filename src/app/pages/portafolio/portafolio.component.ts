import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.css'
})
export class PortafolioComponent implements OnInit {

  constructor(public infoProducto: ProductoService ){

  }

  ngOnInit() { }

}
