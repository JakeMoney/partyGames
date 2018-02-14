import { TestBed, inject } from '@angular/core/testing';

import { CreateRoomService } from './create-room.service';

describe('CreateRoomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateRoomService]
    });
  });

  it('should be created', inject([CreateRoomService], (service: CreateRoomService) => {
    expect(service).toBeTruthy();
  }));
});
