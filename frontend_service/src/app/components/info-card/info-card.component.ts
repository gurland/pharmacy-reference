import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardModalComponent } from './card-modal/card-modal.component';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {

  @Input() item = {} as any;

  constructor(
    private readonly cardDialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openCardModal(data): void {
    this.cardDialog.open(CardModalComponent, {panelClass: 'card-info-modal'});
  }
}
