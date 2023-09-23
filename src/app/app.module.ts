import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//  NgModule: This is used to configure an Angular module.
@NgModule({

  // declarations: This contains Angular artifacts that share common functionality bound 
  // to a specific application feature. Artifacts that can be added to this property are Angular 
  // components, directives, and pipes, which we will see in more detail later in the book. The 
  // main module of the application contains the main component by default.
  declarations: [

    //  AppComponent: The main component of the Angular application.
    AppComponent

  ],

  // imports: This contains other Angular modules whose declarations are needed by the 
  // current module. When an Angular module needs to use features from another module, it 
  // must import it first to start using it. The main application module imports BrowserModule
  // because it needs its functionality for loading the current application into the browser.
  imports: [

    //  BrowserModule: Configures an Angular application to run in the browser platform.
    BrowserModule,

    // This performs and handles navigation in an Angular application
    AppRoutingModule
  ],

  // providers: It contains special-purpose Angular artifacts that are called services. Services
  // handle complex tasks in an Angular application, such as communicating with an HTTP 
  // endpoint or interacting with a browser API.
  providers: [],

// bootstrap: Defines the component that will be loaded at application startup. The 
// bootstrap property is set only once in the main application module and is usually the 
// main component. You should not change it unless there is a compelling reason. 
  bootstrap: [AppComponent]
})
export class AppModule { }
