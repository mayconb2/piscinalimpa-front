import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDeleteComponent } from 'src/app/components/template/dialog/confirm-delete/confirm-delete.component';
import { Brand } from '../../brand/brand';
import { Product } from './../product';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  allProducts: Product[] = [];

  affectedParameters = [
    {
      id: 1,
      nameParam: 'Cloro'
    },
    {
      id: 2,
      nameParam: 'pH'
    },
    {
      id: 3,
      nameParam: 'Alcalinidade'
    },
    {
      id: 4,
      nameParam: 'Turbidez'
    }
  ];

  brandsFromBack: Brand[] = [];

  displayedColumns = ['id', 'name', 'brand', 'affectedParameter' ,'action'];

  constructor(private productService: ProductService,
              private router: Router,
              private dialog: MatDialog) { }

  ngOnInit(): void {

    this.productService.getProducts()
      .subscribe(products => {
        this.allProducts = products;
      });
  }

  navigateToCreateProduct(): void {
    this.router.navigate([{ outlets: { admin: [ 'product-create'] }}]);
  }

  confirmDeletion(id: string) {
    const dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      width: '450px',
      data: {
        textDeleteConfirm: "Tem certeza que deseja deletar este produto?"
      }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
      
        this.productService.delete(id).subscribe(() => {
          
          this.productService.getProducts()
          .subscribe(products => {
            this.allProducts = products;
          });

          this.productService.showMessage('Produto deletado com sucesso!');

        });
      }
    });
  }

}
