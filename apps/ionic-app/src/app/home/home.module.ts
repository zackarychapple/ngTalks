import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HomePage} from './home.page';
import {MatButtonModule, MatCardModule} from "@angular/material";
import {DesignSystemModule} from "../../../../../libs/design-system/src";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    DesignSystemModule, MatButtonModule, MatCardModule,
    FormsModule,
    RouterModule.forChild([{path: '', component: HomePage}])
  ],
  declarations: [HomePage]
})
export class HomePageModule {
}
