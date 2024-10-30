import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/api/products/product.service";
import {Products} from "../../services/api/models/products-interface";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";
import {HttpErrorResponse} from "@angular/common/http";

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
    const product: Products = {
      title: "My Product",
      description: "My product description",
      price: 150,
      category: "some catergory",
      image: "https://example-image.jpg"
    }

    this.service.creatProduct(product)
      .subscribe({
      next: (result: Products)=> {
        console.log(result);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      }
    });
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






