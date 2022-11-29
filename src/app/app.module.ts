import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerViewComponent } from './passenger-view/passenger-view.component';
import { UsViewComponent } from './us-view/us-view.component';
import { UserinfoViewComponent } from './userinfo-view/userinfo-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PassengerViewComponent,
    UsViewComponent,
    UserinfoViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
