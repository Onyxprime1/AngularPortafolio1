// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { InfoPaginaService } from './services/info-pagina.service';
import { HttpClientModule } from '@angular/common/http';
import { InfoPage } from './interface/infoInterface';
import { ProductoService } from './services/producto.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLink,
    HeaderComponent,
    FooterComponent,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SAWOK.NET';

    constructor(public infoPage: InfoPaginaService,
      ProductoService: ProductoService
    ){

    }
}
