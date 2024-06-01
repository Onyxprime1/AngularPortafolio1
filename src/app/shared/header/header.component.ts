import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  
  constructor(public info: InfoPaginaService,
    private router: Router
  ){  }

  ngOnInit(){}

  public buscarProducto( termino: string){
    if(termino.length < 1){
      return;
    }
    this.router.navigate(['/search',termino])
    console.log();
  }

}

  
