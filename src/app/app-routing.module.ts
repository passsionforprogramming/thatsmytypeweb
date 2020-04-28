import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MatchComponent } from './match/match.component';
import { SignInComponent } from './sign-in/sign-in.component';
const routes: Routes = [
  {path: "", component: WelcomeComponent},
  {path: "match", component: MatchComponent},
  {path: "signIn", component: SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
