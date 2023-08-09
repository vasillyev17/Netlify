import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Article } from './article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articlesUrl = 'https://api.spaceflightnewsapi.net/v3/articles';
  private currentArticleSubject: BehaviorSubject<Article> = new BehaviorSubject<Article>({
    id: 0,
    updatedAt: '',
    title: '',
    summary: '',
    newsSite: '',
    url: '',
    imageUrl: '',
    publishedAt: ''
  });
  private searchKeyword: string = '';

  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.articlesUrl);
  }

  getArticleById(articleId: number): Observable<Article> {
    return this.http.get<Article>(`${this.articlesUrl}/${articleId}`);
  }
}
