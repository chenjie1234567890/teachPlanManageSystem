import { TestBed } from '@angular/core/testing';

import { EducatePlanService } from './educate-plan.service';

describe('EducatePlanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EducatePlanService = TestBed.get(EducatePlanService);
    expect(service).toBeTruthy();
  });
});
