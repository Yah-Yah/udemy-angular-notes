import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// STEP_03: Add FormsModule subpackage to the module so the typescript knows
// we're going to use FormsModule feature such as ngModule directive in our html
// file (<input>).
// This is only TYPESCRIPT import, it makes the module available for angular to import below

import { AppComponent } from './app.component';
// 01-Basics_02_STEP_10 We need to import our registered ServerComponent for
// typeScript to be able to recognise it
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
// 01-Basics_02_STEP_09 Register new components in 'declarations' array:
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
// 01-Basics_02_STEP_11 'imports' allow us to add more modules either from angular
// packages or created by us when we split up our aplication into more modules
  imports: [
    BrowserModule,
// STEP_04: Import FormsModule for angular
    FormsModule,
  ],
  providers: [],
// 01-Basics_01_STEP_05 this is bootstrap array that lists all components that
// should be known to the angular at the time of analysing index.html file.
  bootstrap: [AppComponent]
})
export class AppModule { }
// 01-Basics_02_STEP_08 app module is also a class with its own special decorator
// @NgModule imported from angular 'core' package. We have 4 properties set up
//  in the object passed into this decorator.
// Now we need to add another component and register it in the app module
