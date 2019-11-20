import { TestBed } from '@angular/core/testing';

import { TeachPlanService } from './teach-plan.service';

describe('TeachPlanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeachPlanService = TestBed.get(TeachPlanService);
    expect(service).toBeTruthy();
  });
});
