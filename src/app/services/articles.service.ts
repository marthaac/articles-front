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
    * Get stage
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

  private  fnMapArticle(data): Array<Article> {
    return data.list.map(item => new Article(data));
  }

  private processError(err): Observable<any> {
    const error = err.error.message || 'Error';
    this.notificationService.notifyIfError(error);
    return Observable.throw(err);
  }
}
