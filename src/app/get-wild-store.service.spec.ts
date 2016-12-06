/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetWildStoreService } from './get-wild-store.service';

describe('GetWildStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetWildStoreService]
    });
  });

  it('should ...', inject([GetWildStoreService], (service: GetWildStoreService) => {
    expect(service).toBeTruthy();
  }));
});
