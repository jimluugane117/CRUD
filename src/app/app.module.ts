import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Routes,RouterModule} from '@angular/router';
import {appRoutes} from './app.routing';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { Link1Component } from './link1/link1.component';
import { ProductosComponent } from './productos/productos.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    Link1Component,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }