import { LoginService } from './services/login.service';

import { LoginComponent } from './login/login.component';
import { UserFormComponent } from './user-form/user-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { GithubComponent } from './github/github.component';
import { UrbanComponent } from './urban/urban.component';
import { GlosbeComponent } from './glosbe/glosbe.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { AuthguardService } from './services/authguard.service';


const roots = [
  {path : '' , component : HomeComponent,canActivate : [AuthguardService]},
  {path: 'admin' , component : AdminComponent , canActivate : [AuthguardService]},
  {path: 'register' , component : RegisterComponent},
  {path : '**' , component : NotfoundComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    LoginComponent,
    PostsComponent,
    GithubComponent,
    UrbanComponent,
    GlosbeComponent,
    HomeComponent,
    HeaderComponent,
    NotfoundComponent,
    AdminComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(roots),
  ],
  providers: [
    AuthguardService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
  