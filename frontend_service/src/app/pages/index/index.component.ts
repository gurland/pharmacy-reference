import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  data = [];
  text = '';

  constructor(
    private readonly commonService: CommonService,
    private readonly itemsService: ItemsService
  ) { }

  ngOnInit(): void {
    this.itemsService.itemsList.subscribe(newData => {
      this.data = newData;
    })
    this.commonService.getData().subscribe((x: any) => {
      console.log(x);
      this.text = x.UTFContent;
    });
  }
}
