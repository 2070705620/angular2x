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

@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent,
    EmplFormComponent,
    HomeComponent,
    SearchFormComponent,
    ProductComponent,
    StarsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
