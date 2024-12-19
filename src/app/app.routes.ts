
import { Routes } from '@angular/router';;
import { SignInComponent } from './sign-in/sign-in.component';
import { FilterComponent } from './filter/filter.component';
import { SitterCardComponent } from './sitter-card/sitter-card.component';
import { SitterDetailsComponent } from './sitter-details/sitter-details.component';
import { PetSitterSignupComponent } from './pet-sitter-signup/pet-sitter-signup.component';

export const routes: Routes = [
  { path: 'usersignin', component: SignInComponent },
  { path: 'filter', component: FilterComponent },
  {path: 'sitters', component: SitterCardComponent},
  {path: 'sitterdetail/:name', component: SitterDetailsComponent},
  {path: 'petsittersignup', component: PetSitterSignupComponent}
];

// @NgModule({
//   declarations: [SignInComponent, FilterComponent],
//   imports: [BrowserModule, ReactiveFormsModule, RouterModule.forRoot(routes)],
//   providers: [],
//   bootstrap: [SignInComponent],
// })
export class AppModule {}
