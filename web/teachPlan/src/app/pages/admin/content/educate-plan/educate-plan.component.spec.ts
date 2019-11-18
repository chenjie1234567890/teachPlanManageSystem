import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducatePlanComponent } from './educate-plan.component';

describe('EducatePlanComponent', () => {
  let component: EducatePlanComponent;
  let fixture: ComponentFixture<EducatePlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducatePlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducatePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
