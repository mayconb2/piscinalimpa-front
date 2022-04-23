import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formula } from './formula';
import { FormulaService } from './formula.service';

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.css']
})

export class FormulaComponent implements OnInit {

  allFormulas: Formula[] = [];
  displayedColumns = ['id', 'formula', 'action'];

  constructor(private formulaService: FormulaService, private router: Router) { }

  ngOnInit(): void {
    this.formulaService.getFormulas()
      .subscribe(formulas => {
        this.allFormulas = formulas;
      });
  }

  navigateToCreateFormula(): void {
    this.router.navigate([{ outlets: { admin: [ 'formula-create'] }}]);
  }

}
