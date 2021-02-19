import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsListComponent } from './cars-list/cars-list.component';
import { FourOhfourComponent } from './four-ohfour/four-ohfour.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path: '' , component: HomePageComponent },
  {path: 'cars' , component: CarsListComponent },
  {path: 'not-found' , component: FourOhfourComponent },
  {path: '**' , redirectTo: 'not-found' }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
