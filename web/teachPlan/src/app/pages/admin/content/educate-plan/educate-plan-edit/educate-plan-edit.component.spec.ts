import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducatePlanEditComponent } from './educate-plan-edit.component';

describe('EducatePlanEditComponent', () => {
  let component: EducatePlanEditComponent;
  let fixture: ComponentFixture<EducatePlanEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducatePlanEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducatePlanEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
