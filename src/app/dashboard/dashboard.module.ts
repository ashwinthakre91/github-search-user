import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import {HeroSearchComponent} from './hero-search/hero-search.component';
import {HeroService} from '../shared/services/hero.service';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    DashboardComponent,
    HeroSearchComponent
  ],
  providers: [HeroService]
})
export class DashboardModule { }
