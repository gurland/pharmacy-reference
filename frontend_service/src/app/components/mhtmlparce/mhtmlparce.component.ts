import { Component, OnInit } from '@angular/core';
import * as mhtml2html from 'mhtml2html';
import { mhtml } from './trymhtml';

@Component({
  selector: 'app-mhtmlparce',
  templateUrl: './mhtmlparce.component.html',
  styleUrls: ['./mhtmlparce.component.scss']
})
export class MhtmlparceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      let result = mhtml2html.parse(mhtml);
      console.log(result);
  }

  getFile(){
    
  }
}
