import { Component, OnInit } from '@angular/core';

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

  constructor(
  ) { }

  ngOnInit(): void {
  }
}
