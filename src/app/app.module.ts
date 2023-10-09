import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeScreenComponent } from './components/welcome-screen/welcome-screen.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { MainBodyComponent } from './components/main-body/main-body.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DataProfileComponent } from './components/data-profile/data-profile.component';
import { MapperViewComponent } from './components/mapper-view/mapper-view.component';
import { MapperReviewComponent } from './components/mapper-review/mapper-review.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { UploadComponent } from './components/file-upload/upload/upload.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeScreenComponent,
    LoginScreenComponent,
    ChangePasswordComponent,
    MainBodyComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    DataProfileComponent,
    MapperViewComponent,
    MapperReviewComponent,
    FileUploadComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
