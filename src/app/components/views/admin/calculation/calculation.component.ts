import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Calculation } from './calculation';
import { CalculationService } from './calculation.service';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.css']
})
export class CalculationComponent implements OnInit {

  allCalculation: Calculation[] = [];
  displayedColumns = ['id', 'multiplier', 'product', 'interventionLevel', 'formula', 'action'];

  constructor(private calculationService: CalculationService, private router: Router) { }

  ngOnInit(): void {
    this.calculationService.getCalculation()
      .subscribe(calculations => {
        this.allCalculation = calculations;
      });
  }

  navigateToCreateCalculation(): void {
    this.router.navigate([{ outlets: { admin: [ 'calculation-create'] }}]);
  }

}
