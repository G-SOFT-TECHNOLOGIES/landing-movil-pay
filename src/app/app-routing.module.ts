import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path :'',
    redirectTo:'landing',
    pathMatch:'full'
  },
  {
    path:'landing',
    loadChildren:()=>import('../app/core/landing/landing.module').then(m=>m.LandingModule),
  },
  {
    path:'politicas',
    loadChildren:()=>import('../app/core/landing/bases/bases.module').then(m=>m.BasesModule),
  },
  {
    path:'cookies',
    loadChildren:()=>import('../app/core/politicas/cookies/cookies.module').then(m=>m.CookiesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
