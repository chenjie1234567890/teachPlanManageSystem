import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachPlanComponent } from './teach-plan.component';

describe('TeachPlanComponent', () => {
  let component: TeachPlanComponent;
  let fixture: ComponentFixture<TeachPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
