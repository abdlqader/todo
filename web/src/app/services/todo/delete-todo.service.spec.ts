import { TestBed } from '@angular/core/testing';

import { DeleteTodoService } from './delete-todo.service';

describe('DeleteTodoService', () => {
  let service: DeleteTodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteTodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
