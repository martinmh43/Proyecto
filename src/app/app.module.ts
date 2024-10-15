import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuprincipalComponent } from './components/menuprincipal/menuprincipal.component';
import { CiudadComponent } from './components/ciudad/ciudad.component';
import { VacunaComponent } from './components/vacuna/vacuna.component';
import { EnfermedadComponent } from './components/enfermedad/enfermedad.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuprincipalComponent,
    CiudadComponent,
    VacunaComponent,
    EnfermedadComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
