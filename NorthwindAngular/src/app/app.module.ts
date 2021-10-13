import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NorthwindModule } from './northwind/northwind.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NorthwindModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
