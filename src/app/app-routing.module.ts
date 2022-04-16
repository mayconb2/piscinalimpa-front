import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/views/home/home.component';
import { CalculationFormComponent } from './components/views/calculation-form/calculation-form.component';
import { CalculationResultComponent } from './components/views/calculation-result/calculation-result.component';
import { LoginComponent } from './components/views/login/login.component';
import { AdminComponent } from './components/views/admin/admin.component';
import { AuthGuard } from './common/auth/auth.guard';

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
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path:"admin",
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
