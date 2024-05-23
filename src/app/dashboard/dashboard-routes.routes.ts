import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { QuienSoyComponent } from '../quien-soy/quien-soy.component';
import { DashboardComponent } from './dashboard.component';
import { MensajeriaComponent } from '../mensajeria/mensajeria.component';
import { PuntuacionComponent } from '../puntuacion/puntuacion.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'quien-soy', component: QuienSoyComponent },
  { path: 'puntuacion', component: PuntuacionComponent },
  { path: 'mensajeria', component: MensajeriaComponent },
];

export default routes;
