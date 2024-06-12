import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CookiesRoutingModule } from './cookies-routing.module';
import { CookiesComponent } from './cookies.component';
import { DesktopComponent } from './components/desktop/desktop.component';
import { MobileComponent } from './components/mobile/mobile.component';
import { LandingModule } from '../../landing/landing.module';


@NgModule({
  declarations: [
    CookiesComponent,
    DesktopComponent,
    MobileComponent
  ],
  imports: [
    CommonModule,
    CookiesRoutingModule,
    LandingModule
  ]
})
export class CookiesModule { }
