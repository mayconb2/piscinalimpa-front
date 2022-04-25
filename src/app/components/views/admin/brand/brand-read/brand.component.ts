import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDeleteComponent } from 'src/app/components/template/dialog/confirm-delete/confirm-delete.component';
import { Brand } from './../brand';
import { BrandService } from './../brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  allBrands: Brand[] = [];
  displayedColumns = ['id', 'name', 'action'];

  constructor(private brandService: BrandService, 
              private router: Router,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.brandService.getBrands()
      .subscribe(brands => {
        this.allBrands = brands;
      });
  }

  navigateToCreateBrand(): void {
    this.router.navigate([{ outlets: { admin: [ 'brand-create'] }}]);
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
      
        this.brandService.delete(id).subscribe(() => {
          
          this.brandService.getBrands()
          .subscribe(brands => {
            this.allBrands = brands;
            this.brandService.showMessage('Marca deletada com sucesso!');
          });

        });
      }
    });
  }


}
