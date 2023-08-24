import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserService } from '../services/user.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    UserListComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  // always add this
  exports: [
    UserListComponent,
    UserDetailsComponent
  ],
  // for adding services
  providers: [
    UserService
  ]
})
export class UserModule { }
