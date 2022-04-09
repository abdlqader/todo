import { TestBed } from '@angular/core/testing';

import { FetchAllTodosService } from './fetch-all-todos.service';

describe('FetchAllTodosService', () => {
  let service: FetchAllTodosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchAllTodosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
