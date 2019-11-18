import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducatePlanAddComponent } from './educate-plan-add.component';

describe('EducatePlanAddComponent', () => {
  let component: EducatePlanAddComponent;
  let fixture: ComponentFixture<EducatePlanAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducatePlanAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducatePlanAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
