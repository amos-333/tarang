import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RulesComponent } from './rules/rules.component';

const routes: Routes = [
{path:"" , component:HomeComponent},
{path:"rules" , component:RulesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
