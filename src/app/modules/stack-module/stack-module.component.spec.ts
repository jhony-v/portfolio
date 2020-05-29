import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackModuleComponent } from './stack-module.component';

describe('StackModuleComponent', () => {
  let component: StackModuleComponent;
  let fixture: ComponentFixture<StackModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
