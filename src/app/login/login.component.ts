import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import {
  addDoc,
  collection,
  collectionData,
  Firestore,
} from '@angular/fire/firestore';
// import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    RouterModule,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  hide = true;
  user: string = 'lausi';
  pass: string = 'lausi123';
  userIngresado!: string;
  passIngresada!: string;
  loggedUser!: string;
  public loginsColection: any[] = [];
  public countLogins: number = 0;

  constructor(
    private router: Router,
    private firestore: Firestore,
    public auth: Auth
  ) {}
  onSubmit(form: NgForm) {
    console.log(form.value);
  }

  goTo(path: string) {
    this.Logs();
    this.router.navigate([path]);
  }

  goToRegister(path: string) {
    this.router.navigate([path]);
  }

  Login() {
    signInWithEmailAndPassword(
      this.auth,
      this.userIngresado,
      this.passIngresada
    )
      .then(res => {
        if (res.user.email !== null) {
          this.loggedUser = res.user.email;
          this.goTo('dashboard/home');
        }
      })
      .catch(e => console.log(e));
  }

  Logs() {
    let col = collection(this.firestore, 'logins');
    addDoc(col, { fecha: new Date(), user: this.userIngresado });
  }

  GetData() {
    let col = collection(this.firestore, 'logins');

    const observable = collectionData(col);

    observable.subscribe(respuesta => {
      this.loginsColection = respuesta; //actualizo el array

      this.countLogins = this.loginsColection.length; //actualizo la cantidad de registros que contiene la coleccion

      console.log(respuesta);
    });
  }

  CloseSession() {
    signOut(this.auth).then(() => {
      this.goTo('login');
    });
  }
}
