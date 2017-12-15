import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {UsersComponent} from './users.component';
import {UsersRoutingModule} from './users-routing.module';
import {UsersSearchService} from '../shared/services/users-search.service';


@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  declarations: [
    UsersComponent
  ],
  providers: [
    UsersSearchService
  ]
})
export class UsersModule { }
