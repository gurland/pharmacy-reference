import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.scss']
})
export class CardModalComponent implements OnInit {

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
