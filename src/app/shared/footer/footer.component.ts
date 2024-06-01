import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { InfoPaginaService } from '../../services/info-pagina.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

  constructor(public infoPage: InfoPaginaService){}
  anio: number = new Date().getFullYear();
  ngOnInit() { }
}
