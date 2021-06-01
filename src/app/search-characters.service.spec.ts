import { TestBed } from '@angular/core/testing';

import { SearchCharactersService } from './search-characters.service';

describe('SearchCharactersService', () => {
  let service: SearchCharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchCharactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
