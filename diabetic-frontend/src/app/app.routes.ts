import { Routes } from '@angular/router';
import { DiabeticListComponent } from './diabetic-list/diabetic-list.component';
import { DiabeticFormComponent } from './diabetic-form/diabetic-form.component';

export const routes: Routes = [
  { path: 'diabetics', component: DiabeticListComponent },
  { path: 'addDiabetic', component: DiabeticFormComponent },
  { path:'update' ,component: DiabeticListComponent},
  { path:'deleteDiabetic' ,component: DiabeticListComponent},
  { path: '', redirectTo: '/adduser', pathMatch: 'full' }
];
