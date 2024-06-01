// src/app/pages/about/about.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule], // Asegúrate de importar CommonModule
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public infoPage: InfoPaginaService) { }

  ngOnInit() { }

}
