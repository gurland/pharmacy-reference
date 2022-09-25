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

  constructor(
    public readonly itemsService: ItemsService
  ) { }

  ngOnInit(): void {
    this.fetchData();
  }

  addNewItem() {
    this.itemsService.createShoppingList().subscribe(res => {
      console.log(res);
      this.fetchData();
    })
  }

  select(id: number) {
    this.itemsService.currentShoppingList = id;
  }

  fetchData() {
    this.itemsService.getShoppingList().subscribe(data => {
      this.data = data;
    });
  }
}
