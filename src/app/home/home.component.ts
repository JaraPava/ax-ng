import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SeccionLlamadaComponent } from './secciones/seccion-llamada/seccion-llamada.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
  ],
  templateUrl: './home.component.html',
})
export default class HomeComponent {

}
