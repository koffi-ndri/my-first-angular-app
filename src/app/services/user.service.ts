import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";

const USER_API = 'http://localhost:3000/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(USER_API);
  }

}
