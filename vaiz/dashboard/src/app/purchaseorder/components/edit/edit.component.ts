import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormsModule} from '@angular/forms';


import { Injectable, ErrorHandler } from '@angular/core';
import { PurchaseorderService } from '../../services/purchaseorder.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { InvoiceListingComponent } from 'src/app/invoices/components/invoice-listing/invoice-listing.component';
import { Quote  } from '../../models/quotation';
import { NgForm, FormControl, ReactiveFormsModule } from '@angular/forms'; 



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  poForm: FormGroup;
  id: String;
  private quote: Quote;
  PurchaseorderService: any;
  
  constructor(
    private purchaseorderService: PurchaseorderService,
     private router: Router,
      private route: ActivatedRoute, 
       private fb: FormBuilder,
      
       ) {
  
  }

    
  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.id=params.id;
      this.purchaseorderService.getPurchaseorders(this.id).subscribe(res =>{
        this.quote =res;
        this.poForm.get('email').setValue(this.quote.email);
        this.poForm.get('company').setValue(this.quote.company);
        this.poForm.get('shippingType').setValue(this.quote.shippingType);
        this.poForm.get('Country').setValue(this.quote.Country);
        this.poForm.get('City').setValue(this.quote.City);
        this.poForm.get('State').setValue(this.quote.State);
        this.poForm.get('Postal').setValue(this.quote.Postal);
        this.poForm.get('departure').setValue(this.quote.departure);
        this.poForm.get('country').setValue(this.quote.country);
        this.poForm.get('city').setValue(this.quote.city);
        this.poForm.get('state').setValue(this.quote.state);
        this.poForm.get('postal').setValue(this.quote.postal);
        this.poForm.get('arrival').setValue(this.quote.arrival);
        this.poForm.get('quantity').setValue(this.quote.quantity);
        this.poForm.get('quantityunit').setValue(this.quote.quantityunit);
        this.poForm.get('totalweight').setValue(this.quote.totalweight);
        this.poForm.get('weightunit').setValue(this.quote.weightunit);
        this.poForm.get('length').setValue(this.quote.length);
        this.poForm.get('width').setValue(this.quote.width);
        this.poForm.get('height').setValue(this.quote.height);
        this.poForm.get('units').setValue(this.quote.units);
        this.poForm.get('stackable').setValue(this.quote.stackable);
        this.poForm.get('hazardous').setValue(this.quote.hazardous);
        this.poForm.get('insurance').setValue(this.quote.insurance);
        this.poForm.get('incotermsunit').setValue(this.quote.incotermsunit);
        this.poForm.get('comment').setValue(this.quote.comment);
        this.poForm.get('taxes').setValue(this.quote.taxes);
        this.poForm.get('amount').setValue(this.quote.amount);
        
      })
    })
    this.createForm();
  };
  updatePurchaseorder(email,company,shippingType, Country,City, State,Postal,departure,country,city, state,postal,arrival,quantity,quantityunit,totalweight,weightunit,length,width,height,units,stackable,hazardous,insurance,incotermsunit,comment,taxes,amount ) {
    this.PurchaseorderService.updatePurchaseorder(this.id,email,company,shippingType, Country,City, State,Postal,departure,country,city, state,postal,arrival,quantity,quantityunit,totalweight,weightunit,length,width,height,units,stackable,hazardous,insurance,incotermsunit,comment,taxes,amount ).subscribe(() => {
    this.router.navigate(['dashboard','purchaseorder']);
    });
  }
  
  private createForm() {
    this.poForm = this.fb.group({
      email:'',
      company:'',
      shippingType:'',
      Country:'',
      City:'',
      State:'',
      Postal:'',
      departure:'',
      country:'',
      city:'',
      state:'',
      postal:'',
      arrival:'',
      quantity:'',
      quantityunit:'',
      totalweight:'',
      weightunit:'',
      length:'',
      width:'',
      height:'',
      units:'',
      stackable:'',
      hazardous:'',
      insurance:'',
      incotermsunit:'',
      comment:'',
      taxes:'',
      amount:'',
      
    })
  }
  private setQuoteToForm() {
    this.route.params
    .subscribe(params => {
      let id = params['id'];
      if(!id) {
        return;
      }
        this.PurchaseorderService.getPurchaseorder(id)
        .subscribe(quote => {
        this.quote = quote;
        this.poForm.patchValue(this.quote);
        });
        
      })
      
    }
    
 
  }
