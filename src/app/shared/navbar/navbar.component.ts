import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Auth, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  rutaQuienSoy: string = 'quien-soy';
  rutaHome: string = 'home';
  rutaPuntuacion: string = 'puntuacion';
  rutaMensajeria: string = 'mensajeria';

  constructor(private router: Router, public auth: Auth) {}

  goTo(path: string) {
    this.router.navigate([path]);
  }

  CloseSession() {
    signOut(this.auth).then(() => {
      this.goTo('login');
    });
  }
}
