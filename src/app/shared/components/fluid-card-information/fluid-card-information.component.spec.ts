import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FluidCardInformationComponent } from './fluid-card-information.component';

describe('FluidCardInformationComponent', () => {
  let component: FluidCardInformationComponent;
  let fixture: ComponentFixture<FluidCardInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluidCardInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluidCardInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
