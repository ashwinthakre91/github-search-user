import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {UserDetailsRoutingModule} from './user-details-routing.module';
import {UserDetailsComponent} from './user-details.component';
import {UsersService} from "../shared/services/users.service";


@NgModule({
  imports: [
    CommonModule,
    UserDetailsRoutingModule
  ],
  declarations: [
    UserDetailsComponent
  ],
  providers: [
    UsersService
  ]
})
export class UserDetailsModule { }
