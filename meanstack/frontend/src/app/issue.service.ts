import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getIssues() {
    return this.http.get(`${this.uri}/issues`);
  }

  getIssueById(id) {
    return this.http.get(`${this.uri}/issues/${id}`);
  }

  addIssue(type, description, hours, unitprice,amount) {
    const issue = {
      type: type,
      description: description,
      hours: hours,
      unitprice: unitprice,
      amount:amount
    };
    return this.http.post(`${this.uri}/issues/add`, issue);
  }

  updateIssue(id, type, description, hours, unitprice,amount) {
    const issue = {
      type: type,
      description: description,
      hours: hours,
      unitprice: unitprice,
      amount:amount
    };
    return this.http.post(`${this.uri}/issues/update/${id}`, issue);
  }

  deleteIssue(id) {
    return this.http.get(`${this.uri}/issues/delete/${id}`);
  }
}