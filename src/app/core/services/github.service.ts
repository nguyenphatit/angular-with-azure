import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { GithubEntity } from '../models/github.entity';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient: HttpClient) { }

  getGithubRepos(username: string): Observable<GithubEntity> {
    return this.httpClient.get<GithubEntity>(`https://api.github.com/users/${username}`).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error('An error occurred:', error.status, error.error);
    }

    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
