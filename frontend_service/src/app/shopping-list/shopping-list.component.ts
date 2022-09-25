import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';;
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

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
    @Inject(MAT_DIALOG_DATA) public list: any
  ) { }

  ngOnInit(): void {
  }

}
