import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BigHeroDetailComponent, HeroDetailComponent } from './hero-detail.component';
import { ClickDirective, ClickDirective2 } from './click.directive';
import { HeroFormComponent } from './hero-form.component';
import { heroSwitchComponents } from './hero-switch.components';
import { SizerComponent } from './sizer.component';
import { SvgComponent } from './svg.component';
import { InputComponent } from './input/input.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    BigHeroDetailComponent,
    HeroDetailComponent,
    HeroFormComponent,
    heroSwitchComponents,
    ClickDirective,
    ClickDirective2,
    SizerComponent,
    SvgComponent,
    InputComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/