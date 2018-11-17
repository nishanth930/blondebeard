import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoices } from '../../models/invoice';

@Component({
  selector: 'app-invoice-listing',
  templateUrl: './invoice-listing.component.html',
  styleUrls: ['./invoice-listing.component.scss']
})
export class InvoiceListingComponent implements OnInit {

  constructor(private invoiceSerivce: InvoiceService) { }

  displayedColumns: string[] = ['shippingType', 'Country', 'City', 'State','Postal', 'departure', 'country', 'city', 'state', 'postal', 'arrival', 'quantity', 'quantityunit', 'totalweight', 'weightunit', 'dimensions', 'dimensionsunit', 'stackable','hazardous','insurance','incotermsunit', 'comment','taxes', 'amount','actions'];
  dataSource : Invoices[] = [];

  ngOnInit() {
    this.invoiceSerivce.getInvoices().subscribe(
      data =>{ this.dataSource =data;
      console.log(data);
    },
    err => {
      console.error(err);
    }
    );
  }

}
