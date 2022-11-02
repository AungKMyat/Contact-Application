import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IContact } from './contact';
import { ContactDetailsComponent } from './contact-details.component';
import {ContactService} from './contact.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'phone', 'city'];
  errorMessage = '';
  sub!: Subscription;
  contacts: IContact[] = [];
  
  constructor(private contactService: ContactService, public dialog:MatDialog) { }

  // load contacts from JSON 
  ngOnInit(): void {
    this.sub = this.contactService.getContacts().subscribe({
      next: contacts => {
        this.contacts = contacts;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  clickedRow(row:IContact): void{
    const dialogRef = this.dialog.open(ContactDetailsComponent,{
      width: '40%',
      data: row
    });
  }

}
