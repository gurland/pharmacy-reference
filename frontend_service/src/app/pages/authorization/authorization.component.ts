import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  authForm: FormGroup;
  authParam: string;
  roles: string[] = ['doctor', 'patient'];
  constructor(public route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.generateForm();
    this.getAuthParameter();
  }

  generateForm() {
    this.authForm = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      role: new FormControl('', Validators.required)
    });
  }

  loginButtonClick() {
    if (this.authForm.valid) {
      console.table(this.authForm.value);
    }
  }
  getAuthParameter() {
    this.route.paramMap.subscribe(params => {
      this.authParam = params.get('param') || 'login';
    });
  }
}
