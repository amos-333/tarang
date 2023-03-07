import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PointTableComponent } from './point-table/point-table.component';
import { RulesComponent } from './rules/rules.component';
import { HexagonComponent } from './components/hexagon/hexagon.component';
import { TerosoComponent } from './events/teroso/teroso.component';
import { NrityaComponent } from './events/nritya/nritya.component';
import { TauhiezenComponent } from './events/tauhiezen/tauhiezen.component';
import { BricsComponent } from './events/brics/brics.component';
import { MarcheComponent } from './events/marche/marche.component';
import { InquizateComponent } from './events/inquizate/inquizate.component';
import { MenadzerComponent } from './events/menadzer/menadzer.component';
import { BioscopeComponent } from './events/bioscope/bioscope.component';
import { CicadaComponent } from './events/cicada/cicada.component';
import { GraphicaComponent } from './events/graphica/graphica.component';
import { PsyNtwistsComponent } from './events/psy-ntwists/psy-ntwists.component';
import { GrafiaComponent } from './events/grafia/grafia.component';
import { CaptionStatersComponent } from './events/caption-staters/caption-staters.component';
import { GamingComponent } from './events/gaming/gaming.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PointTableComponent,
    RulesComponent,
    HexagonComponent,
    TerosoComponent,
    NrityaComponent,
    TauhiezenComponent,
    BricsComponent,
    MarcheComponent,
    InquizateComponent,
    MenadzerComponent,
    BioscopeComponent,
    CicadaComponent,
    GraphicaComponent,
    PsyNtwistsComponent,
    GrafiaComponent,
    CaptionStatersComponent,
    GamingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
