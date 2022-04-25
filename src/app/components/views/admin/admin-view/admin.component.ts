import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router, 
    private headerService: HeaderService) {

      headerService.hheaderTitle = {
        title: 'Administração - Backoffice'
      }
  }

  ngOnInit(): void {
    this.router.navigate(['', { outlets: { admin: ['product'] } }])
  }

}
