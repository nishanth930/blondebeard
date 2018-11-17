import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  Invoices } from '../models/invoice';

const BASE_URL = 'http://localhost:8090/invoices'
@Injectable()
export class InvoiceService {

  constructor(private httpClient: HttpClient) { }

  getInvoices(): Observable<Invoices[]>{
    return this.httpClient.get<Invoices[]>("http://localhost:8090/invoices");
  }

}
