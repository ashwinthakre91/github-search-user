import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  loadChildren: 'app/dashboard/dashboard.module#DashboardModule'},
  { path: 'detail/:id', loadChildren: 'app/shared/components/hero-detail/hero-detail.module#HeroDetailModule' },
  { path: 'heroes',     loadChildren: 'app/heroes/heroes.module#HeroesModule'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}