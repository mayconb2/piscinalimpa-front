import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Formula } from '../../formula/formula';
import { FormulaService } from '../../formula/formula.service';
import { Product } from '../../product/product';
import { ProductService } from '../../product/product.service';
import { Calculation } from '../calculation';
import { CalculationService } from '../calculation.service';
import { CalculationDto } from '../calculationDto';

@Component({
  selector: 'app-calculation-update',
  templateUrl: './calculation-update.component.html',
  styleUrls: ['./calculation-update.component.css']
})
export class CalculationUpdateComponent implements OnInit {


  formCalculationUpadate = this.formBuilder.group({
    multiplier:[null, Validators.required],
    product: [null, Validators.required],
    interventionLevel: [null, Validators.required],
    formula: [null, Validators.required]
  });

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
  
  calculationToUpdate: Calculation = {
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

  selectedFormula = 0;
  selectedProduct = 0;
  selectedInterventionLevel = 0;
  
  constructor(private calculationService: CalculationService, 
    private router: Router,
    private productService: ProductService,
    private formulaService: FormulaService,
    private formBuilder: FormBuilder,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(products => this.allProducts = products);

    this.formulaService.getFormulas()
      .subscribe(formulas => this.allFormulas = formulas);

    const id = this.activateRoute.snapshot.paramMap.get('id')!;

    this.calculationService.getById(id)
      .subscribe(calculation => {
        console.log(calculation)
        this.calculationToUpdate = calculation;
        this.selectedFormula = calculation.formula.id!;
        console.log(this.selectedFormula)
        this.selectedInterventionLevel = calculation.interventionLevel.id!;
        this.selectedProduct = calculation.product.id!;
        this.formCalculationUpadate.get('interventionLevel')?.setValue(calculation.interventionLevel.id)
        this.formCalculationUpadate.get('product')?.setValue(calculation.product.id)
        this.formCalculationUpadate.get('formula')?.setValue(calculation.formula.id)
      })
  }


  update() {
    let form = this.formCalculationUpadate.value;

    
    const id = parseInt(this.activateRoute.snapshot.paramMap.get('id')!);

    let calculationDto: CalculationDto = {
      formula: form.formula,
      product: form.product,
      multiplier: form.multiplier,
      interventionLevel: form.interventionLevel,
      id: id
    }

    this.calculationService.update(calculationDto)
    .subscribe(() => {
      this.calculationService.showMessage('Calculo atualizado com sucesso!');
      this.router.navigate(['', { outlets: { admin: ['calculation'] } }]);
    });

  }

  cancel(): void {
    this.router.navigate(['', { outlets: { admin: ['calculation'] } }]);
  }

}
