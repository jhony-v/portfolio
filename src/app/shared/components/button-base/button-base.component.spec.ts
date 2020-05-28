import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBaseComponent } from './button-base.component';

describe('ButtonBaseComponent', () => {
  let component: ButtonBaseComponent;
  let fixture: ComponentFixture<ButtonBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
