import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseorderListingComponent } from './components/purchaseorder-listing/purchaseorder-listing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { PurchaseorderService } from './services/purchaseorder.service';
import { EditComponent } from './components/edit/edit.component'
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [PurchaseorderListingComponent,EditComponent],
  exports : [PurchaseorderListingComponent,EditComponent],
  providers:[PurchaseorderService]
})
export class PurchaseorderModule { }
