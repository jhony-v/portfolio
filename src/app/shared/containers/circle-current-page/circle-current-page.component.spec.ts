import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleCurrentPageComponent } from './circle-current-page.component';

describe('CircleCurrentPageComponent', () => {
  let component: CircleCurrentPageComponent;
  let fixture: ComponentFixture<CircleCurrentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleCurrentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleCurrentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
