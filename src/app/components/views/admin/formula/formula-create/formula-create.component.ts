import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Common } from 'src/app/common/common';
import { Formula } from '../formula';
import { FormulaService } from '../formula.service';

@Component({
  selector: 'app-formula-create',
  templateUrl: './formula-create.component.html',
  styleUrls: ['./formula-create.component.css']
})
export class FormulaCreateComponent implements OnInit {

  formulaToCreate: Formula = {
    formula: ''
  }

  constructor(private formulaService: FormulaService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.formulaService.createFormula(this.formulaToCreate)
      .subscribe(() => {
        this.formulaService.showMessage('Fórmula criada!');
        this.router.navigate(['', { outlets: { admin: ['formula'] } }])
      })
  }

  cancel(): void {
    this.router.navigate(['', { outlets: { admin: ['formula'] } }])
  }

}
