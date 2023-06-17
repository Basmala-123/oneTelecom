import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'panel', loadChildren: () => import('./app-panel/app-panel.module').then(m => m.AppPanelModule) },
  { path: 'landing', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
