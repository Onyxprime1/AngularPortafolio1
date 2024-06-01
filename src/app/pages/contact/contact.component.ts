import { Component } from '@angular/core';
import { InfoPage } from '../../interface/infoInterface';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(public infopag: InfoPaginaService){

  }
}
