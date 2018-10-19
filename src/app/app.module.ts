import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NewcomponentComponentModule} from './newcomponent/newcomponent.module';
import { AppRoutingModule } from './app-routing.module';
import { HeroesComponent } from './heroes/heroes.component';
import {ModuleAModule} from './pages/moduleA/pages.moduleA';
import {ModuleBModule} from './pages/moduleB/pages.moduleB';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
  ],
  imports: [
    ModuleAModule,
    ModuleBModule,
    BrowserModule,
    CommonModule,
    NewcomponentComponentModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
