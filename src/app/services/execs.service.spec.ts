import { TestBed } from '@angular/core/testing';

import { ExecsService } from './execs.service';

describe('ExecsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExecsService = TestBed.get(ExecsService);
    expect(service).toBeTruthy();
  });
});
