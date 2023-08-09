import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';

const routes: Routes = [
  {
    path: 'articles',
    component: ArticleListComponent,
    loadChildren: () => import('./components/article-list/article-list.module').then(m => m.ArticleListModule)
  },
  {
    path: 'articles/:id',
    component: ArticleDetailComponent,
    loadChildren: () => import('./components/article-detail/article-detail.module').then(m => m.ArticleDetailModule)
  },
  {path: '', redirectTo: 'articles', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

