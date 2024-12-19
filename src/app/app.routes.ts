import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';
import { FilterComponent } from './filter/filter.component';
import { SitterCardComponent } from './sitter-card/sitter-card.component';
import { SitterDetailsComponent } from './sitter-details/sitter-details.component';

export const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'filter', component: FilterComponent },
  {path: 'sitters', component: SitterCardComponent},
  {path: 'sitterdetail/:name', component: SitterDetailsComponent}
];

// @NgModule({
//   declarations: [SignInComponent, FilterComponent],
//   imports: [BrowserModule, ReactiveFormsModule, RouterModule.forRoot(routes)],
//   providers: [],
//   bootstrap: [SignInComponent],
// })
export class AppModule {}
