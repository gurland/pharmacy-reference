import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { TokenService } from 'src/app/services/token.service';
import { MatDialog } from '@angular/material/dialog';
import { User } from './userInterface';
import { ShoppingListComponent } from 'src/app/shopping-list/shopping-list.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User;
  constructor(
    private readonly tokenService: TokenService,
    private readonly dialog: MatDialog
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

  changeProfileData(field: string) {

  }

  openShoppingList() {
    const dialogRef = this.dialog.open(ShoppingListComponent, {
      height: '80vh', width: '80vw'
    });

  }
}
