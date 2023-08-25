import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User, UserType } from '../models/user';

@Component({
  selector: 'app-user-template-form',
  templateUrl: './user-template-form.component.html',
  styleUrls: ['./user-template-form.component.css']
})
export class UserTemplateFormComponent implements OnInit {
  user!: User;
  userType: UserType[] = [
    {
      key: 1,
      value: "admin"
    },
    {
      key: 2,
      value: "manager"
    },
    {
      key: 3,
      value: "user"
    }
  ]
  constructor(private userService: UserService) { }

  toggleIsActive(object: any){
    console.log(object)
  }

  ngOnInit() {
    this.userService.getUser(1).subscribe((data: User) => {
      this.user = data;
    })
  }

}
