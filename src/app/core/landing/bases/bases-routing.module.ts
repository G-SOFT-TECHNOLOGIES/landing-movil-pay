import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasesComponent } from './bases.component';

const routes: Routes = [
  {
    path: '',
    component: BasesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasesRoutingModule { }
