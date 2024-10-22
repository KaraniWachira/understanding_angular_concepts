import { Routes } from '@angular/router';
import {FirstComponent} from "./components/first/first.component";
import {AboutComponent} from "./components/about/about.component";

export const routes: Routes = [
  {
    path: 'home',
    component: FirstComponent,
    title: 'Home'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About Page'
  },
  {
    path: 'about/:username',
    component: AboutComponent,
    title: 'About Page'
  }
];
