import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { SearchModalComponent } from './search-modal/search-modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  searchForm;

  constructor(
    private readonly searchDialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openSearchModal(): void {
    this.searchDialog.open(SearchModalComponent, {
      data: {
        searchInput: '123'
      },
      panelClass: 'search-modal'
    });
  }
}
