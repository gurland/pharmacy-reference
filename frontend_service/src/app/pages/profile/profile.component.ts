import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private readonly tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.tokenService.validateToken().subscribe(x => console.log(x));
  }

}
