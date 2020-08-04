import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserGithub, ProjectRepository } from '../@types/interfaces';
import { Observable } from 'rxjs';


type ObservableUser = Observable<UserGithub>;
type ObservableRepositories = Observable<ProjectRepository[]>;

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  private apiGithubUser: string = 'https://api.github.com/users/jhony-24';
  private apiGithubUserRepositories : string = 'https://api.github.com/users/jhony-24/repos';
  constructor(private http: HttpClient) {}

  getUserGithub = (): ObservableUser =>{
    return <ObservableUser>this.http.get(this.apiGithubUser);
  }

  getUserRepositories = (): ObservableRepositories => {
    return <ObservableRepositories>this.http.get(this.apiGithubUserRepositories);
  }
}
