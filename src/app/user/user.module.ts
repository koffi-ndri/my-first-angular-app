import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserService } from '../services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UserTemplateFormComponent } from './user-template-form/user-template-form.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {path: "", component: UserListComponent},
      {path: ':id', component: UserTemplateFormComponent}
    ]
  }
]

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailsComponent,
    UserTemplateFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  // always add this
  exports: [
    UserListComponent,
    UserDetailsComponent,
    UserTemplateFormComponent
  ],
  // for adding services
  providers: [
    UserService
  ]
})
export class UserModule { }
