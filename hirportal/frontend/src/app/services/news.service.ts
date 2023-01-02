import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorHandlerService } from './error-handler.service';
import { Observable } from 'rxjs';
import { catchError, first } from 'rxjs/operators';
import { User } from '../models/User';
import { News } from '../models/News';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private url = 'http://localhost:3000/news';
  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService
  ) {}

  listNews(): Observable<News[]> {
    return this.http
      .get<News[]>(this.url, { responseType: 'json' })
      .pipe(
        catchError(this.errorHandlerService.handleError<News[]>('listNews', []))
      );
  }

  createNews(formData: News): Observable<News> {
    return this.http
      .post<News>(
        this.url,
        {
          title: formData.title,
          content: formData.content,
        },
        this.httpOptions
      )
      .pipe(
        catchError(this.errorHandlerService.handleError<News>('createNews'))
      );
  }

  deleteNews(newsId: number): Observable<{}> {
    return this.http
      .delete<News>(`${this.url}/${newsId}`, this.httpOptions)
      .pipe(
        first(),
        catchError(this.errorHandlerService.handleError<News>('deleteNews'))
      );
  }
}
