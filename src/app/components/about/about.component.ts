import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/api/products/product.service";
import {Products} from "../../services/api/models/products-interface";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{

  constructor(
    private service : ProductService
  ) {
  }

  ngOnInit(): void {
    // this.service.getAllProductsWithLimit()
    //   .subscribe({
    //     next: (data) => {
    //       console.log(data);
    //
    //     }
    //   });

    // post new product //

  }


  // constructor(
  //   private activatedRoute: ActivatedRoute
  // ) {
  // }

  // param: any;
  // queryParam: any;
  //
  // ngOnInit(): void {
  //   console.log(this.activatedRoute);
  //   this.param = this.activatedRoute.snapshot.params['username'];
  //   this.queryParam = this.activatedRoute.snapshot.queryParams['course'];
  // }

}






