import { TestBed } from '@angular/core/testing';

import { GroupActivitiesService } from './group-activities.service';

describe('GroupActivitiesService', () => {
  let service: GroupActivitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupActivitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
