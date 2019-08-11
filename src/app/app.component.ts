import { Component, OnInit } from '@angular/core';
import { Article } from './model/articleModel';
import { ArticlesService } from './services/articles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public articles: Array<Article>;
  public loading: boolean;

  constructor(
    private articlesService: ArticlesService) {
  }

  ngOnInit(): void {
   this.articles = [];
   this.loading = false;
   this.getArticles();
  }

  private getArticles(): void {
     this.loading = true;
     this.articlesService.getArticles().subscribe( elements => this.articles = elements);
  }
}
