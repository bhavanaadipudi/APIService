import { TestBed } from '@angular/core/testing';

import { UsersdatstaService } from './usersdatsta.service';

describe('UsersdatstaService', () => {
  let service: UsersdatstaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersdatstaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
