import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPointHistoryComponent } from './card-point-history.component';

describe('CardPointHistoryComponent', () => {
  let component: CardPointHistoryComponent;
  let fixture: ComponentFixture<CardPointHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPointHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPointHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
