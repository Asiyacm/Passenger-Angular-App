import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerViewComponent } from './passenger-view/passenger-view.component';
import { UsViewComponent } from './us-view/us-view.component';
import { UserinfoViewComponent } from './userinfo-view/userinfo-view.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { UserdataViewComponent } from './userdata-view/userdata-view.component';
import { TodoViewComponent } from './todo-view/todo-view.component';
import { QuotesViewComponent } from './quotes-view/quotes-view.component';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';

const myRoute: Routes=
[
  {
    path:"",
    component: PassengerViewComponent
  },
  {
  path:"product",
  component: ProductViewComponent
},
{
  path:"quotes",
  component: QuotesViewComponent
},

{
  path:"us",
  component: UsViewComponent
},
{
  path:"userdata",
  component: UserdataViewComponent
},
{
  path:"userinfo",
  component: UserinfoViewComponent
}

]

@NgModule({
  declarations: [
    AppComponent,
    PassengerViewComponent,
    UsViewComponent,
    UserinfoViewComponent,
    ProductViewComponent,
    UserdataViewComponent,
    TodoViewComponent,
    QuotesViewComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
