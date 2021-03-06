import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/views/home/home.component';
import { CalculationFormComponent } from './components/views/calculation-form/calculation-form.component';
import { CalculationResultComponent } from './components/views/calculation-result/calculation-result.component';
import { LoginComponent } from './components/views/login/login.component';
import { AuthGuard } from './common/auth/auth.guard';
import { ProductComponent } from './components/views/admin/product/product-read/product.component';
import { BrandComponent } from './components/views/admin/brand/brand-read/brand.component';
import { CalculationComponent } from './components/views/admin/calculation/calculation-read/calculation.component';
import { FormulaComponent } from './components/views/admin/formula/formula-read/formula.component';
import { UserComponent } from './components/views/admin/user/user-read/user.component';
import { UserCreateComponent } from './components/views/admin/user/user-create/user-create.component';
import { BrandCreateComponent } from './components/views/admin/brand/brand-create/brand-create.component';
import { FormulaCreateComponent } from './components/views/admin/formula/formula-create/formula-create.component';
import { ProductCreateComponent } from './components/views/admin/product/product-create/product-create.component';
import { CalculationCreateComponent } from './components/views/admin/calculation/calculation-create/calculation-create.component';
import { FormulaUpdateComponent } from './components/views/admin/formula/formula-update/formula-update.component';
import { BrandUpdateComponent } from './components/views/admin/brand/brand-update/brand-update.component';
import { UserUpdateComponent } from './components/views/admin/user/user-update/user-update.component';
import { ProductUpdateComponent } from './components/views/admin/product/product-update/product-update.component';
import { CalculationUpdateComponent } from './components/views/admin/calculation/calculation-update/calculation-update.component';
import { AdminComponent } from './components/views/admin/admin-view/admin.component';
import { SuggestionComponent } from './components/views/suggestion/suggestion.component';

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
    path:"suggestion",
    component: SuggestionComponent
  },
  {
    path:"calculation-result",
    component: CalculationResultComponent
  },
  {
    path:"product",
    component: ProductComponent,
    outlet: 'admin',
    canActivate: [AuthGuard]
  },
  {
    path:"product-create",
    component: ProductCreateComponent,
    outlet: 'admin',
    canActivate: [AuthGuard]
  },
  {
    path:"product-update/:id",
    component: ProductUpdateComponent,
    outlet: 'admin',
    canActivate: [AuthGuard]
  },
  {
    path:"brand",
    component: BrandComponent,
    outlet: 'admin',
    canActivate: [AuthGuard]
  },
  {
    path:"brand-create",
    component: BrandCreateComponent,
    outlet: 'admin',
    canActivate: [AuthGuard]
  },
  {
    path:"brand-update/:id",
    component: BrandUpdateComponent,
    outlet: 'admin',
    canActivate: [AuthGuard]
  },
  {
    path:"calculation",
    component: CalculationComponent,
    outlet: 'admin',
    canActivate: [AuthGuard]
  },
  {
    path:"calculation-create",
    component: CalculationCreateComponent,
    outlet: 'admin',
    canActivate: [AuthGuard]
  },
  {
    path:"calculation-update/:id",
    component: CalculationUpdateComponent,
    outlet: 'admin',
    canActivate: [AuthGuard]
  },
  {
    path:"formula",
    component: FormulaComponent,
    outlet: 'admin',
    canActivate: [AuthGuard]
  },
  {
    path:"formula-create",
    component: FormulaCreateComponent,
    outlet: 'admin',
    canActivate: [AuthGuard]
  },
  {
    path:"formula-update/:id",
    component: FormulaUpdateComponent,
    outlet: 'admin',
    canActivate: [AuthGuard]
  },
  {
    path:"user",
    component: UserComponent,
    outlet: 'admin',
    canActivate: [AuthGuard]
  },
  {
    path:"user-create",
    component: UserCreateComponent,
    outlet: 'admin',
    canActivate: [AuthGuard]
  },
  {
    path:"user-update/:id",
    component: UserUpdateComponent,
    outlet: 'admin',
    canActivate: [AuthGuard]
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"admin",
    component: AdminComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
