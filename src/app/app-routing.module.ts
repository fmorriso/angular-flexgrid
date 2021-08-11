import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { AboutMaterialComponent } from './about-material/about-material.component';
//
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'material', component: AboutMaterialComponent },
  { path: '', pathMatch: 'full', redirectTo: 'about' },
];

const routeOptions: ExtraOptions = {
  enableTracing: true,
  useHash: false,
  relativeLinkResolution: 'corrected',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routeOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
