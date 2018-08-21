import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NxModule} from '@nrwl/nx';
import {MatButtonModule, MatCardModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DesignSystemModule} from "@ngTalksWorkspace/design-system";
import {RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { SecondComponent } from './second/second.component';

const MATERIAL = [MatCardModule, MatButtonModule];

@NgModule({
  declarations: [AppComponent, HomeComponent, SecondComponent],
  imports: [
    BrowserAnimationsModule,
    NxModule.forRoot(),
    ...MATERIAL,
    DesignSystemModule,
    RouterModule.forRoot([
      {path:'', component: HomeComponent},
      {path:'second', component: SecondComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
