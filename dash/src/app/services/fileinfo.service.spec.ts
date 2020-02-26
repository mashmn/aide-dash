import { TestBed } from '@angular/core/testing';

import { FileinfoService } from './fileinfo.service';

describe('FileinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FileinfoService = TestBed.get(FileinfoService);
    expect(service).toBeTruthy();
  });
});
