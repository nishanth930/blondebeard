import { Component, OnInit } from '@angular/core';
import { QuotationService } from '../../services/quotation.service';
import { Quote } from '../../models/quotation';
import { Quote1} from '../../models/quote1';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-quotations-listing',
  templateUrl: './quotations-listing.component.html',
  styleUrls: ['./quotations-listing.component.scss']
})
export class QuotationsListingComponent implements OnInit {
  submitted: boolean;
  errorMsg = '';
  
  constructor(private quotationSerivce: QuotationService,private router:Router) { }
  

  displayedColumns: string[] = [ 'consignee', 'shippingType', 'Country', 'City', 'State','Postal', 'departure', 'country', 'city', 'state', 'postal', 'arrival', 'quantity', 'quantityunit', 'totalweight', 'weightunit', 'length','width','height', 'units', 'stackable','hazardous','insurance','incotermsunit', 'comment', 'amount','action' ];
  saveBtnHandler(){
    this.router.navigate(['dashboard','quotations','new'])
  }
  editBtnHandler(id){
    this.router.navigate(['dashboard','quotations',id]);
  }
  public dataSource : any=[];
  ngOnInit() {
    this.quotationSerivce.getQuote().subscribe(
      data =>{ this.dataSource =data;
      console.log(data);
    },
    err => {
      console.error(err);
    }
    );    
  }
 
 
}