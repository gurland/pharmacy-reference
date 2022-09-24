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
  @Input() item = {} as any;
  
  constructor(
    private readonly cardDialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openCardModal(data): void {
    this.cardDialog.open(CardModalComponent, { panelClass: 'card-info-modal' });
  }

  getRandomIcon(): string {
    let icon = this.icons[Math.floor(Math.random() * this.icons.length)];
    return icon;
  }
}
