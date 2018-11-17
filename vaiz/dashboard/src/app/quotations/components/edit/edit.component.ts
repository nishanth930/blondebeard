import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormsModule} from '@angular/forms';


import { Injectable, ErrorHandler } from '@angular/core';
import { QuotationService } from '../../services/quotation.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { InvoiceListingComponent } from 'src/app/invoices/components/invoice-listing/invoice-listing.component';

import { Quote1 } from '../../models/quote1';
import { Quote } from '../../models/quotation';
import { NgForm, FormControl, ReactiveFormsModule } from '@angular/forms'; 



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  quoteForm: FormGroup;
  id: String;
  private quote: Quote;
  
  constructor(
    private quotationService: QuotationService,
     private router: Router,
      private route: ActivatedRoute, 
       private fb: FormBuilder,
      
       ) {
  
  }

    
  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.id=params.id;
      this.quotationService.getQuotes(this.id).subscribe(res =>{
        this.quote =res;
    
        this.quoteForm.get('consignee').setValue(this.quote.consignee);
        this.quoteForm.get('shippingType').setValue(this.quote.shippingType);
        this.quoteForm.get('Country').setValue(this.quote.Country);
        this.quoteForm.get('City').setValue(this.quote.City);
        this.quoteForm.get('State').setValue(this.quote.State);
        this.quoteForm.get('Postal').setValue(this.quote.Postal);
        this.quoteForm.get('departure').setValue(this.quote.departure);
        this.quoteForm.get('country').setValue(this.quote.country);
        this.quoteForm.get('city').setValue(this.quote.city);
        this.quoteForm.get('state').setValue(this.quote.state);
        this.quoteForm.get('postal').setValue(this.quote.postal);
        this.quoteForm.get('arrival').setValue(this.quote.arrival);
        this.quoteForm.get('quantity').setValue(this.quote.quantity);
        this.quoteForm.get('quantityunit').setValue(this.quote.quantityunit);
        this.quoteForm.get('totalweight').setValue(this.quote.totalweight);
        this.quoteForm.get('weightunit').setValue(this.quote.weightunit);
        this.quoteForm.get('length').setValue(this.quote.length);
        this.quoteForm.get('width').setValue(this.quote.width);
        this.quoteForm.get('height').setValue(this.quote.height);
        this.quoteForm.get('units').setValue(this.quote.units);
        this.quoteForm.get('stackable').setValue(this.quote.stackable);
        this.quoteForm.get('hazardous').setValue(this.quote.hazardous);
        this.quoteForm.get('insurance').setValue(this.quote.insurance);
        this.quoteForm.get('incotermsunit').setValue(this.quote.incotermsunit);
        this.quoteForm.get('comment').setValue(this.quote.comment);
        this.quoteForm.get('amount').setValue(this.quote.amount);
        
      })
    })
    this.createForm();
  };
  updateQuote(consignee,shippingType, Country,City, State,Postal,departure,country,city, state,postal,arrival,quantity,quantityunit,totalweight,weightunit,length,width,height,units,stackable,hazardous,insurance,incotermsunit,comment,amount ) {
    this.quotationService.updateQuote(this.id,consignee,shippingType, Country,City, State,Postal,departure,country,city, state,postal,arrival,quantity,quantityunit,totalweight,weightunit,length,width,height,units,stackable,hazardous,insurance,incotermsunit,comment,amount ).subscribe(() => {
    this.router.navigate(['dashboard','quotations']);
    });
  }
  
  private createForm() {
    this.quoteForm = this.fb.group({
      consignee:'',
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
      amount:''
    })
  }
  private setQuoteToForm() {
    this.route.params
    .subscribe(params => {
      let id = params['id'];
      if(!id) {
        return;
      }
        this.quotationService.getQuotes(id)
        .subscribe(quote => {
        this.quote = quote;
        this.quoteForm.patchValue(this.quote);
        });
        
      })
      
    }
    
 
  }
