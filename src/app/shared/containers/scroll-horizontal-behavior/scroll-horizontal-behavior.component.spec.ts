import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollHorizontalBehaviorComponent } from './scroll-horizontal-behavior.component';

describe('ScrollHorizontalBehaviorComponent', () => {
  let component: ScrollHorizontalBehaviorComponent;
  let fixture: ComponentFixture<ScrollHorizontalBehaviorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollHorizontalBehaviorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollHorizontalBehaviorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
