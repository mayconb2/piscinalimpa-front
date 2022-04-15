import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/views/home/home.component';
import { CalculationFormComponent } from './components/views/calculation-form/calculation-form.component';
import { CalculationResultComponent } from './components/views/calculation-result/calculation-result.component';
import { LoginComponent } from './components/views/login/login.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"calculation",
    component: CalculationFormComponent
  },
  {
    path:"calculation-result",
    component: CalculationResultComponent
  },
  {
    path:"login",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
