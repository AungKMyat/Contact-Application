import { Component, Inject, OnInit } from '@angular/core';
import { IContact } from './contact';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatFormField} from '@angular/material/form-field';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ContactDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IContact) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
