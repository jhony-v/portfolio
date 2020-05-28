import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleViewCompactComponent } from './circle-view-compact.component';

describe('CircleViewCompactComponent', () => {
  let component: CircleViewCompactComponent;
  let fixture: ComponentFixture<CircleViewCompactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleViewCompactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleViewCompactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
