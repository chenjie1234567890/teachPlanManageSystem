import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachPlanEditComponent } from './teach-plan-edit.component';

describe('TeachPlanEditComponent', () => {
  let component: TeachPlanEditComponent;
  let fixture: ComponentFixture<TeachPlanEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachPlanEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachPlanEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
