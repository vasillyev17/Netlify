import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../shared/article.service';
import { Article } from '../../shared/article.model';
import { take } from 'rxjs';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = [];
  filteredArticles: Article[] = [];
  searchKeyword: string = '';

  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
    this.articleService.getArticles()
      .pipe(take(1))
      .subscribe(
        data => {
          this.articles = data;
          this.filteredArticles = this.articles;
        },
        error => {
          console.error('Error fetching articles:', error);
        }
      );
  }

  filterArticles() {
    const lowerSearchKeywords = this.searchKeyword.trim().toLowerCase().split(' ');
    this.filteredArticles = this.articles.filter(article => {
      const lowerTitle = article.title.toLowerCase();
      const lowerSummary = article.summary.toLowerCase();

      return lowerSearchKeywords.some(keyword => {
        return lowerTitle.includes(keyword) || lowerSummary.includes(keyword);
      });
    });
  }
}
