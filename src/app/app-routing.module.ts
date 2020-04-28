import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MatchComponent } from './match/match.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
const routes: Routes = [
  {path: "", component: WelcomeComponent},
  {path: "match", component: MatchComponent},
  {path: "signIn", component: SignInComponent},
  {path: "signUp", component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
