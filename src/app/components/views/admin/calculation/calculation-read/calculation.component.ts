import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDeleteComponent } from 'src/app/components/template/dialog/confirm-delete/confirm-delete.component';
import { Calculation } from './../calculation';
import { CalculationService } from './../calculation.service';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.css']
})
export class CalculationComponent implements OnInit {

  allCalculation: Calculation[] = [];
  displayedColumns = ['id', 'multiplier', 'product', 'interventionLevel', 'formula', 'action'];

  constructor(private calculationService: CalculationService, 
              private router: Router,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.calculationService.getCalculation()
      .subscribe(calculations => {
        this.allCalculation = calculations;
      });
  }

  navigateToCreateCalculation(): void {
    this.router.navigate([{ outlets: { admin: [ 'calculation-create'] }}]);
  }

  confirmDeletion(id: string) {
    const dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      width: '450px',
      data: {
        textDeleteConfirm: "Tem certeza que deseja deletar esta marca?"
      }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
      
        this.calculationService.delete(id).subscribe(() => {
          
          this.calculationService.getCalculation()
          .subscribe(calculations => {
            this.allCalculation = calculations;
            this.calculationService.showMessage('Cálculo deletada com sucesso!');
          });

        });
      }
    });
  }
  
}
