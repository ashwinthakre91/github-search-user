import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HeroesRoutingModule} from './heroes-routing.module';

import { HeroesComponent } from './heroes.component';
import {HeroService} from '../shared/services/hero.service';

@NgModule({
  imports: [
    CommonModule,
    HeroesRoutingModule
  ],
  declarations: [
    HeroesComponent
  ],
  providers: [HeroService]
})
export class HeroesModule { }
