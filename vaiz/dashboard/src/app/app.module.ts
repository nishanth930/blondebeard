import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module'
import { MatCardModule  } from  '@angular/material';
import { InvoiceService } from './invoices/services/invoice.service';
import { QuotationService } from './quotations/services/quotation.service';
import { PurchaseorderService } from './purchaseorder/services/purchaseorder.service'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatCardModule,
    FormsModule
    
  ],
  providers: [InvoiceService,QuotationService,PurchaseorderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
