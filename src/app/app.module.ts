import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerViewComponent } from './passenger-view/passenger-view.component';
import { UsViewComponent } from './us-view/us-view.component';
import { UserinfoViewComponent } from './userinfo-view/userinfo-view.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { UserdataViewComponent } from './userdata-view/userdata-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PassengerViewComponent,
    UsViewComponent,
    UserinfoViewComponent,
    ProductViewComponent,
    UserdataViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
