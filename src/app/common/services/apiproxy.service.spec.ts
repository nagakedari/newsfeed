import { TestBed, inject } from '@angular/core/testing';

import { ApiproxyService } from './apiproxy.service';

describe('ApiproxyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiproxyService]
    });
  });

  it('should be created', inject([ApiproxyService], (service: ApiproxyService) => {
    expect(service).toBeTruthy();
  }));
});
