import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemesterAddComponent } from './semester-add.component';

describe('SemesterAddComponent', () => {
  let component: SemesterAddComponent;
  let fixture: ComponentFixture<SemesterAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemesterAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemesterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
