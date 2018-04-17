import { TestBed, inject } from '@angular/core/testing';

import { GetLogsService } from './get-logs.service';

describe('GetLogsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetLogsService]
    });
  });

  it('should be created', inject([GetLogsService], (service: GetLogsService) => {
    expect(service).toBeTruthy();
  }));
});
