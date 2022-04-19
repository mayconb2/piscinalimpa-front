import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  // links = [
  //   {path: 'calculation', label: 'Calculation'},
  //   {path: 'product', label: 'Product'}
  // ];

  // links = ['product', 'calculation']
  // activeLink = this.links[0];

  constructor() { }

  ngOnInit(): void {
  }

}
