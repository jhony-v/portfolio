import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatableFadeFromBottomComponent } from './animatable-fade-from-bottom.component';

describe('AnimatableFadeFromBottomComponent', () => {
  let component: AnimatableFadeFromBottomComponent;
  let fixture: ComponentFixture<AnimatableFadeFromBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatableFadeFromBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatableFadeFromBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
