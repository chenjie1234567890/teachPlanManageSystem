import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducatePlanViewComponent } from './educate-plan-view.component';

describe('EducatePlanViewComponent', () => {
  let component: EducatePlanViewComponent;
  let fixture: ComponentFixture<EducatePlanViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducatePlanViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducatePlanViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
