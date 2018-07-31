import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NxModule} from '@nrwl/nx';
import {MatButtonModule, MatCardModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

const MATERIAL = [MatCardModule, MatButtonModule];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NxModule.forRoot(),
    ...MATERIAL
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
