import { TestBed } from '@angular/core/testing';

import { BindUsernameService } from './bind-username.service';

describe('BindUsernameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BindUsernameService = TestBed.get(BindUsernameService);
    expect(service).toBeTruthy();
  });
});
