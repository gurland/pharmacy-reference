import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { TokenService } from 'src/app/services/token.service';
import { User } from './userInterface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User;
  data = [
    {
      dragName: 'dragName1',
      description: 'Description Description'
    },
    {
      dragName: 'dragName2',
      description: 'Description Description'
    },
    {
      dragName: 'dragName3',
      description: 'Description Description'
    },
  ]
  constructor(
    private readonly tokenService: TokenService,
  ) { }

  ngOnInit(): void {
    this.tokenService.validateToken().subscribe(x => console.log(x));
    this.getUser();
  }

  getUser() {
    let token = localStorage.getItem('accessToken');
    this.user = jwtDecode(token);
    console.table(this.user);
  }

  changeProfileData(field: string){
    
  }
}
