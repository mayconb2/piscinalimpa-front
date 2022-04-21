import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from './brand';
import { BrandService } from './brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  allBrands: Brand[] = [];
  displayedColumns = ['id', 'name', 'action'];

  constructor(private brandService: BrandService, private router: Router) { }

  ngOnInit(): void {
    this.brandService.getBrands()
      .subscribe(brands => {
        this.allBrands = brands;
      });
  }

  navigateToCreateBrand(): void {
    this.router.navigate([{ outlets: { admin: [ 'brand-create'] }}]);
  }

}
