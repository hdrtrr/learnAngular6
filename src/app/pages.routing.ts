import {HeroesComponent} from './heroes/heroes.component';
import {NewcomponentComponent} from './newcomponent/newcomponent.component';
import {ModuleAPageAComponent} from './pages/moduleA/module-a-page-a/module-a-page-a.component';
import {ModuleBPageAComponent} from './pages/moduleB/module-b-page-a/module-b-page-a.component';
import {HeroesNewComponent} from './pages/moduleA/heroes-new/heroes-new.component';


export const routes = [
  {path: 'heroes', component: HeroesComponent},
  {path: 'ModuleAPageA', component: ModuleAPageAComponent},
  {path: 'ModuleAPageB', component: ModuleBPageAComponent},
  {path: 'newcomponent', component: NewcomponentComponent},
  {path: 'HeroesNew', component: HeroesNewComponent},
];
