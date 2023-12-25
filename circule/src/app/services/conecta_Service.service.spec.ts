/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Conecta_ServiceService } from './conecta_Service.service';

describe('Service: Conecta_Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Conecta_ServiceService]
    });
  });

  it('should ...', inject([Conecta_ServiceService], (service: Conecta_ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
