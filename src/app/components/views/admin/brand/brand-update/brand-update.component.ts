import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from '../brand';
import { BrandService } from '../brand.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {

  brandToUpdate: Brand = {
    name: ''
  }

  constructor(private brandService: BrandService, 
              private router: Router, 
              private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id')!;
    this.brandService.getById(id)
      .subscribe(brand => {
        this.brandToUpdate = brand;
      })
  }

  update(): void {
    this.brandService.update(this.brandToUpdate)
      .subscribe(brand => {
        this.brandService.showMessage('Marca atualizada com sucesso!');
        this.router.navigate(['', { outlets: { admin: ['brand'] } }]);
      })
  }

  cancel(): void {
    this.router.navigate(['', { outlets: { admin: ['brand'] } }]);
  }


}
