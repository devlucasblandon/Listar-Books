/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpErrorInterceptorServiceService } from './HttpErrorInterceptor.service';
import { ToastrModule } from 'ngx-toastr';

describe('Service: HttpErrorInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpErrorInterceptorServiceService],
      imports: [ToastrModule.forRoot()],
    });
  });

  it('should ...', inject([HttpErrorInterceptorServiceService], (service: HttpErrorInterceptorServiceService) => {
    expect(service).toBeTruthy();
  }));
});
