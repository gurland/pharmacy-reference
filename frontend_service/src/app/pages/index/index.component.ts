import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  data = [
    {
      title: 'title',
      description: 'description'
    },
    {
      title: 'title',
      description: 'description'
    },
    {
      title: 'title',
      description: 'description'
    },
    {
      title: 'title',
      description: 'description'
    }
  ];
  text = '';

  constructor(
    private readonly commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.commonService.getData().subscribe((x: any) => {
      console.log(x);
      this.text = x.UTFContent;
    });
  }
}
