import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItemsService } from 'src/app/services/items.service';

import { Router } from '@angular/router'
import { SearchModalComponent } from './search-modal/search-modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  searchInput = '';

  constructor(
    private readonly searchDialog: MatDialog,
    private readonly itemsService: ItemsService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {}

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

  search(value): void {
    this.itemsService.getItems(value.target.value).subscribe(items => {
      this.itemsService.itemsList.next(items);
    })
  } 
}
