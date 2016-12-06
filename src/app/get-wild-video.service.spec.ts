/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetWildVideoService } from './get-wild-video.service';

describe('GetWildVideoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetWildVideoService]
    });
  });

  it('should ...', inject([GetWildVideoService], (service: GetWildVideoService) => {
    expect(service).toBeTruthy();
  }));
});
