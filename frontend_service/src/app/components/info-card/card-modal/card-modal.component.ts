import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.scss']
})
export class CardModalComponent implements OnInit {

  data1 = {
    dragName: 'dragName',
    activeSubstance: 'abrakadabra',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
    book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 
    1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
    PageMaker including versions of Lorem Ipsum.`
  }

constructor(
  @Inject(MAT_DIALOG_DATA) private readonly data,
  @Inject(DOCUMENT) private readonly _document: Document
) { }

  ngOnInit(): void {
  
  }

  ngAfterViewInit(): void {
    const container = this._document.querySelectorAll('.cdk-global-overlay-wrapper')[0];
    container.classList.add('card-info-overlay');
  }

  
}
