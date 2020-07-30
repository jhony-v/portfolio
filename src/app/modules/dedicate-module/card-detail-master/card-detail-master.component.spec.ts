import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailMasterComponent } from './card-detail-master.component';

describe('CardDetailMasterComponent', () => {
  let component: CardDetailMasterComponent;
  let fixture: ComponentFixture<CardDetailMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDetailMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
