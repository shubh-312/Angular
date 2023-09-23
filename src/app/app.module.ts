import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeCard1Component } from './home-card1/home-card1.component';
import { HomeCard2Component } from './home-card2/home-card2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeCard1Component,
    HomeCard2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
