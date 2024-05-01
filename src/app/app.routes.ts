import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: '/home', component: HomePageComponent }
];
