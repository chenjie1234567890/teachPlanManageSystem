import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachPlanViewComponent } from './teach-plan-view.component';

describe('TeachPlanViewComponent', () => {
  let component: TeachPlanViewComponent;
  let fixture: ComponentFixture<TeachPlanViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachPlanViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachPlanViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
