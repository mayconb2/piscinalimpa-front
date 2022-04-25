import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDeleteComponent } from 'src/app/components/template/dialog/confirm-delete/confirm-delete.component';
import { Formula } from './../formula';
import { FormulaService } from './../formula.service';

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.css']
})

export class FormulaComponent implements OnInit {

  allFormulas: Formula[] = [];
  displayedColumns = ['id', 'formula', 'action'];

  constructor(private formulaService: FormulaService, 
              private router: Router,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.formulaService.getFormulas()
      .subscribe(formulas => {
        this.allFormulas = formulas;
      });
  }

  navigateToCreateFormula(): void {
    this.router.navigate([{ outlets: { admin: [ 'formula-create'] }}]);
  }

  confirmDeletion(id: string) {
    const dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      width: '450px',
      data: {
        textDeleteConfirm: "Tem certeza que deseja deletar esta fórmula?"
      }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
      
        this.formulaService.delete(id).subscribe(() => {
          
          this.formulaService.getFormulas()
          .subscribe(formulas => {
            this.allFormulas = formulas;
          });

          this.formulaService.showMessage('Produto deletado com sucesso!');

        });
      }
    });
  }

}
