import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasesRoutingModule } from './bases-routing.module';
import { BasesComponent } from './bases.component';
import { MobileComponent } from './components/mobile/mobile.component';
import { DesktopComponent } from './components/desktop/desktop.component';
import { LandingModule } from "../landing.module";


@NgModule({
    declarations: [BasesComponent, MobileComponent, DesktopComponent],
    imports: [
        CommonModule,
        BasesRoutingModule,
        LandingModule
    ]
})
export class BasesModule { }
