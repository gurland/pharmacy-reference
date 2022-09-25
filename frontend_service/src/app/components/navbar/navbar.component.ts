import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItemsService } from 'src/app/services/items.service';

import { Router } from '@angular/router'
import { SearchModalComponent } from './search-modal/search-modal.component';
import { ShoppingCartModalComponent } from './shopping-cart-modal/shopping-cart-modal.component';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  searchInput = '';
  user;

  constructor(
    private readonly searchDialog: MatDialog,
    private readonly itemsService: ItemsService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('accessToken')) {
      this.user = jwtDecode(localStorage.getItem('accessToken'));

    }
    this.itemsService.getShoppingList().subscribe((count: any) => this.itemsService.currentShoppingList = count.length);
  }

  openSearchModal(): void {
    const dialogRef = this.searchDialog.open(SearchModalComponent, {
      data: {
        searchInput: this.searchInput
      },
      panelClass: 'search-modal'
    });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(result);
    // });
  }

  shoppingCart(): void {
    this.searchDialog.open(ShoppingCartModalComponent);
  }

  search(value): void {
    this.itemsService.getItems(value.target.value).subscribe(items => {
      this.itemsService.itemsList.next(items);
    })
  } 
}
