import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MhtmlparceComponent } from './mhtmlparce.component';

describe('MhtmlparceComponent', () => {
  let component: MhtmlparceComponent;
  let fixture: ComponentFixture<MhtmlparceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MhtmlparceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MhtmlparceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
