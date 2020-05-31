import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleImageComponent } from './circle-image.component';

describe('CircleImageComponent', () => {
  let component: CircleImageComponent;
  let fixture: ComponentFixture<CircleImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
