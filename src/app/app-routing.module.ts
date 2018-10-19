import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {routes} from './pages.routing';

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
