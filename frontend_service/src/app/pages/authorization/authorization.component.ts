import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  authForm: FormGroup;
  authParam: string;
  roles: string[] = ['doctor', 'patient'];

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly userService: UserService,
    private readonly tokenService: TokenService,
    private readonly router: Router
  ) {
    this.authParam = this.activatedRoute.snapshot.paramMap.get('page');
  }

  ngOnInit(): void {
    this.generateForm();
  }

  private generateForm() {
    this.authForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });

    if (this.authParam === 'register') {
      this.authForm.addControl('isDoctor', new  FormControl(false));
    }
  }


  submitForm(): void {
    if (this.authParam === 'register') {
      this.userService.createUser(this.authForm.value).subscribe(newUserModel => {
        this.tokenService.getToken({...newUserModel, password: this.authForm.get('password').value}).subscribe((token: any) => {
          // console.log(jwtDecode(token.access_token));
          localStorage.setItem('accessToken', token.access_token);
          this.router.navigate(['/']);
        })
      });
    } else if (this.authParam === 'login') {
      this.tokenService.getToken(this.authForm.value).subscribe((token: any) => {
        localStorage.setItem('accessToken', token.access_token);
        this.router.navigate(['/']);
      })
    }
  }
}
