import { TestBed } from '@angular/core/testing';

import { UsermanagementGuard } from './usermanagement.guard';

describe('UsermanagementGuard', () => {
  let guard: UsermanagementGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UsermanagementGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
