import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorAddComponent } from './major-add.component';

describe('MajorAddComponent', () => {
  let component: MajorAddComponent;
  let fixture: ComponentFixture<MajorAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
