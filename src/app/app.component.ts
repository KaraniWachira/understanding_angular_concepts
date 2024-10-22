import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FirstComponent} from "./components/first/first.component";
import {MenuComponent} from "./components/menu/menu.component";
import {AboutComponent} from "./components/about/about.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponent, MenuComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'xample-app';
}
