import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLanguageComponent } from './card-language.component';

describe('CardLanguageComponent', () => {
  let component: CardLanguageComponent;
  let fixture: ComponentFixture<CardLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
