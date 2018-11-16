import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { IssueService } from '../../issue.service';
import { Issue } from '../../issue.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: String;
  issue: any = {};
  updateForm: FormGroup;
  constructor(private issueService: IssueService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.updateForm = this.fb.group({
      type: '',
      description: '',
      hours: '',
      unitprice: '',
      amount: ''
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.issueService.getIssueById(this.id).subscribe(res => {
        this.issue = res;
        this.updateForm.get('type').setValue(this.issue.type);
        this.updateForm.get('description').setValue(this.issue.description);
        this.updateForm.get('hours').setValue(this.issue.hours);
        this.updateForm.get('unitprice').setValue(this.issue.unitprice);
        this.updateForm.get('amount').setValue(this.issue.amount);
      });
    });
  }

  updateIssue(type, description, hours,unitprice,amount ) {
    this.issueService.updateIssue(this.id, type,description,hours,unitprice,amount ).subscribe(() => {
      this.snackBar.open('Issue updated successfully', 'OK', {
        duration: 3000
      });
    });
  }

}