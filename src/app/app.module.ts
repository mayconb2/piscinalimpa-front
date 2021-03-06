import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';

import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './components/views/home/home.component';
import { CalculationFormComponent } from './components/views/calculation-form/calculation-form.component';
import { CalculationResultComponent } from './components/views/calculation-result/calculation-result.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './components/views/login/login.component';
import { RequestInterceptor } from './common/auth/request.interceptor';
import { BrandComponent } from './components/views/admin/brand/brand-read/brand.component';
import { FormulaComponent } from './components/views/admin/formula/formula-read/formula.component';
import { CalculationComponent } from './components/views/admin/calculation/calculation-read/calculation.component';
import { UserComponent } from './components/views/admin/user/user-read/user.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { UserCreateComponent } from './components/views/admin/user/user-create/user-create.component';
import { BrandCreateComponent } from './components/views/admin/brand/brand-create/brand-create.component';
import { FormulaCreateComponent } from './components/views/admin/formula/formula-create/formula-create.component';
import { ProductCreateComponent } from './components/views/admin/product/product-create/product-create.component';
import { ProductComponent } from './components/views/admin/product/product-read/product.component';
import { CalculationCreateComponent } from './components/views/admin/calculation/calculation-create/calculation-create.component';
import { FormulaUpdateComponent } from './components/views/admin/formula/formula-update/formula-update.component';
import { BrandUpdateComponent } from './components/views/admin/brand/brand-update/brand-update.component';
import { UserUpdateComponent } from './components/views/admin/user/user-update/user-update.component';
import { ProductUpdateComponent } from './components/views/admin/product/product-update/product-update.component';
import { CalculationUpdateComponent } from './components/views/admin/calculation/calculation-update/calculation-update.component';
import { AdminComponent } from './components/views/admin/admin-view/admin.component';
import { ConfirmDeleteComponent } from './components/template/dialog/confirm-delete/confirm-delete.component';
import { SuggestionComponent } from './components/views/suggestion/suggestion.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CalculationFormComponent,
    CalculationResultComponent,
    LoginComponent,
    AdminComponent,
    BrandComponent,
    FormulaComponent,
    CalculationComponent,
    UserComponent,
    UserCreateComponent,
    BrandCreateComponent,
    FormulaCreateComponent,
    ProductCreateComponent,
    ProductComponent,
    CalculationCreateComponent,
    FormulaUpdateComponent,
    BrandUpdateComponent,
    UserUpdateComponent,
    ProductUpdateComponent,
    CalculationUpdateComponent,
    ConfirmDeleteComponent,
    SuggestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatDialogModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
