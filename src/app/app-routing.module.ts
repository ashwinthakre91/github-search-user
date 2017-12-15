import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule'},
  { path: 'detail/:id', loadChildren: 'app/shared/components/hero-detail/hero-detail.module#HeroDetailModule' },
  { path: 'heroes', loadChildren: 'app/heroes/heroes.module#HeroesModule'},
  { path: '', loadChildren: 'app/landing-page/landing-page.module#LandingPageModule'},
  { path: 'get-started', loadChildren: 'app/get-started/get-started.module#GetStartedModule'},
  { path: 'sign-in', loadChildren: 'app/sign-in/sign-in.module#SignInModule'},
  { path: 'users', loadChildren: 'app/users/users.module#UsersModule'},
  { path: 'user-details', loadChildren: 'app/user-details/user-details.module#UserDetailsModule'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
