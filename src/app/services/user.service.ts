import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): User[] {
    return [
      {
        id: 1,
        name: "Koffi",
        email: "koffi@gmail.com"
      },
      {
        id: 2,
        name: "Andrew",
        email: "andrew@gmail.com"
      },
      {
        id: 3,
        name: "John",
        email: "john@gmail.com"
      }
    ]
  }

}
