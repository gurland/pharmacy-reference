import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-shopping-cart-modal',
  templateUrl: './shopping-cart-modal.component.html',
  styleUrls: ['./shopping-cart-modal.component.scss']
})
export class ShoppingCartModalComponent implements OnInit {
  data = [] as any;
  shoppingListCount = 0;
  currentData = {} as any;

  constructor(
    public readonly itemsService: ItemsService
  ) { }

  ngOnInit(): void {
    this.fetchData();
  }

  addNewItem() {
    this.itemsService.createShoppingList().subscribe(res => {
      this.fetchData();
    })
  }

  select(id: number) {
    this.itemsService.currentShoppingList = id;
    this.currentData = this.data[id-1];
  }

  fetchData() {
    this.itemsService.getShoppingList().subscribe(data => {
      this.data = data;
      console.log(this.data);
      this.select(this.itemsService.currentShoppingList);
    });
  }
}
