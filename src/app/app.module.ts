import { BrowserModule } from '@angular/platform-browser';
import { NgModule , LOCALE_ID} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FourOhfourComponent } from './four-ohfour/four-ohfour.component';
import { CarItemComponent } from './cars-list/car-item/car-item.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarsListComponent,
    HomePageComponent,
    FourOhfourComponent,
    CarItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [{ provide: LOCALE_ID, useValue: "fr-FR" }],
  bootstrap: [AppComponent]
})
export class AppModule { }