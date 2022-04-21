import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/views/home/home.component';
import { CalculationFormComponent } from './components/views/calculation-form/calculation-form.component';
import { CalculationResultComponent } from './components/views/calculation-result/calculation-result.component';
import { LoginComponent } from './components/views/login/login.component';
import { AdminComponent } from './components/views/admin/admin.component';
import { AuthGuard } from './common/auth/auth.guard';
import { ProductComponent } from './components/views/admin/product/product.component';
import { BrandComponent } from './components/views/admin/brand/brand.component';
import { CalculationComponent } from './components/views/admin/calculation/calculation.component';
import { FormulaComponent } from './components/views/admin/formula/formula.component';
import { UserComponent } from './components/views/admin/user/user.component';
import { UserCreateComponent } from './components/views/admin/user/user-create/user-create.component';
import { BrandCreateComponent } from './components/views/admin/brand/brand-create/brand-create.component';

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
    path:"product",
    component: ProductComponent,
    outlet: 'admin'
  },
  {
    path:"brand",
    component: BrandComponent,
    outlet: 'admin'
  },
  {
    path:"brand-create",
    component: BrandCreateComponent,
    outlet: 'admin'
  },
  {
    path:"calculation",
    component: CalculationComponent,
    outlet: 'admin'
  },
  {
    path:"formula",
    component: FormulaComponent,
    outlet: 'admin'
  },
  {
    path:"user",
    component: UserComponent,
    outlet: 'admin'
  },
  {
    path:"user-create",
    component: UserCreateComponent,
    outlet: 'admin'
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
