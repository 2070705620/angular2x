import { TestBed } from '@angular/core/testing';

import { AbcdService } from './abcd.service';

describe('AbcdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbcdService = TestBed.get(AbcdService);
    expect(service).toBeTruthy();
  });
});
