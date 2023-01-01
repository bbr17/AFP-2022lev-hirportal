import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
import { BehaviorSubject, catchError, first, Observable, tap } from 'rxjs';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'http://localhost:3000/auth';
  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  isUserLoggedIn$ = new BehaviorSubject<boolean>(false);
  userId: number = 0;

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService,
    private router: Router
  ) {}

  register(user: Omit<User, 'id'>): Observable<User> {
    return this.http
      .post<User>(`${this.url}/register`, user, this.httpOptions)
      .pipe(
        first(),
        catchError(this.errorHandlerService.handleError<User>('register'))
      );
  }

  login(
    username: string,
    password: string
  ): Observable<{ token: string; userId: number }> {
    return this.http
      .post<User>(`${this.url}/login`, { username, password }, this.httpOptions)
      .pipe(
        first(),
        tap((tokenObject: any) => {
          this.userId = tokenObject.userId;
          localStorage.setItem('token', tokenObject.token);
          this.isUserLoggedIn$.next(true);
          this.router.navigate(['news']);
        }),
        catchError(
          this.errorHandlerService.handleError<{
            token: string;
            userId: number;
          }>('login')
        )
      );
  }
}
