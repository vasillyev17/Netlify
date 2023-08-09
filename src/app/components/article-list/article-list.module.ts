import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ArticleListComponent } from './article-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { HighlightPipe } from '../../shared/highlight.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ArticleListComponent,
    HighlightPipe
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    RouterLink,
    FormsModule,
  ]
})
export class ArticleListModule {
}
