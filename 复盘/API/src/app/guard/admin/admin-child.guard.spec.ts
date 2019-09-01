import { TestBed, async, inject } from '@angular/core/testing';

import { AdminChildGuard } from './admin-child.guard';

describe('AdminChildGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminChildGuard]
    });
  });

  it('should ...', inject([AdminChildGuard], (guard: AdminChildGuard) => {
    expect(guard).toBeTruthy();
  }));
});
