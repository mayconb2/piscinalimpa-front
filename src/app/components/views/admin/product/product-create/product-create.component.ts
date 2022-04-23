import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Brand } from '../../brand/brand';
import { BrandService } from '../../brand/brand.service';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ProductDto } from './ProductDto';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

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

  brands: Brand[] = [];

  productToCreate: Product = {
    name: '',
    brand: {
      name:'',
    },
    affectedParameter: 0,
  }

  constructor(private productService: ProductService, 
    private router: Router, 
    private brandService: BrandService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.brandService.getBrands()
      .subscribe(brands => {
        this.brands = brands;
      });
  }

  formProductCreate = this.formBuilder.group({
    name:[null, Validators.required],
    brand: [null, Validators.required],
    affectedParameter: [null, Validators.required]
  });

  create(): void {
    let form = this.formProductCreate.value;
    
    let productDto: ProductDto = {
      affectedParameter: form.affectedParameter,
      brand: form.brand,
      name: form.name
    }

    this.productService.createProduct(productDto)
      .subscribe(() => {
        this.productService.showMessage('Produto criado!');
        this.router.navigate(['', { outlets: { admin: ['product'] } }])
      })
  }

  cancel(): void {
    this.router.navigate(['', { outlets: { admin: ['product'] } }])
  }

}
