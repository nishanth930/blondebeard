import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatSidenavContainer, MatSidenavContent, MatSidenavModule,MatListModule,MatCardModule } from '@angular/material';
import { MaterialModule } from '../shared/material.module';
import { InvoicesModule } from '../invoices/invoices.module';
import { PurchaseorderModule } from '../purchaseorder/purchaseorder.module';
import { QuotationsModule } from '../quotations/quotation.module';

@NgModule({
  declarations: [
    DashboardComponent,
    MainContentComponent,
     SideNavComponent,
     ToolbarComponent
     ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    InvoicesModule,
    PurchaseorderModule,
    QuotationsModule,
    MaterialModule
  ],
  exports: [
    MatSidenavContainer,
    MatSidenavContent,
    MatSidenavModule,
    MatListModule,
    MatCardModule
  ]

})
export class DashboardModule { } 