import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HexagonComponent } from './components/hexagon/hexagon.component';
import { HomeComponent } from './home/home.component';
import { PointTableComponent } from './point-table/point-table.component';
import { RulesComponent } from './rules/rules.component';

const routes: Routes = [
{path:"" , component:HomeComponent},
{path:"rules" , component:RulesComponent},
{path:"point-table" , component:PointTableComponent},
{path:"hexagon" , component:HexagonComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
