import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileNameCompactComponent } from './profile-name-compact.component';

describe('ProfileNameCompactComponent', () => {
  let component: ProfileNameCompactComponent;
  let fixture: ComponentFixture<ProfileNameCompactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileNameCompactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileNameCompactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
