import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorEditComponent } from './major-edit.component';

describe('MajorEditComponent', () => {
  let component: MajorEditComponent;
  let fixture: ComponentFixture<MajorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
