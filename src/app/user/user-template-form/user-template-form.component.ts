import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User, UserType } from '../../models/user';
import { ActivatedRoute, Params, Router } from '@angular/router';

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
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  toggleIsActive(object: any) {
    console.log(object)
  }

  ngOnInit() {
    this.route.params.subscribe((data: Params) => {
      this.userService.getUser(1).subscribe((data: User) => {
        this.user = data;
      })
    })
  }

  back(): void {
    this.router.navigate(['/user'])
  }

  handleSubmit(object: any) {
    console.log(object);
  }

}
