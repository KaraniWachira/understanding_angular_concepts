import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {ProductService} from "../../services/api/products/product.service";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {


}
