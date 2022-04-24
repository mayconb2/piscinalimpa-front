import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from '../../brand/brand';
import { BrandService } from '../../brand/brand.service';
import { Product } from '../product';
import { ProductDto } from '../product-create/ProductDto';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  affectedParameters = [
    {
      id: 1,
      name: 'Cloro'
    },
    {
      id: 2,
      name: 'pH'
    },
    {
      id: 3,
      name: 'Alcalinidade'
    },
    {
      id: 4,
      name: 'Turbidez'
    }
  ];

  selectedBrand : number = 0;
  selectedAffectedParam: number = 0;


  brands: Brand[] = [];

  productToUpdate: Product = {
    name: '',
    brand: {
      name:'',
    },
    affectedParameter: 0,
  }

  constructor(private productService: ProductService, 
    private router: Router, 
    private brandService: BrandService,
    private formBuilder: FormBuilder,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.brandService.getBrands()
      .subscribe(brands => {
        this.brands = brands;
      });

    const id = this.activateRoute.snapshot.paramMap.get('id')!;

    this.productService.getById(id)
      .subscribe(product => {
        this.productToUpdate = product;
        this.selectedBrand = product.brand.id!;
        this.productToUpdateForm.get('brand')?.setValue(product.brand.id)
        this.productToUpdateForm.get('affectedParameter')?.setValue(product.affectedParameter)
        this.selectedAffectedParam = product.affectedParameter;
      })
  }

  productToUpdateForm = this.formBuilder.group({
    name:[null, Validators.required],
    brand: [null, Validators.required],
    affectedParameter: [null, Validators.required]
  });

  update(): void {
    let form = this.productToUpdateForm.value;

    let productDto: ProductDto = {
      affectedParameter: form.affectedParameter,
      brand: form.brand,
      name: form.name,
      id: this.productToUpdate.id
    }

    this.productService.update(productDto)
      .subscribe(() => {
        this.productService.showMessage('Produto atualizado com sucesso!');
        this.router.navigate(['', { outlets: { admin: ['product'] } }]);
      });
  }

  cancel(): void {
    this.router.navigate(['', { outlets: { admin: ['product'] } }]);
  }
  
}
