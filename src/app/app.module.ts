import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';

import { MaterializeModule } from 'ng2-materialize';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// routing module
import { AppRoutingModule } from './app-routing.module';
// components
import { AppComponent } from './app.component';
// services
import { HeroService } from './shared/services/hero.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    HeroService,
    /*{ provide: APP_BASE_HREF, useValue: '/#' }*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
