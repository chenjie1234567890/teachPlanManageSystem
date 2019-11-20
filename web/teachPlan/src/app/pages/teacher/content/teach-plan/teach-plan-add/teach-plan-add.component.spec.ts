import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachPlanAddComponent } from './teach-plan-add.component';

describe('TeachPlanAddComponent', () => {
  let component: TeachPlanAddComponent;
  let fixture: ComponentFixture<TeachPlanAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachPlanAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachPlanAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
