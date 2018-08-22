import {ChangeDetectionStrategy, Component, Directive, ViewEncapsulation} from "@angular/core";
import {Card as IonCard, CardContent as IonCardContent} from '@ionic/angular'
import {MatButton, MatCard} from "@angular/material";
import {RouterOutlet} from "@angular/router";

@Directive({
  selector: 'ngt-card'
})
export class NgtCard extends IonCard {

}

@Directive({
  selector: 'ngt-card-content'
})
export class NgtCardContent extends IonCardContent {

}

@Component({
  selector: `button[omg]`,
  template: `
    <div>OMG this is awesome<ng-template></ng-template></div>`,
  styles: ['div{color:pink;}']
})
export class OmgtButton{

}

@Component({
  selector: `button[ngt-button], button[ngt-raised-button], button[ngt-icon-button],
             button[ngt-fab], button[ngt-mini-fab], button[ngt-stroked-button],
             button[ngt-flat-button]`,
  inputs: ['disabled', 'disableRipple', 'color'],
  host: {
    'class': 'mat-button',
    '[disabled]': 'disabled || null',
    '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
  },
  templateUrl: '../../../../../node_modules/material2-srcs/src/lib/button/button.html',
  styleUrls: ['../../../../../node_modules/material2-srcs/src/lib/button/button.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgtButton extends MatButton {

}

@Component({
  selector: 'ngt-card',
  templateUrl: '../../../../../node_modules/material2-srcs/src/lib/card/card.html',
  styleUrls: ['../../../../../node_modules/material2-srcs/src/lib/card/card.scss'],
  host: {'class': 'mat-card'},
  encapsulation: ViewEncapsulation.None
})
export class NgtMatCard extends MatCard {

}

@Directive({selector: 'ngt-router-outlet'})
export class NgtRouterOutlet extends RouterOutlet {
  ngOnInit() {

  }
}
