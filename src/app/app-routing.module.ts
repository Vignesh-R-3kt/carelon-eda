import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { WelcomeScreenComponent } from './components/welcome-screen/welcome-screen.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { MainBodyComponent } from './components/main-body/main-body.component';
import { HomeComponent } from './components/home/home.component';
import { DataProfileComponent } from './components/data-profile/data-profile.component';
import { MapperViewComponent } from './components/mapper-view/mapper-view.component';
import { MapperReviewComponent } from './components/mapper-review/mapper-review.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

const routes: Routes = [
  { path: "", redirectTo: "welcome", pathMatch: "full" },
  { path: "login", component: LoginScreenComponent },
  { path: "welcome", component: WelcomeScreenComponent },
  { path: "change-password", component: ChangePasswordComponent },
  {
    path: "main-body", component: MainBodyComponent, children: [
      { path: "", redirectTo: 'home', pathMatch: "full" },
      { path: "home", component: HomeComponent },
      { path: "data-profile", component: DataProfileComponent },
      { path: "data-view", component: MapperViewComponent },
      { path: "data-review", component: MapperReviewComponent },
      { path: "uploads", component: FileUploadComponent },
      { path: "**", redirectTo: "" }
    ]
  },
  { path: "**", redirectTo: "welcome" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
