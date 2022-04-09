import { TestBed } from '@angular/core/testing';

import { BaseLoggedRequestService } from './base-logged-request.service';

describe('BaseLoggedRequestService', () => {
  let service: BaseLoggedRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseLoggedRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
