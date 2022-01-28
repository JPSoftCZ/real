import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarComponent} from "./car/car.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {CarsComponent} from "./cars/cars.component";
import {CenikComponent} from "./cenik/cenik.component";
import {KontaktComponent} from "./kontakt/kontakt.component";
import {FouroufourComponent} from "./fouroufour/fouroufour.component";


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'car/:id', component: CarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'cars', component: CarsComponent},
  { path: 'cenik', component: CenikComponent},
  { path: 'kontakt', component: KontaktComponent},
  { path: '404', component: FouroufourComponent },
  { path: '**', redirectTo: '404' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
