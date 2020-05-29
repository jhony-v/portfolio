import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryModuleComponent } from './history-module.component';

describe('HistoryModuleComponent', () => {
  let component: HistoryModuleComponent;
  let fixture: ComponentFixture<HistoryModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
