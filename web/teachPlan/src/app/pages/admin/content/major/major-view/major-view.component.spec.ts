import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorViewComponent } from './major-view.component';

describe('MajorViewComponent', () => {
  let component: MajorViewComponent;
  let fixture: ComponentFixture<MajorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
