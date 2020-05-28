import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLinksNavigatorComponent } from './list-links-navigator.component';

describe('ListLinksNavigatorComponent', () => {
  let component: ListLinksNavigatorComponent;
  let fixture: ComponentFixture<ListLinksNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLinksNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLinksNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
