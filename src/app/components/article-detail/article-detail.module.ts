import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleDetailComponent } from './article-detail.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [ArticleDetailComponent],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class ArticleDetailModule {
}
