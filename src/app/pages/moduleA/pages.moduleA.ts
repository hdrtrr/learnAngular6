import { NgModule } from '@angular/core';
import {ModuleAPageAComponent} from './module-a-page-a/module-a-page-a.component';
import {HeroesNewComponent} from './heroes-new/heroes-new.component';
import {AppComponent} from '../../app.component';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    ModuleAPageAComponent,
    HeroesNewComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
  ],
  providers: [],
})
export class ModuleAModule { }
