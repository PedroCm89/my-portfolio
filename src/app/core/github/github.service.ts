import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private readonly url = 'https://api.github.com/users/PedroCm89/repos';

  constructor( private httpClient: HttpClient) {

   }

   LoadRepos =()=>this.httpClient.get(`${this.url}`);
}
