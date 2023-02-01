import { TestBed } from '@angular/core/testing';

import { LocalStoragesmanagementServiceService } from './local-storagesmanagement-service.service';

describe('LocalStoragesmanagementServiceService', () => {
  let service: LocalStoragesmanagementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStoragesmanagementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
