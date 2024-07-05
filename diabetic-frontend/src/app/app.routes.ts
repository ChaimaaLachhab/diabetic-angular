import { Routes } from '@angular/router';
import { DiabeticListComponent } from './diabetic-list/diabetic-list.component';
import { DiabeticFormComponent } from './diabetic-form/diabetic-form.component';
import { GlycemieFormComponent} from "./glycemie-form/glycemie-form.component";
import {GlycemieListComponent} from "./glycemie-list/glycemie-list.component";
import {DiabeticFormUpdateComponent} from "./diabetic-form-update/diabetic-form-update.component";
import {GlycemieFormUpdateComponent} from "./glycemie-form-update/glycemie-form-update.component";
import {AppComponent} from "./app.component";

export const routes: Routes = [
  { path: 'diabetics', component: DiabeticListComponent },
  { path: 'addDiabetic', component: DiabeticFormComponent },
  { path: 'update-diabetic/:id', component: DiabeticFormUpdateComponent },
  { path:'deleteDiabetic' ,component: DiabeticListComponent},

  { path: 'glycemies', component: GlycemieListComponent },
  { path: 'addGlycemie', component: GlycemieFormComponent },
  { path: 'update-glycemie/:id', component: GlycemieFormUpdateComponent },
  { path:'deleteGlycemie' ,component: GlycemieListComponent},
  
  { path: '', redirectTo: '/addDiabetic', pathMatch: 'full' }
];
