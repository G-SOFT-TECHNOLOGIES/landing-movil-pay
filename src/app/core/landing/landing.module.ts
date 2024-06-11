import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingComponent } from './landing.component';
import { MobileComponent } from './mobile/mobile.component';
import { DesktopComponent } from './desktop/desktop.component';
import { ServiciosComponent } from './desktop/components/servicios/servicios.component';
import { AliadosComponent } from './desktop/components/aliados/aliados.component';
import { FuncionaComponent } from './desktop/components/funciona/funciona.component';
import { ContactoComponent } from './desktop/components/contacto/contacto.component';
import { LandingRoutingModule } from './landing-routing.module';
import { AliadosComponentMobile } from './mobile/components/aliados/aliados.component';
import { ServiciosComponentMobile } from './mobile/components/servicios/servicios.component';
import { FuncionaComponentMobile } from './mobile/components/funciona/funciona.component';
import { ContactoComponentMobile } from './mobile/components/contacto/contacto.component';
import { DrawerComponent } from './mobile/components/drawer/drawer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BasesComponent } from './bases/bases.component';
import { MaterialExampleModule } from 'src/material.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [LandingComponent, MobileComponent, DesktopComponent, 
    ServiciosComponent, 
    AliadosComponent, 
    FuncionaComponent, 
    ContactoComponent,
    AliadosComponentMobile,
    ServiciosComponentMobile,
    FuncionaComponentMobile,
    ContactoComponentMobile,
    DrawerComponent,
    
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    FontAwesomeModule,
    MaterialExampleModule

  ],
  exports:[
    ContactoComponentMobile,
    ContactoComponent,
  ]
})
export class LandingModule { }
