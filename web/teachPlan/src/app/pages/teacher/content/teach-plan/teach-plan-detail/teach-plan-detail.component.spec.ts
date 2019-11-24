import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachPlanDetailComponent } from './teach-plan-detail.component';

describe('TeachPlanDetailComponent', () => {
  let component: TeachPlanDetailComponent;
  let fixture: ComponentFixture<TeachPlanDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachPlanDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachPlanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
