import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// STEP_03: Add FormsModule subpackage to the module so the typescript knows
// we're going to use FormsModule feature such as ngModule directive in our html
// file (<input>).
// This is only TYPESCRIPT import, it makes the module available for angular to import below

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
// STEP_04: Import FormsModule for angular
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
