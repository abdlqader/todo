import { TestBed } from '@angular/core/testing';

import { EditTodoService } from './edit-todo.service';

describe('EditTodoService', () => {
  let service: EditTodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditTodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
