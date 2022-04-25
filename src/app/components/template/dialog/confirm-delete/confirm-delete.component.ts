import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent implements OnInit {

  confirm: boolean = false;
  
  constructor(public dialogRef: MatDialogRef<ConfirmDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDeleteText,) {}

  ngOnInit(): void {
    ConfirmDeleteComponent
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

export interface DialogDeleteText {
  textDeleteConfirm: string;
  confirm?: boolean;
}