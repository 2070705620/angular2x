import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './shopping/home/home.component';
import {HelloworldComponent} from './helloworld.component';
import {NotFoundComponent} from './common/pages/not-found.component';
import {ProductComponent} from './shopping/product/product.component';
import {DescriptionComponent} from './shopping/product/description.component';
import {CommentComponent} from './shopping/product/comment.component';

const routes: Routes = [{
  path: '', redirectTo: '/home', pathMatch: 'full'
}, {
  path: 'home', component: HomeComponent
}, {
  path: 'hello', component: HelloworldComponent
}, {
  path: 'product/:id', component: ProductComponent,
  children: [{
    path: '', redirectTo: 'desc', pathMatch: 'full'
  }, {
    path: 'desc', component: DescriptionComponent
  }, {
    path: 'comment', component: CommentComponent
  }]
}, {
  path: '**', component: NotFoundComponent
}];

const routesModule: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);

export {routesModule};
