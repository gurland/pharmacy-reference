import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import jwtDecode from 'jwt-decode';
import { ItemsService } from 'src/app/services/items.service';

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
  item = {} as any;
  fileView: 'pdf' | 'mth' | '' = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) readonly data,
    @Inject(DOCUMENT) private readonly _document: Document,
    private readonly itemsService: ItemsService,
  ) {
    console.log(data);
    this.item = data;

    if (this.item.instructuion_url) {
      if (this.item.instructuion_url.includes('.pdf')) {
        const fileUrl = this.item?.instructuion_url.replace('http://www.drlz.com.ua/ibp/lz_www.nsf/', '');
        this.fileView = 'pdf';
        this.item.fileUrl = 'https://pharmaref.online/mht2/' + fileUrl;
      } else if ('.mht') {
        this.fileView = 'mth';
        this.itemsService.getMht(this.item?.instructuion_url).subscribe((file: any) => {
          this.item.fileUrl = file.UTFContent;
        });
      }
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const container = this._document.querySelectorAll('.cdk-global-overlay-wrapper')[0];
    container.classList.add('card-info-overlay');
  }
  summarize() {
    const user = jwtDecode(localStorage.getItem('accessToken')) as any;
    console.log(user);
    const model = {
      drugId: this.item.id,
      id: user.id,
      paperCount: 300,
      text: "Amoxicillin and beta-lactamase inhibitor is good."
    }
    this.itemsService.getSummary(model).subscribe(res => {
      console.log(res);
    })
  }
}
