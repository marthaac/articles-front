import { Component, OnInit } from '@angular/core';
import { Article } from './model/articleModel';
import { ArticlesService } from './services/articles.service';
import { finalize } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public articles: Array<Article>;
  public loading: boolean;

  constructor(
    private articlesService: ArticlesService,
    public dialog: MatDialog) {
  }

  ngOnInit(): void {
   this.articles = [];
   this.loading = false;
   this.getArticles();
  }

  private getArticles(): void {
     this.loading = true;
     this.articlesService.getArticles().pipe(
      finalize(() => this.loading = false)
     ).subscribe( elements => this.articles = elements);
  }

  public delete(id: string): void {
    this.articlesService.deleteArticles(id).subscribe(result => this.getArticles());    
  }

  public openUrl(article: Article): void {
    const url = article.storyUrl || article.url;
    window.open(url, '_blank');
  }

  
  openConfirmationDialog(id: string, event): void {
    event.stopPropagation();
    const dialogRef = this.dialog.open(DeleteConfirmationComponent, {
      width: '250px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.delete(id);
      }
    });
  }
}
