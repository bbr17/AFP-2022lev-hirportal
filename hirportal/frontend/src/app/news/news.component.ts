import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsService } from '../services/news.service';
import { AuthService } from '../services/auth.service';
import { News } from '../models/News';
import { User } from '../models/User';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  newsList$: Observable<News[]>;
  userId: number;

  constructor(
    private newsService: NewsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.newsList$ = this.listNews();
    this.userId = this.authService.userId;
  }

  listNews(): Observable<News[]> {
    return this.newsService.listNews();
  }

  createNews() {
    this.newsList$ = this.listNews();
  }

  deleteNews(newsId: number): void {
    this.newsService
      .deleteNews(newsId)
      .subscribe(() => (this.newsList$ = this.listNews()));
  }
}
