import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { FilterComponent } from './filter/filter.component';

export const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'filter', component: FilterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}