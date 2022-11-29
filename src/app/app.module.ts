import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerViewComponent } from './passenger-view/passenger-view.component';
import { UsViewComponent } from './us-view/us-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PassengerViewComponent,
    UsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
