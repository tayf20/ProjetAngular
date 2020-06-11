import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurVolunteerComponent } from './our-volunteer.component';

describe('OurVolunteerComponent', () => {
  let component: OurVolunteerComponent;
  let fixture: ComponentFixture<OurVolunteerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurVolunteerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
