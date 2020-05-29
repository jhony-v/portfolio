import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DedicateModuleComponent } from './dedicate-module.component';

describe('DedicateModuleComponent', () => {
  let component: DedicateModuleComponent;
  let fixture: ComponentFixture<DedicateModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DedicateModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DedicateModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
