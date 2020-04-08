import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface IProfileDataDTO {
  id: number;
  other: string;
  thing: string;
  name: string;
  login: string;
}

export interface IProfileDataSorted {
  login: string;
  id: number;
  name: string;
}

@Injectable()
export class GitService {
  constructor(private http: HttpClient) {}

  getProfile(userName: string) {
    return this.http.get(`https://api.github.com/users/${userName}`);
  }
}
