import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { InvoiceListingComponent } from '../invoices/components/invoice-listing/invoice-listing.component';
import { QuotationsListingComponent } from '../quotations/components/quotations-listing/quotations-listing.component';
import { PurchaseorderListingComponent } from '../purchaseorder/components/purchaseorder-listing/purchaseorder-listing.component';
import { EditComponent  } from '../quotations/components/edit/edit.component'

const routes: Routes = [
  {
    path :'',
    component : DashboardComponent,
    children:[
      {
        path:'',
        component:MainContentComponent
      },
      {
        path:'quotations',
        component:QuotationsListingComponent
      },
      {
        path:'purchaseorder',
        component:PurchaseorderListingComponent
      },
      {
        path:'invoices',
        component:InvoiceListingComponent
      },
      {
        path:'quotations/:id',
        component:EditComponent
      },
      {
        path:'quotations/:new',
        component:EditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
