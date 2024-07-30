import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SeccionLlamadaComponent } from './secciones/seccion-llamada/seccion-llamada.component';
import { SeccionDestacadosComponent } from './secciones/seccion-destacados/seccion-destacados.component';
import { SeccionDiferencialesComponent } from './secciones/seccion-diferenciales/seccion-diferenciales.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    SeccionLlamadaComponent,
    SeccionDestacadosComponent,
    SeccionDiferencialesComponent
  ],
  templateUrl: './home.component.html',
})
export default class HomeComponent {

}
