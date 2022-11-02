import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {FlexLayoutModule} from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { ContactDetailsComponent } from './contact-details.component';


@NgModule({
  declarations: [ 
    ContactDetailsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatDialogModule,
  ],
  exports: [
    MatFormFieldModule
  ]
})
export class ContactModule { }
