import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
  { path: 'dashboard',  loadChildren: 'app/dashboard/dashboard.module#DashboardModule'},
  { path: 'detail/:id', loadChildren: 'app/shared/components/hero-detail/hero-detail.module#HeroDetailModule' },
  { path: 'heroes',     loadChildren: 'app/heroes/heroes.module#HeroesModule'},
  { path: 'landing-page',     loadChildren: 'app/landing-page/landing-page.module#LandingPageModule'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
