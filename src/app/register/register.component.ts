import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import {
  addDoc,
  collection,
  collectionData,
  Firestore,
} from '@angular/fire/firestore';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    RouterModule,
    RouterLink,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  hide = true;
  userNuevo!: string;
  passNueva!: string;
  passNuevaConfirm!: string;
  loggedUser!: string;

  constructor(
    private router: Router,
    private firestore: Firestore,
    public auth: Auth
  ) {}

  goTo(path: string) {
    this.router.navigate([path]);
  }

  Register() {
    if (this.passNueva === this.passNuevaConfirm) {
      createUserWithEmailAndPassword(
        this.auth,
        this.userNuevo,
        this.passNueva
      ).then(res => {
        if (res.user.email !== null) this.loggedUser = res.user.email;
        this.goTo('dashboard/home');
      });
    } else {
      alert('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
    }
  }
}
