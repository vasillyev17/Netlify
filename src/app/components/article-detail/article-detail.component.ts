import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../shared/article.service';
import { Article } from '../../shared/article.model';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})

export class ArticleDetailComponent implements OnInit {
  currentArticle: Article | undefined;

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const rawArticleId = params['id'];
      const articleId = +rawArticleId;
      this.articleService.getArticleById(articleId).subscribe(article => {
        this.currentArticle = article;
      });
    });
  }
}
