import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { debounceTime } from 'rxjs';


@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.scss']
})
export class SearchModalComponent implements OnInit, AfterViewInit {

constructor(
  @Inject(MAT_DIALOG_DATA) private readonly data,
  @Inject(DOCUMENT) private readonly _document: Document
) { }

  searchForm: FormGroup;
  searchInputControl: AbstractControl; 
  
  ngOnInit(): void {
    this.initSearchForm(this.data);
    this.listenToFromChanges();
  }

  ngAfterViewInit(): void {
    const container = this._document.querySelectorAll('.cdk-global-overlay-wrapper')[0];
    container.classList.add('search-overlay');
  }

  initSearchForm(data): void {
    this.searchForm = new FormGroup({
      input: new FormControl(data.searchInput),
      tags: new FormControl(['']),
    });
    this.searchInputControl = this.searchForm.get('input') as AbstractControl;
  }
  listenToFromChanges(): void {
    this.searchForm.valueChanges.pipe(debounceTime(200)).subscribe(newForm => {
      console.log(newForm);
    });
  }
  clearSearchInput(): void {
    this.searchInputControl.setValue('');
  }
}
