import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LisChildComponent } from './lis-child.component';

describe('LisChildComponent', () => {
  let component: LisChildComponent;
  let fixture: ComponentFixture<LisChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LisChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LisChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
