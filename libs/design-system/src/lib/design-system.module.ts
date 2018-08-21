import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgtButton, NgtCard, NgtCardContent, NgtMatCard, NgtRouterOutlet} from "./components/ionic-proxies";

const DECLARATIONS = [
  NgtCard,
  NgtCardContent,
  NgtMatCard,
  NgtRouterOutlet,
  NgtButton
];

@NgModule({
  imports: [CommonModule],
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class DesignSystemModule {
}
