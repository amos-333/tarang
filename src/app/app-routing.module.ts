import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HexagonComponent } from './components/hexagon/hexagon.component';
import { HomeComponent } from './home/home.component';
import { PointTableComponent } from './point-table/point-table.component';
import { RulesComponent } from './rules/rules.component';
import { AdminComponent } from './admin/admin.component';
import { TerosoComponent } from './events/teroso/teroso.component';
import { NrityaComponent } from './events/nritya/nritya.component';
import { TauhiezenComponent } from './events/tauhiezen/tauhiezen.component';
import { BricsComponent } from './events/brics/brics.component';
import { MarcheComponent } from './events/marche/marche.component';
import { InquizateComponent } from './events/inquizate/inquizate.component';
import { MenadzerComponent } from './events/menadzer/menadzer.component';
import { BioscopeComponent } from './events/bioscope/bioscope.component';
import { CicadaComponent } from './events/cicada/cicada.component';
import { GrafiaComponent } from './events/grafia/grafia.component';
import { PsyNtwistsComponent } from './events/psy-ntwists/psy-ntwists.component';
import { CaptionStatersComponent } from './events/caption-staters/caption-staters.component';
import { GamingComponent } from './events/gaming/gaming.component';

const routes: Routes = [
{path:"" , component:HomeComponent},
{path:"rules" , component:RulesComponent},
{path:"point-table" , component:PointTableComponent},
{path:"hexagon" , component:HexagonComponent},
{path:"admin" , component:AdminComponent},
{path:"teroso" , component:TerosoComponent},
{path:"nritya" , component:NrityaComponent},
{path:"tauhiezen" , component:TauhiezenComponent},
{path:"brics" , component:BricsComponent},
{path:"marche" , component:MarcheComponent},
{path:"inquizate" , component:InquizateComponent},
{path:"menadzer" , component:MenadzerComponent},
{path:"bioscope" , component:BioscopeComponent},
{path:"cicada" , component:CicadaComponent},
{path:"graphica" , component:GrafiaComponent},
{path:"psy-n-twists" , component:PsyNtwistsComponent},
{path:"grafia" , component:GrafiaComponent},
{path:"caption-staters" , component:CaptionStatersComponent},
{path:"gaming" , component:GamingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
