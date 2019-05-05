import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HelloworldComponent} from './helloworld.component';
import {EmplFormComponent} from './empl.form.component';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './shopping/home/home.component';
import { SearchFormComponent } from './shopping/search-form/search-form.component';
import { ProductComponent } from './shopping/product/product.component';
import { StarsComponent } from './shopping/stars/stars.component';

import {routesModule} from './app.router';
import { NotFoundComponent } from './common/pages/not-found.component';
import { DescriptionComponent } from './shopping/product/description.component';
import { CommentComponent } from './shopping/product/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent,
    EmplFormComponent,
    HomeComponent,
    SearchFormComponent,
    ProductComponent,
    StarsComponent,
    NotFoundComponent,
    DescriptionComponent,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
