// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { SearchComponent } from './shared/search/search.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'item/:id', component: ItemComponent },
  { path: 'search/:termino', component: SearchComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'home' }  // Redireccionar rutas desconocidas a Home
];
