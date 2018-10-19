import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NewcomponentComponentModule} from './newcomponent/newcomponent.module';
import { AppRoutingModule } from './app-routing.module';
import { HeroesComponent } from './heroes/heroes.component';
import {ModuleAModule} from './pages/moduleA/pages.moduleA';
import {ModuleBModule} from './pages/moduleB/pages.moduleB';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
  ],
  imports: [
    BrowserModule,
    NewcomponentComponentModule,
    AppRoutingModule,
    ModuleAModule,
    ModuleBModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
