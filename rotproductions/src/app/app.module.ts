import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ApiRequestService } from './api-request.service';
import { HttpClientModule } from "@angular/common/http";
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { MiniMovieModule } from './mini-movie/mini-movie.module';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
 // Because of lazy loading, list shared imports & provides here
 // Instead of listing in each individual modules..
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    MenuItemComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MiniMovieModule,
    HomeModule,
    ContactModule
  ],
  providers: [
    ApiRequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
