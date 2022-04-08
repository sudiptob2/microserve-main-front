import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { HandleError, HttpErrorHandler } from './http-error-handler.service';


@Injectable({ providedIn: 'root' })
export class DashboardService {

  apiUrl = environment.apiUrl;
  private handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('DashboardService');
  }

  getProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/api/products')
      .pipe(
        catchError(this.handleError('getToDo', []))
      );
  }
}
