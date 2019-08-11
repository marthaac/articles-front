import { Injectable } from '@angular/core';
import { AppConfig } from '../app.config';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { NotificationService } from 'src/app/services/notification.service';
import { Article } from '../model/articleModel';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private baseUrl: string;
  constructor(
    private httpClient: HttpClient,
    private notificationService: NotificationService) {
    this.baseUrl = AppConfig.baseUrl;
  }

   /*
    * Get articles
    *
    * @returns {Observable<any>}
    */
  public getArticles(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/articles`)
      .pipe(catchError((err: HttpErrorResponse) => {
        return this.processError(err);
      }), map(data => this.fnMapArticle(data))
      );
  }

    /*
    * Delete article
    *
    * @returns {Observable<any>}
    */
   public deleteArticles(id: string): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/articles/${id}`)
      .pipe(catchError((err: HttpErrorResponse) => {
        return this.processError(err);
      }));
  }

  private  fnMapArticle(data): Array<Article> {
    return data.map(item => new Article(item));
  }

  private processError(err): Observable<any> {
    const error = err.error.message || 'Error';
    this.notificationService.notifyIfError(error);
    return Observable.throw(err);
  }
}
