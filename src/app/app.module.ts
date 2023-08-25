import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { UserTemplateFormComponent } from './user-template-form/user-template-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [	
    AppComponent,
      UserTemplateFormComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
