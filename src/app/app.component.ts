import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  template: `
    <nav class="navbar">
      <button class="navbar-toggler" (click)="toggleMenu()">
        &#9776; <!-- Icono de hamburguesa -->
      </button>

      <div class="navbar-menu" [class.open]="menuOpen">
        <a routerLink="/" (click)="closeMenu()">Inicio</a>
        <a routerLink="/experience" (click)="closeMenu()">Experiencia</a>
        <a routerLink="/education" (click)="closeMenu()">Educación</a>
        <a routerLink="/skills" (click)="closeMenu()">Habilidades</a>
        <a routerLink="/personal" (click)="closeMenu()">Información Personal</a>
      </div>
      <img src="{{'assets/images/perfil.jpg'}}" alt="Mi foto" class="profile-photo"></nav>
    
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuOpen = false;
  title = 'cv-app';

  // Alternar menú
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // Cerrar menú al hacer clic en un enlace
  closeMenu() {
    this.menuOpen = false;
  }
}
