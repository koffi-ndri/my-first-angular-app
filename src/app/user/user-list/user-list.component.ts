import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{

  users!: User[];
  constructor(private userService: UserService){}

  handleRemove(event: User){
    this.users = this.users.filter((user: User) => {
      return user.id !== event.id
    });
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: User[]) => {
      console.log(data);
      this.users = data
    });
  }
}
