import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserGithub, ProjectRepository } from '../@types/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  private apiGithubUser: string = 'https://api.github.com/users/jhony-24';
  private apiGithubUserRepositories : string = 'https://api.github.com/users/jhony-24/repos';
  constructor(private http: HttpClient) {}

  getUserGithub = (): Observable<UserGithub> =>{
    return <Observable<UserGithub>>this.http.get(this.apiGithubUser);
  }

  getUserRepositories = (): Observable<ProjectRepository[]> =>{
    return <Observable<ProjectRepository[]>>this.http.get(this.apiGithubUserRepositories);
  }
}
