import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  Quote } from '../models/quotation';
import { Identifiers } from '@angular/compiler';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs'; 
import { $ } from 'protractor';

@Injectable()
export class PurchaseorderService {
  base_url = 'http://localhost:8090/quotes';
  
  constructor(private http: HttpClient) { }

  getPurchaseorder(): Observable<Quote[]>{
    return this.http.get<Quote[]>("http://localhost:8090/quotes");
  }
  getPurchaseorders(id): Observable<Quote> {
    return this.http.get<Quote>(`${this.base_url}/${id}`);
  } 

  updatePurchaseorder(id,email,company, shippingType, Country,City, State,Postal,departure,country,city, state,postal,arrival,quantity,quantityunit,totalweight,weightunit,length,width,height,units,stackable,hazardous,insurance,incotermsunit,comment,amount){
    const quote ={
      email:email,
      company:company,
      shippingType:shippingType,
      Country:Country,
      City:City,
      State:State,
      Postal:Postal,
      departure:departure,
      country:country,
      city:city,
      state:state,
      postal:postal,
      arrival:arrival,
      quantity:quantity,
      quantityunit:quantityunit,
      totalweight:totalweight,
      weightunit:weightunit,
      length:length,
      width:width,
      height:height,
      units:units,
      stackable:stackable,
      hazardous:hazardous,
      insurance:insurance,
      incotermsunit:incotermsunit,
      comment:comment,
      amount:amount
    }
    return this.http.post(`${this.base_url}/${id}`, quote);
  }
}
