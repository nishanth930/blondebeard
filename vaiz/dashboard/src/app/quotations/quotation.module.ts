import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotationsListingComponent } from './components/quotations-listing/quotations-listing.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { QuotationService } from './services/quotation.service' 
import { BrowserModule } from '@angular/platform-browser';
import { EditComponent } from './components/edit/edit.component'

import { MatFormFieldModule, MatInputModule } from '@angular/material';
@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule
    

    
    
  ],
  declarations: [QuotationsListingComponent,EditComponent],
  exports:[QuotationsListingComponent,EditComponent],
  providers:[QuotationService]
})
export class QuotationsModule { }
