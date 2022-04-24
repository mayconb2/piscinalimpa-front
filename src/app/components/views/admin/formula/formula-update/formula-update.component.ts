import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formula } from '../formula';
import { FormulaService } from '../formula.service';

@Component({
  selector: 'app-formula-update',
  templateUrl: './formula-update.component.html',
  styleUrls: ['./formula-update.component.css']
})
export class FormulaUpdateComponent implements OnInit {

  formulaToUpdate: Formula = {
    formula: ''
  }

  constructor(private formulaService: FormulaService, 
              private router: Router, 
              private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id')!;
    this.formulaService.getById(id)
      .subscribe(formula => {
        console.log(formula)
        this.formulaToUpdate = formula;
      })
  }

  update(): void {
    this.formulaService.update(this.formulaToUpdate)
      .subscribe(formula => {
        this.formulaService.showMessage('Fórmula atualizada com sucesso!');
        this.router.navigate(['', { outlets: { admin: ['formula'] } }]);
      })
  }

  cancel(): void {
    this.router.navigate(['', { outlets: { admin: ['formula'] } }]);
  }

}
