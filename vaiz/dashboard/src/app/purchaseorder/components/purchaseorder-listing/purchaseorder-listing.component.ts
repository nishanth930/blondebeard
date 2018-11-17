import { Component, OnInit } from '@angular/core';
import { PurchaseorderService } from '../../services/purchaseorder.service'
import { Quote } from '../../models/quotation';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-purchaseorder-listing',
  templateUrl: './purchaseorder-listing.component.html',
  styleUrls: ['./purchaseorder-listing.component.scss']
})
export class PurchaseorderListingComponent implements OnInit {
  submitted: boolean;
  errorMsg = '';
  constructor(private purchaseorderService: PurchaseorderService,private router:Router) { }
  
  displayedColumns: string[] = ['email', 'company','shippingType', 'Country', 'City', 'State','Postal', 'departure', 'country', 'city', 'state', 'postal', 'arrival', 'quantity', 'quantityunit', 'totalweight', 'weightunit', 'length','width','height', 'units', 'stackable','hazardous','insurance','incotermsunit', 'comment', 'amount','taxes','action'];
  dataSource : Quote[] = [];
  saveBtnHandler(){
    this.router.navigate(['dashboard','purchaseorder','new'])
  }
  editBtnHandler(id){
    this.router.navigate(['dashboard','purchaseorder',id]);
  }
  ngOnInit() {
    this.purchaseorderService.getPurchaseorder().subscribe(
      data =>{ this.dataSource =data;
      console.log(data);
    },
    err => {
      console.error(err);
    }
    );
  }

}