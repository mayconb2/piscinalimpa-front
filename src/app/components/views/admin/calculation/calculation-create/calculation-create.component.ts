import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Formula } from '../../formula/formula';
import { FormulaService } from '../../formula/formula.service';
import { Product } from '../../product/product';
import { ProductService } from '../../product/product.service';
import { Calculation } from '../calculation';
import { CalculationService } from '../calculation.service';
import { CalculationDto } from '../calculationDto';

@Component({
  selector: 'app-calculation-create',
  templateUrl: './calculation-create.component.html',
  styleUrls: ['./calculation-create.component.css']
})
export class CalculationCreateComponent implements OnInit {

  
  allProducts: Product[] = [];
  interventionLevel = [
    {
      id: 1,
      name: 'pouca'
    },
    {
      id: 2,
      name: 'moderada'
    },
    {
      id: 3,
      name: 'intensa'
    },
    {
      id: 4,
      name: 'nenhuma'
    }
  ];
  allFormulas: Formula[] = [];
  
  calculationToCreate: Calculation = {
    product: {
      name: '',
      brand: {
        name:'',
      },
      affectedParameter: 0,
    },
    multiplier: 0,
    interventionLevel: {
      description: ''
    },
    formula: {
      formula: ''
    }
  }
  
  constructor(private calculationService: CalculationService, 
    private router: Router,
    private productService: ProductService,
    private formulaService: FormulaService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(products => this.allProducts = products);

    this.formulaService.getFormulas()
      .subscribe(formulas => this.allFormulas = formulas);
  }

  formCalculationCreate = this.formBuilder.group({
    multiplier:[null, Validators.required],
    product: [null, Validators.required],
    interventionLevel: [null, Validators.required],
    formula: [null, Validators.required]
  });

  create(): void {
    let form = this.formCalculationCreate.value;

    let calculationDto: CalculationDto = {
      formula: form.formula,
      interventionLevel: form.interventionLevel,
      multiplier: form.multiplier,
      product: form.product
    }

    this.calculationService.createCalculation(calculationDto)
      .subscribe(() => {
        this.calculationService.showMessage('Cálculo criado!');
        this.router.navigate(['', { outlets: { admin: ['calculation'] } }]);

      })
  }

  cancel(): void {
    this.router.navigate(['', { outlets: { admin: ['calculation'] } }]);
  }
}
