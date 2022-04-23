import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from '../brand';
import { BrandService } from '../brand.service';

@Component({
  selector: 'app-brand-create',
  templateUrl: './brand-create.component.html',
  styleUrls: ['./brand-create.component.css']
})
export class BrandCreateComponent implements OnInit {

  brandToCreate: Brand = {
    name: ''
  }

  constructor(private brandService: BrandService, private router: Router) { }

  ngOnInit(): void {
  }

  create() {
    this.brandService.createBrand(this.brandToCreate)
      .subscribe(() => {
        this.brandService.showMessage('Marca criada!');
        this.router.navigate(['', { outlets: { admin: ['brand'] } }])
      })
  }

  cancel(): void {
    this.router.navigate(['', { outlets: { admin: ['brand'] } }])
  }

}
