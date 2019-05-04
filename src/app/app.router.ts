import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './shopping/home/home.component';
import {HelloworldComponent} from './helloworld.component';
import {NotFoundComponent} from './common/pages/not-found.component';

const routes: Routes = [{
  path: '', component: HomeComponent
}, {
  path: 'hello', component: HelloworldComponent
}, {
  path: '**', component: NotFoundComponent
}];

const routesModule: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);

export {routesModule};
