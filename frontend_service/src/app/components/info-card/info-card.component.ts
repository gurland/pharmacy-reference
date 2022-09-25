import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardModalComponent } from './card-modal/card-modal.component';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {

  icons: string[] = ['vaccines', 'bloodtype', 'masks', 'sanitizer', 'medical_information', 'medication'];
  randIcon = this.icons[Math.floor(Math.random() * this.icons.length)];
  @Input() item = {} as any;
  
  constructor(
    private readonly cardDialog: MatDialog
  ) {
    this.randIcon = this.icons[Math.floor(Math.random() * this.icons.length)];
  }

  ngOnInit(): void {
  }

  openCardModal(data): void {
    this.cardDialog.open(CardModalComponent, { data, panelClass: 'card-info-modal' });
  }
}
