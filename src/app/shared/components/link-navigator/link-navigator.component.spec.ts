import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkNavigatorComponent } from './link-navigator.component';

describe('LinkNavigatorComponent', () => {
  let component: LinkNavigatorComponent;
  let fixture: ComponentFixture<LinkNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
